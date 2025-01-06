import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { RecipeList } from './components/RecipeList';
import { EditRecipeForm } from './components/EditRecipeForm';
import { NewRecipeForm } from './components/NewRecipeForm';

const App = () => (
  <BrowserRouter>
    <div className="min-h-screen bg-gray-100">
      <nav className="bg-[#734060] text-white p-4">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <h1 className="text-4xl font-sacramento">Slice, Dice, Serve</h1>
          <div className="flex gap-4">
            <Link to="/" className="hover:text-gray-200">Home</Link>
            <Link to="/add" className="hover:text-gray-200">Add Recipe</Link>
          </div>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<RecipeList />} />
        <Route path="/edit/:id" element={<EditRecipeForm />} />
        <Route path="/add" element={<NewRecipeForm />} />
      </Routes>
    </div>
  </BrowserRouter>
);

export default App;