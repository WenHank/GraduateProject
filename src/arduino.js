var express = require("express"),
  app = express(),
  server = require("http").Server(app),
  io = require("socket.io")(server, {
    cors: {
      origin: "http://localhost:3000",
      methods: ["GET", "POST"],
      allowedHeaders: ["my-custom-header"],
      credentials: true,
    },
  }),
  port = 3000;
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//   })
// );
//Server start
server.listen(port, () => console.log("on port" + port));

//user server
app.use(express.static(__dirname + "/public"));

io.on("connection", onConnection);

var connectedSocket = null;
function onConnection(socket) {
  connectedSocket = socket;
}

// Import dependencies
const { SerialPort, ReadlineParser } = require("serialport");
// const Readline = require("@serialport/parser-readline");

// Defining the serial port
const arduino_port = new SerialPort({
  path: "/dev/cu.usbmodem142101", //change com2
  baudRate: 9600,
});

// The Serial port parser
const parser = new ReadlineParser();
arduino_port.pipe(parser);

// Read the data from the serial port
parser.on("data", (data) => {
  console.log(data);
  io.emit("serialdata", { data: data });
});
