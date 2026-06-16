const mysql = require('mysql2');

// Replace with your actual database credentials
const connection = mysql.createConnection({
  host: 'localhost',       // or remote host e.g. 'us-east.mysql.com'
  user: 'root',   // e.g., 'root'
  password: '0525',
  database: 'My projectdb'
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting:', err.stack);
    return;
  }
  console.log('Connected to MySQL as ID', connection.threadId);
});

// Test query
connection.query('SELECT 1 + 1 AS result', (err, results) => {
  if (err) throw err;
  console.log('Result:', results[0].result);  // Should print: 2
});

connection.end();
