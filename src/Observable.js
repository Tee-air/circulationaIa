import { fromEvent } from 'rxjs';
const el = document.getElementById('my-element'); // Create an Observable that will publish mouse movements

const mouseMoves = fromEvent(el, 'mousemove'); // Subscribe to start listening for mouse-move events

const subscription = mouseMoves.subscribe(evt => {
  // Log coords of mouse movements
  console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);

  if (evt.clientX < 40 && evt.clientY < 40) {
    subscription.unsubscribe();
  }
});