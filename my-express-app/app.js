const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({
    origin: 'http://localhost:8080', // Permet l’accès uniquement de mon localhost
    credentials: true
}));

app.get("/sync", (req, res) => {
    setTimeout(() => {
        res.json({ message: "Données synchrones chargées avec un délai de 3 secondes !" });
    }, 3000);
});

app.get("/async", (req, res) => {
    res.json({ message: "Données asynchrones chargées après le clic !" });
});

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get("/status", (req, res) => {
    res.json({ message: "Tout fonctionne parfaitement !" });
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
