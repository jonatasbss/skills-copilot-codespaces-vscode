// Create web server for comment

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

let comments = [];

// Get comments
app.get('/comments', (req, res) => {
    res.json(comments);
});

// Post a comment
app.post('/comments', (req, res) => {
    const { name, comment } = req.body;
    if (!name || !comment) {
        return res.status(400).json({ error: 'Name and comment are required' });
    }

    const newComment = { id: comments.length + 1, name, comment };
    comments.push(newComment);
    res.status(201).json(newComment);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
