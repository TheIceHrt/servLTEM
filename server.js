const net = require('net');

// Création du serveur TCP
const server = net.createServer((socket) => {
  console.log('Client connecté:', socket.remoteAddress + ':' + socket.remotePort);

  // Lorsque le serveur reçoit des données du client
  socket.on('data', (data) => {
    console.log('Données reçues:', data.toString());
    // Envoie d'une réponse simple au client
    socket.write('Donnée reçue !');
  });

  // Gestion de la déconnexion du client
  socket.on('end', () => {
    console.log('Client déconnecté');
  });

  // Gestion des erreurs sur le socket
  socket.on('error', (err) => {
    console.error('Erreur sur le socket:', err);
  });
});

// Le port est défini par la variable d'environnement (utile pour certains hébergeurs) ou par défaut 12345
const PORT = process.env.PORT || 12345;
server.listen(PORT, () => {
  console.log('Serveur TCP en écoute sur le port', PORT);
});