import { useState, useEffect } from 'react';
import axios from 'axios';
import { Recipe } from '../types/recipe';
import { useNavigate, useParams } from 'react-router-dom';


export const EditRecipeForm = () => {
    const [recipe, setRecipe] = useState<Recipe>({ id: 0, title: '', ingredients: '', instructions: '' });
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        const fetchRecipe = async () => {
            const response = await axios.get(`http://localhost:8080/recipes/${id}`);
            setRecipe(response.data);
        };
        fetchRecipe();
    }, [id]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        await axios.put(`http://localhost:8080/recipes/${id}`, recipe);
        navigate('/');
    };
    
    return (
        <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md mt-8">
            <h2 className="text-2xl font-bold mb-6 text-[#983362]">Edit Recipe</h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Title</label>
                    <input
                        type="text"
                        value={recipe.title}
                        onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
                        className="w-full p-2 border rounded focus:ring-2 focus:ring-[#983362]"
                    />
                </div>
                <div className="mb-4">
                    <label className="block mb-2 font-medium">Ingredients</label>
                    <textarea
                        value={recipe.ingredients}
                        onChange={(e) => setRecipe({ ...recipe, ingredients: e.target.value })}
                        className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-[#983362]"
                    />
                </div>
                <div className="mb-6">
                    <label className="block mb-2 font-medium">Instructions</label>
                    <textarea
                        value={recipe.instructions}
                        onChange={(e) => setRecipe({ ...recipe, instructions: e.target.value })}
                        className="w-full p-2 border rounded h-32 focus:ring-2 focus:ring-[#983362]"
                    />
                </div>
                <div className="flex gap-4">
                    <button
                        type="submit"
                        className="bg-[#983362] text-white px-6 py-2 rounded hover:bg-[#7a2a4f]"
                    >
                        Save Changes
                    </button>
                    <button
                        type="button"
                        onClick={() => navigate('/')}
                        className="bg-gray-200 px-6 py-2 rounded hover:bg-gray-300"
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </div>
    );
};