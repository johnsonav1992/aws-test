const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
require('dotenv').config();
const PORT = process.env.PORT || 4000;

//Middleware
app.use(express.json());
app.use(cors());

app.use(express.static(path.resolve(__dirname, "../build")));

let words = [
  "Snail",
  "Lollygagging",
  "Independence",
  "Devmountain",
  "Jeeping",
  "Bees",
  "Elden Ring",
  "So Meta",
  "Yessir",
  "Barbell",
  "Lot's of Bees",
]

//Put endpoints here
app.get('/word', async (req, res) => {
  let word = words[Math.floor(Math.random()*words.length)]

  res.status(200).send(word)
})

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../build', 'index.html'));
});


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));