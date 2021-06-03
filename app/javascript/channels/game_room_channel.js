import consumer from "./consumer"

const GameRoomChannel = consumer.subscriptions.create("GameRoomChannel", {
  connected() {
    console.log('connected, ready for full duplex')
  },

  disconnected() {
    console.log('socket is not connected')
  },

  received(data) {
    return data;
  },

  speak(board) {
    this.perform('speak', { board: board})
  }
});

export {GameRoomChannel};