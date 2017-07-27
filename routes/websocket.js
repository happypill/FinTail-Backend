import usersController from '../controller/users';

module.exports = (io) => {

io.on('connection', (socket) => {
  console.log('current user', socket.request.user);

  socket.on('getAllStock', () => {
    usersController.getAllStock((user)=> {
      io.emit('Stock', user);
    })
  })

  socket.on('Latest User Stock Added', (stock) => {
    console.log("Websocket receive User", stock);
    socket.broadcast.emit('Broadcast for userStock', stock);
  })


})
}
