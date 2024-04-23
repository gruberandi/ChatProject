import io from 'socket.io-client'
import { useState } from 'react';
import Chat from './chat';
const socket = io.connect("http://localhost:3001")
function App() {
  const [userName, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = ()=>{
    if(userName !== "" && room !== ""){
      socket.emit("join_room",room)
    }
  }
  return (
    <div>
      <h3>
      Join Chat
      </h3>
      <input type='text' placeholder='John....' onChange={(e)=>setUsername(e.target.value)}/>
      <input type='text' placeholder='Room ID...' onChange={(e)=>setRoom(e.target.value)}/>
      <button onClick={joinRoom}>Join A Room</button>
      <Chat socket = {socket} userName={userName} room={room}/>
    </div>
  );
}
export default App;
