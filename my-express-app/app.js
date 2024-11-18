const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/recherche', (req, res) => {
    // Récupérer les paramètres de la requête
    const { text, locations } = req.query;
    // Trouver en bases 
    // toutes les annonces qui     
    // contiennent le texte recherché
    // Situer autour des locations
    res.json(items); // J'envoie les résultats
});



const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
