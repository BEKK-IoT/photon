# photon

## Getting Started
We use the particle-io library in this project. This library requires the [voodoospark](https://github.com/voodootikigod/voodoospark) firmware installed on the photon device.

Then we recommend storing the Particle token and device id to environment variables.

```sh
export PARTICLE_TOKEN="your particle token"
export PARTICLE_DEVICE_ID="your device id"
```

Lastly ensure your host computer and the photon device are on the same local network. Then you should be good to go on your hacking.

## Installing

`npm install`

## Running

`npm run app`

## Example: Blinking LED with johnny-five

```js
var five = require("johnny-five");
var Particle = require("particle-io");
var board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});

board.on("ready", function() {
  var led = new five.Led("D7");
  led.blink();
});
```

## References
- [Particle-io library](https://github.com/rwaldron/particle-io)
- [Voodoospark](https://github.com/voodootikigod/voodoospark)
