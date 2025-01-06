import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Recipe } from '../types/recipe';
import { DeleteConfirmation } from './DeleteConfirmation';

export const RecipeList = () => {
    const [recipes, setRecipes] = useState<Recipe[]>([]);
    const [deleteModal, setDeleteModal] = useState({ show: false, id: 0, title: '' });
    const navigate = useNavigate();

    useEffect(() => {
        fetchRecipes();
    }, []);

    const fetchRecipes = async () => {
        const response = await axios.get('http://localhost:8080/recipes');
        setRecipes(response.data);
    };

    const handleDelete = async () => {
        await axios.delete(`http://localhost:8080/recipes/${deleteModal.id}`);
        setDeleteModal({ show: false, id: 0, title: '' });
        fetchRecipes();
    };

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="grid gap-6">
                {recipes.map(recipe => (
                    <div key={recipe.id} className="bg-white rounded-lg shadow-md p-6">
                        <h2 className="text-2xl font-bold text-[#983362] mb-4">{recipe.title}</h2>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Ingredients:</h3>
                            <p className="whitespace-pre-line">{recipe.ingredients}</p>
                        </div>
                        <div className="mb-4">
                            <h3 className="font-semibold mb-2">Instructions:</h3>
                            <p className="whitespace-pre-line">{recipe.instructions}</p>
                        </div>
                        <div className="flex gap-2">
                            <button
                                onClick={() => navigate(`/edit/${recipe.id}`)}
                                className="bg-[#983362] text-white px-4 py-2 rounded hover:bg-[#7a2a4f]"
                            >
                                Edit
                            </button>
                            <button
                                onClick={() => setDeleteModal({ show: true, id: recipe.id, title: recipe.title })}
                                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <DeleteConfirmation
                isOpen={deleteModal.show}
                onClose={() => setDeleteModal({ show: false, id: 0, title: '' })}
                onConfirm={handleDelete}
                recipeName={deleteModal.title}
            />
        </div>
    );
};