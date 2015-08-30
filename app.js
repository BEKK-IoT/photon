var five = require("johnny-five");
var fire = require("devices-core").firebase;
var Particle = require("particle-io");

var board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

board.on("ready", function() {

  // Create a new `potentiometer` hardware instance.
  var potentiometer = new five.Sensor({
    pin: "A3",
    freq: 500
  });

  // Inject the `sensor` hardware into
  // the Repl instance's context;
  // allows direct command line access
  board.repl.inject({
    pot: potentiometer
  });

  // "data" get the current reading from the potentiometer
  potentiometer.on("data", function() {
    fire.send("light", this.value);
    console.log(this.value, this.raw);
  });
});
