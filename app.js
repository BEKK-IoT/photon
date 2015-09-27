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

});
