import { EventEmitter } from "events";

const emitter = new EventEmitter;

emitter.emit('EVENT');

emitter.on('EVENT', () => {
    console.log('EVENT was fired');
})