
const express = require('express')
const app = express()
const port = 3002
const cors = require('cors');
const mysql = require('mysql2')
const bodyParser = require('body-parser')

app.listen(port, () => {
  console.log(`Server listening on: http://localhost:${port}`)
})

app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.json())

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'gigapay',
});

app.post("/api/employees", (req, res) => {
  const phoneNumber = req.body.phoneNumber;
  const name = req.body.name;
  const email = req.body.email;
  const country = req.body.country;

  const sqlInsert = "INSERT INTO giggers (phoneNumber, name, email, country) VALUES (?,?,?,?)";
  db.query(sqlInsert, [phoneNumber, name, email, country], (err, result) => {
    if (err) {
      console.log(err)
    } else {
      console.log(result)
    }
  })
})
