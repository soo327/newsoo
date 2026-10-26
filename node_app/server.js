const express = require('express');
const app = express();
const PORT = 3001;

app.get('/', (req, res) => {
    res.send('<h1>Welcome to UPCODE. 100% professional</h1>');
});

app.listen(PORT, () => {
    console.log(`Server running at http://127.0.0.1:${PORT}/`);
});