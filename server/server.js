const express = require('express');
const path = require('path');

const messagesRouter = require('./router/messages.router');
const eventsRouter = require('./router/events.router');
const showsRouter = require('./router/shows.router');
const actsRouter = require('./router/acts.router');
const sessionsRouter = require('./router/sessions.router');
const scenesRouter = require('./router/scenes.router');

const app = express();
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('./swagger.json');
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
const PORT = process.env.PORT || 3000;

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

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
// app.use('/friends', friendsRouter);
app.use('/messages', messagesRouter);
app.use('/events', eventsRouter);
app.use('/shows', showsRouter);
app.use('/acts', actsRouter);
app.use('/sessions', sessionsRouter);
app.use('/scenes', scenesRouter);

app.get('/blog', (req, res) => {
  res.render('index', {
    title: 'Travels Blog',
    caption: 'Jumpie'
  });
});
app.get('/', (req, res) => {
  return res.json({
    appVersion: '0.2.1',
    name: 'StageFlow',
    description: 'Musical Stage Management App ',
    company: 'Soft Creative Ltd'
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
});
