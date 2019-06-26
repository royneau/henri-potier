# La bibliothèque d'Henri Potier

Ce projet a été initié avec [Create React App](https://github.com/facebook/create-react-app), en utilisant Node.js v10.16.0.

## Installation

Après avoir cloné le dépôt, exécutez `npm install` dans le répertoire de travail pour installer tous les modules nécessaires à son fonctionnement.

## Utilisation

Dans le répertoire de travail, vous pouvez au choix lancer :

### `npm start`

Pour faire tourner l'application en mode "développement" (avec serveur web intégré).

Allez sur l'URL [http://localhost:3000](http://localhost:3000) pour voir le rendu dans votre navigateur.

### `npm run build`

Pour construire l'application de production dans le répertoire `build`.

Pour voir le rendu dans votre navigateur, vous devrez ensuite déployer l'application ou lancer localement un serveur web.

## Deux interfaces

Sur la branche `master`, les deux composants principaux (la bibliothèque et le panier) sont au sein de la même page.

Sur la branche `two-pages`, chacun de ces composants possède sa propre page et un menu de navigation permet de passer de l'une à l'autre.

Si vous souhaitez utiliser la version `two-pages` après la version `master`, n'oubliez pas d'exécuter `npm install` à nouveau afin d'installer `react-router-dom`.
