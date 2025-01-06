const bodyParser = require('body-parser');
const pool = require('./utils.js'); 
const cors = require('cors');
const express = require('express');
const app = express();

app.use(bodyParser.json());
app.use(cors());

// Create (POST)
app.post("/recipes/new", async (req, res) => {
    const { title, ingredients, instructions } = req.body;

    try {
        const insertText = `INSERT INTO recipes (title, ingredients, instructions) VALUES ($1, $2, $3) RETURNING *`;
        const recipeValues = [title, ingredients, instructions];

        let response = await pool.query(insertText, recipeValues);

        res.status(200).json({
            msg: "Entry Created!",
            data: response.rows[0]
        });

    } catch (error) {
        console.log("Error" + error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Read - (GET)
app.get("/recipes", async (req, res) => {
    try {
        const selectRecipes = `SELECT * FROM recipes;`;
        const response = await pool.query(selectRecipes);

        // Log recipes on the server console
        // for (let recipe of response.rows) {
        //     console.log(`Title: ${recipe.title}, Ingredients: ${recipe.ingredients}, Instructions: ${recipe.instructions}`);
        // }

        // Send the recipes as JSON response
        res.status(200).json(response.rows);
    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Update (PUT)
app.put("/recipes/:id", async (req, res) => {
    const { title, ingredients, instructions } = req.body;
    const { id } = req.params;

    // COALESCE($1, title): If $1 (new title) is NULL, the current title in the database remains unchanged.
    try {
        const updateRecipeText = `
        UPDATE 
            recipes 
        SET 
            title=COALESCE($1, title), 
            ingredients=COALESCE($2, ingredients), 
            instructions=COALESCE($3, instructions)
        WHERE id=$4`;

        await pool.query(updateRecipeText, [title, ingredients, instructions, id]);

        res.status(200).json({ msg: "Entry Updated!" });

    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
});

// Delete (DELETE)
app.delete("/recipes/:id", async (req, res) => {
    const { id } = req.params;
    try {
        const deleteRecipeText = 'DELETE FROM recipes WHERE id = $1';
        const response = await pool.query(deleteRecipeText, [id]);

        res.status(200).json({ msg: `Todo with ID ${id} deleted!` });

    } catch (error) {
        console.error("Error: " + error.message);
        res.status(500).json({ msg: "Internal Server Error" });
    }
})

const PORT = 8080;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});