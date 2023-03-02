import express from 'express';
import { engine } from 'express-handlebars';
import checkoutRoutes from './routes/checkoutRoutes.js';

const app = express();
const port = 3000;

// Set View Engine
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './views');
// Static Files
app.use('/public', express.static('public'));

// Middleware

// - Application level middleware
// app.use((req, res, next) => {
//   try {
//     console.error('Oh no it broke!');
//     throw new Error('Oh noooo');
//   } catch (error) {
//     next(error);
//   }
// });
app.use((err, req, res, next) => {
  console.error(err.message);
  if (err) {
    res.status(500).end('This was terribly wrong. Fix it!');
  }
  next();
});
// - Router-level middleware
// - Error handling middleware
// - Built in middleware
// - Third Party middleware

// Views
// App Route Definition
app.get('/', (req, res) => {
  res.render('home', {
    title: 'Express Demo',
    pageTitle: 'Hello World',
    pageMessage: 'Hey Square Table, It\'s me express!',
  });
});

// Mini App Routers
app.use('/checkout', checkoutRoutes);

// Routes
app.get('/about/:type/:number', (req, res) => {
  res.render('about', {
    title: 'Express - Demo',
    pageTitle: `Express - ${req.params.type}`,
    pageMessage: 'Hey Square Table, It\'s Doge!',
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`);
});
