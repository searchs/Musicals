const path = require('path');

function getMessages(req, res) {
  res.send(
    '<h3>Hello Message</h3> <p>From Controller. Getting them from Models later</p>'
  );
  // res.sendFile(path.join(__dirname, 'public', 'skimountain.jpeg'));
}

function postMessage(req, res) {
  res.send('Message from Message Controller!');
}

module.exports = {
  getMessages,
  postMessage
};
