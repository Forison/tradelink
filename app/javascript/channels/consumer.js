// Action Cable provides the framework to deal with WebSockets in Rails.
// You can generate new channels where WebSocket features live using the `bin/rails generate channel` command.

import { createConsumer } from "@rails/actioncable"
// Use a function to dynamically generate the URL
const getWebSocketURL = () => {
  const token = localStorage.get('/_t');
  return `http://localhost:3000//cable?token=${token}`
}
createConsumer(getWebSocketURL)
export default createConsumer()
