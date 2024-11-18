
# Projet Vue + Express

Ce projet contient deux parties :  
- **my-express-app** : Une application backend construite avec Express.js.  
- **my-vue-app** : Une application frontend construite avec Vue.js.

## Pré-requis

Avant de commencer, assurez-vous d'avoir installé :  
- [Node.js](https://nodejs.org/) (version 16 ou supérieure recommandée)  
- [npm](https://www.npmjs.com/) (normalement inclus avec Node.js)  

---

## Installation

1. Clonez le dépôt :  
   ```bash
   git clone https://github.com/JavaKhanStudio/Vue_Express_Exemple.git
   ```

2. Installez les dépendances pour les deux parties :  

### Backend - my-express-app
   ```bash
   cd my-express-app
   npm install
   ```

### Frontend - my-vue-app
   ```bash
   cd ../my-vue-app
   npm install
   ```

---

## Utilisation

### Démarrer l'application backend (Express)
1. Naviguez vers le dossier `my-express-app` :  
   ```bash
   cd my-express-app
   ```

2. Lancez le serveur :  
   ```bash
   node app.js
   ```

3. Par défaut, le serveur tourne sur le port **3000**. Vous pouvez y accéder via :  
   ```
   http://localhost:3000
   ```

### Démarrer l'application frontend (Vue.js)
1. Naviguez vers le dossier `my-vue-app` :  
   ```bash
   cd ../my-vue-app
   ```

2. Lancez l'application :  
   ```bash
   npm run serve
   ```

3. Par défaut, l'application est accessible via :  
   ```
   http://localhost:8080
   ```

---

## Architecture du projet

```
Vue_Express_Example/
│
├── my-express-app/       # Application backend Express
│   ├── app.js            # Point d'entrée principal
│   ├── package.json      # Liste des dépendances backend
│   └── package-lock.json # Versionnement des dépendances backend
│
├── my-vue-app/           # Application frontend Vue.js
│   ├── src/              # Dossier principal des fichiers Vue.js
│   ├── public/           # Fichiers publics
│   ├── package.json      # Liste des dépendances frontend
│   └── vue.config.js     # Configuration Vue.js
│
├── .gitignore            # Fichiers/dossiers ignorés par Git
├── README.md             # Documentation du projet
└── .idea/                # Dossiers de configuration IDE (facultatif)
```

---

## Notes

- Assurez-vous que les deux serveurs (backend et frontend) fonctionnent simultanément.  
- Vous pouvez configurer un proxy dans le fichier `vue.config.js` pour que Vue.js puisse appeler l'API Express sans problème de CORS.  

---

## Licence

Ce projet est sous licence [MIT](https://opensource.org/licenses/MIT).  
