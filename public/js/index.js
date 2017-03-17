var socket = io();
socket.on('connect', function () {
  console.log('Connected to server')
});

//socket.emit('createMessage', {from: 'Steve', text: 'Hey!'});
//socket.emit('createMessage', {from: 'Karen', text: 'Hello!'});

socket.on('newMessage', function (message) {
  console.log('New message', message);
});

socket.on('disconnect', function () {
  console.log('Disconnected from server')
});
