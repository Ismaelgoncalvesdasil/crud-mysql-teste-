npm install express mysql2 body-parser
<br>
node app.js
<br>
http://localhost:3000/items
<br>
create database test;
<br>
use test;
<br>
CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(255) NOT NULL
);
