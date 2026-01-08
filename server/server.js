const express = require('express');
const cors = require ('cors');
const app = express();
const PORT = '5000';

app.use(cors());
app.use(express.json());

app.post('/api/login', (req, res) => {
    const { id, password } = req.body;

    console.log('try now!: ID: ${id}, PW: ${password}');

    if (id === "user1021" && password === "a12345") {
        res.status(200).json({ success: true, message: "SUCCESS!" });
    }
    else {
        res.status(401).json({ success: false, message: "ERROR!" });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});