const express = require('express');
const app = express();

const cors = require('cors');

app.use(cors({
    origin: 'http://localhost:8080' // Permet l’accès uniquement de mon localhost
}));


app.use(express.json());


const items = [
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
];
app.get('/api/items', (req, res) => {
    res.json(items);
});


app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/api/add-item', (req, res) => {
    // Accéder aux données envoyées dans la requête POST via req.body
    const newItem = req.body;
    console.log(req.body)
    console.log(newItem); // Traiter l'item reçu (comme l'ajouter dans une base de données)

    // Envoyer une réponse au client
    res.status(201).send('Item ajouté avec succès');
});


app.get('/maroute/plusderoute', (req, res) => {
    res.send('Hello World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
