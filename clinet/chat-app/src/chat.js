import React from 'react';
const Chat = ({socket,userName,room}) => {
    return (
        <div>
        <div className='chat-header'>
            <p>Live Chat</p>
        </div>
        <div className='chat-body'></div>
        <div className='chat-footer'></div>
        <input type='text' placeholder=''></input>
        </div>
     );
}
 
export default Chat;