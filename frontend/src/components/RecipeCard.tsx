import { Recipe } from '../types/recipe';

interface Props {
    recipe: Recipe;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}

export const RecipeCard = ({ recipe, onEdit, onDelete }: Props) => {
    return (
        <div className='bg-white rounded-lg shadow-md p-6 mb-4'>
            <h2 className='text-2xl font-bold mb-4'>{recipe.title}</h2>
            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Ingredients:</h3>
                <p className='whitespace-pre-line'>{recipe.ingredients}</p>
            </div>

            <div className='mb-4'>
                <h3 className='font-semibold mb-2'>Instruction:</h3>
                <p className='whitespace-pre-line'>{recipe.instructions}</p>
            </div>

            <div className='flex gap-2'>
                <button
                    className='bg-blue-500 text-white px-4 py-2 rounded hover: bg-blue-600'
                    onClick={() => onEdit(recipe.id)}>
                    Edit
                </button>
                <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => onDelete(recipe.id)}>
                    Delete
                </button>
            </div>
        </div>
    )
}