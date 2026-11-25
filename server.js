
const express = require('express');
const app = express();

app.set('view engine', 'pug');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

let posts = [];

app.get('/', (req, res) => {
  res.render('index', { posts });
});

app.post('/posts', (req, res) => {
  const message = req.body.message?.trim();

  if (message && message.length <= 200) {
    posts.unshift(message);
  }

  res.redirect('/');
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
