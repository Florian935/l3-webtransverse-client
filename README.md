# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Web Transverse Client

Pour lancer l'application: `npm start`

Prérequis: avoir `lancer` le serveur.


## Projet

Notre projet permet de gérer une collection de livre. On peut ajouter, supprimer et modifier un livre. De même, notre application contient la liste des utilisateurs. On peut également ajouter, supprimer et modifier un utilisateur.

On est parti sur un nouveau projet, from scratch.

## Points de blocage

Il n'y a pas vraiment eu de point de blocage. Ce qui a pris un peu de temps c'était de se consulter assez souvent la doc graphQL pour comprendre comment réaliser les requêtes entre le client et le serveur.

## Problème possible

Il survient parfois un problème quand on lance le `client` et que le `Service Worker` est en place:
`Unhandled Rejection (Error): Network error: Failed to fetch`

Lorsque cela survient, il suffit de faire un `Ctrl + F5`` pour vider le cache ou cela devrait régler le problème.