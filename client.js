const net = require('net');
const { IP, PORT } = require("./constants");

const connect = function() {
  const conn = net.createConnection({
    host: IP,
    port: PORT
  });

  conn.setEncoding('utf8');

  conn.on('connect', () => {
    console.log("Successfully connected to game server" );

  })
  conn.on('data', (data) => {
    console.log(data);
  });

  conn.on('connect', () => {
    conn.write('Name: NIC');
    conn.write('Say: YOO')
  })
  
//   let delay = 0;
//   const orderArr = ['Move: up', 'Move: down', 'Move: left', 'Move: right'];
//   conn.on('connect', () => {
//     for (let order of orderArr) {
//       setTimeout(() => {
//         conn.write(order)
//     }, delay +=50);  
//   }

//   setInterval(() => {
//     conn.write('Move: up')
// }, delay);
//   })

  return conn

};

module.exports = {connect};


