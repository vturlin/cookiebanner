import React from 'react';
import { createRoot } from 'react-dom/client';
import CookieBanner from './CookieBanner'; // Le composant que nous venons de créer

// 1. Créer la fonction d'initialisation
const initCMP = () => {
  // On vérifie si notre conteneur n'existe pas déjà pour éviter les doublons
  let container = document.getElementById('mon-cmp-root');
  
  if (!container) {
    // S'il n'existe pas, on le crée et on l'ajoute à la fin du <body>
    container = document.createElement('div');
    container.id = 'mon-cmp-root';
    document.body.appendChild(container);
  }

  // 2. On "monte" l'application React dans ce conteneur
  const root = createRoot(container);
  root.render(<CookieBanner />);
};

// 3. Lancer l'initialisation dès que le script est chargé
// On s'assure que le DOM de la page hôte est prêt
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initCMP);
} else {
  initCMP();
}
