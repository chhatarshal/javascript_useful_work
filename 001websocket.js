
console.log('creating a web socket');
let socket = new WebSocket("ws://localhost:3000");

console.log('now we have to listen events. There are four event');
console.log('1. Open')
console.log('2. Close')
console.log('3. Error')
console.log('4. Message')


socket.onopen = function(e) {
    alert("[open] Connection established");
    alert("Sending to server");
    socket.send("My name is John");
  };


  socket.onmessage = function(event) {
    alert(`[message] Data received from server: ${event.data}`);
  };
  
  socket.onclose = function(event) {
    if (event.wasClean) {
      alert(`[close] Connection closed cleanly, code=${event.code} reason=${event.reason}`);
    } else {
      // e.g. server process killed or network down
      // event.code is usually 1006 in this case
      alert('[close] Connection died');
    }
  };
  
  socket.onerror = function(error) {
    alert(`[error] ${error.message}`);
  };