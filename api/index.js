const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.get('/api', (req, res) => {
    res.json({ message: 'Hello from Server!' });
});

app.post('/api/contact', (req, res) => {
    const { name, email, message } = req.body;

    // Here you would typically send an email
    // For now, we will just log it
    console.log('Contact Form Submission:', { name, email, message });

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'All fields are required' });
    }

    res.status(200).json({ success: true, message: 'Message received!' });
});

// For Vercel, we export the app. Vercel handles the server listening.
// However, if we run locally with `node api/index.js`, we might want to listen.
if (process.env.NODE_ENV !== 'production') {
    const PORT = 3000;
    // Check if we are being run directly
    if (require.main === module) {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    }
}

module.exports = app;
