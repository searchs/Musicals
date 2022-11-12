const express = require('express');
const path = require('path');

const friendsRouter = require('./router/friends.router');
const messagesRouter = require('./router/messages.router');
const eventsRouter = require('./router/events.router');
const segmentsRouter = require('./router/segments.router');
const sessionsRouter = require('./router/sessions.router');

const app = express();
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 3000;

app.use((req, res, next) => {
  const start = Date.now();
  next();
  const delta = Date.now() - start;
  console.log(
    `Request Details: ${req.method} - ${req.baseUrl}${req.url} processing took ${delta}ms`
  );
});

app.use('/travels', express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);
app.use('/events', eventsRouter);
app.use('/segments', segmentsRouter);
app.use('/sessions', sessionsRouter);

app.get('/blog', (req, res) => {
  res.render('index', {
    title: 'Travels Blog',
    caption: 'Jumpie'
  });
});
app.get('/', (req, res) => {
  return res.json({
    appServer: '0.1.1',
    description: 'Ultimate Express JS app',
    company: 'soocreative'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
