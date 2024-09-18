const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Basic middleware to parse JSON
app.use(express.json());

// Define a simple route for the API
app.get('/health', (req, res) => {
    res.status(200).json({ status: 'API is healthy' });
});

// Sample API route for demonstration
app.get('/api/data', (req, res) => {
    res.status(200).json({ message: 'Here is your data!' });
});

// Start the server
app.listen(port, () => {
    console.log(`API running at http://localhost:${port}`);
});

module.exports = app;
