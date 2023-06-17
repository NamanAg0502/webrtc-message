import { Container, Input, Button } from '@nextui-org/react';
import io from 'socket.io-client';
import { useEffect } from 'react';

const socket = io('http://localhost:4000');

function App() {
  const sendMessage = () => {
    socket.emit('message', 'Hello world!');
  };

  useEffect(() => {
    socket.on('receive_message', (message) => {
      alert(message);
    });
  }, [socket]);

  return (
    <Container>
      <Input placeholder="Message..." />
      <Button onPress={sendMessage}>Send</Button>
    </Container>
  );
}

export default App;
