# photon

## Getting Started
First setup your photon device by following the [Getting started guide](https://docs.particle.io/guide/getting-started/connect/photon/) on the photon home page.

We use the particle-io library in this project. This library requires the [voodoospark](https://github.com/voodootikigod/voodoospark) firmware installed on the photon device.

Then we recommend storing the Particle token and device id to environment variables. These can be found in your [Particle cloud account](https://build.particle.io/).

```sh
export PARTICLE_TOKEN="your particle token"
export PARTICLE_DEVICE_ID="your device id"
```

Lastly ensure your host computer and the photon device are on the same local network. When your device is good to go, it should pulse with a cyan color.

## Installing

`npm install`

## Running

`npm run app`

## Example: Blinking LED with johnny-five

```js
import { firebase, five } from 'devices-core';
import Particle from 'particle-io'
const TEAM = 'my-awsome-team-name';
const fb = new firebase(TEAM);
const board = new five.Board({
  io: new Particle({
    token: process.env.PARTICLE_TOKEN,
    deviceId: process.env.PARTICLE_DEVICE_ID
  })
});


board.on("ready", function() {
  const led = new five.Led("D7");
  // Send a greet event to firebase
  fb.send('greet', {name: 'world'});

  // Wait for a greet event from firebase to turn the led on
  fb.on('greet', `users/${TEAM}`, () => led.off());
});
```

## References
- [Particle-io library][https://github.com/rwaldron/particle-io]
- [Voodoospark][https://github.com/voodootikigod/voodoospark]
- [Jhonny-five API](http://johnny-five.io/api/)
