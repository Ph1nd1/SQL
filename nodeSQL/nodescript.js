const Pool = require("pg").Pool;
const pool = new Pool({
  user: "onke",
  host: "localhost",
  database: "visitors",
  password: "123456r",
  port: 5432
});

function addNewVisitor(name, age, date, time, visited, comments) {
  pool.query(`INSERT INTO Visitors(name, age, date, time, visited, comments) VALUES (${name},${age}, ${date}, ${time}, ${visited}, ${comments})`, (err, res) => {
    console.log('visitors:', res)
    pool.end()
  })
}
addNewVisitor('Phind', 12, '01-11-2020', '12:45', 'SAM', 'To say hello');

function visitorsList(){
  pool.query('SELECT id, name from visitors', (err, res) => {
    console.log('visitors:', res.rows)
    pool.end()
  })
}
// visitorsList();

function deleteVisitor(name){
  pool.query(`DELETE FROM Visitors WHERE Name='${name}'`, (err, res) => {
    console.log(`Deleted: ${name}`, res.rows)
    pool.end()
  })
}
// deleteVisitor('Sam');

// function updateVisitor(id, name, age, date, time, visited, comments){
//   pool.query(`UPDATE Visitors SET Name=${name}, Age=${age}, date=${date}, Time=${time}, Visited=${visited}, Comments=${comments} WHERE id=${id};`, (err, res) => {
//     console.log(`Updated:`, res, err)
//     pool.end()
//   })
// }
// updateVisitor(3,'phindi')

function visitorId(id){
  pool.query(`SELECT * FROM visitors WHERE id=${id}`, (err, res) => {
    console.log('Visitor Selected:', res.rows)
    pool.end()
  })
}
// visitorId(4);

function deleteAllVisitors(){
  pool.query(`DELETE FROM Visitors`, (err, res) => {
    console.log(`All entries deleted:`, res.rows)
    pool.end()
  })
}
// deleteAllVisitors();