const app = require('express')();
const cors = require('cors');
const quotes = require('./quotes');
const PORT = 3100;

app.use(cors());

app.get('/', (req, res) => {
  let api_docs = {
    'Welcome': 'This is the Movie Quotes API',
    'Routes': {
      '/': 'This index page. Contains _this_ message!',
      '/all': 'returns an object with all movie quotes',
      '/:id': 'returns an object with a single movie quote',
      '/new/:str': 'adds :str as a new quote to the database',
    },
  }
  res.json(api_docs);
});

app.get('/all', (req, res) => {
  res.json(quotes);
});

app.get('/new/:str', (req, res) => {
  const { str } = req.params;
  quotes.push(str);
  res.json({quote: str});
});

app.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({quote: quotes[id]});
});

app.listen(PORT, () => {
  console.log('backend running on port ' + PORT);
});
