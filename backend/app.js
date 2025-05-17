const express = require('express');
const { Pool } = require('pg');
const cors = require('cors');

const app = express();
const port = 3000;
app.use(cors());

const pool = new Pool({
  host: 'db',
  database: 'dance_db',
  port: 5432,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

app.get('/users', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM users');
    res.json(result.rows);
  } catch (err) {
    console.error(err);
    res.status(500).send('Server error');
  }
});

app.get('/hello', async (req, res) => {
    res.send('Hello world!');
    console.log('Hello world sent');
})

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
