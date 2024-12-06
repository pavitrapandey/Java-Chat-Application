import React, { useState, useRef, useEffect } from 'react';
import { MdSend, MdHome, MdAttachment, MdAttachFile } from 'react-icons/md';
import useChatContext from '../context/ChatContext';


const ChatPage = () => {
  const {
    roomId,
    currentUser,
    connected,
    setConnected,
    setRoomId,
    setCurrentUser,
  } = useChatContext();
  console.log(roomId);
  lo
  
  const [messages, setMessages]=useState([
    {
      content:'Hello',
      sender:'Pavitra',
    },
    {
      content:'Hello bhai',
      sender:'Om',
    },
    {
      content:'How are You',
      sender:'Rachit',
    },
    {
      content:'I am Fine!!',
      sender:'Pavitra',
    },
    {
      content:'Good',
      sender:'Om',
    },
  
  ]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const chatBoxRef = useRef(null);
  const [stompClient, setStompClient] = useState(null);
  const [RoomId, setRoomId] = useState("");
  const [currentUser]=useState("Pavitra")
  
  return (
    <div className="">
    {/* this is a header */}
    <header className="dark:border-gray-700  fixed w-full dark:bg-gray-900 py-5 shadow flex justify-around items-center">
      {/* room name container */}
      <div>
        <h1 className="text-xl font-semibold">
          Room : <span>Family Room</span>
        </h1>
      </div>
      {/* username container */}

      <div>
        <h1 className="text-xl font-semibold">
          User : <span>Pavitra Pandey</span>
        </h1>
      </div>
      {/* button: leave room */}
      <div>
        <button className="dark:bg-red-500 dark:hover:bg-red-700 px-3 py-2 rounded-full">
          Leave Room
        </button>
      </div>
    </header>

<main className="py-20 px-3 mx-auto w-2/3 dark:bg-slate-600 h-screen overflow-auto" >

{messages.map((message, index) => (
   <div key={index} className={`flex ${message.sender==currentUser? "justify-end":"justify-start"}`}>
     <div  className={`my-2 ${message.sender==currentUser? "bg-yellow-600":"bg-blue-600"} p-2 max-w-xs rounded-full`}>
      <div className="flex flex-row gap-2">
        <img className="h-10 w-10" src={'https://avatar.iran.liara.run/public/3'} alt="" />
      <div className=' flex flex-col gap-1'>

<p className="text-sm font-bold">{message.sender}</p>
<p>{message.content}</p>

</div>
      </div>
</div>
   </div>
  ))}
<div className="message_container">


</div>
</main>

    <div className=" fixed bottom-4 w-full h-16">
      <div className="h-full pr-10 gap-4 flex items-center justify-between rounded-full w-1/2 mx-auto  dark:bg-gray-900">
      <input type="text" placeholder="Type your message here...." className="dark:border-gray-700 dark:bg-gray-800 px-5 py-2 rounded-full h-full w-full focus:outline-none " />
     <div className="flex gap-1">
     <button className="dark:bg-purple-500  dark:hover:bg-purple-900 h-10 w-10 flex justify-center items-center
       rounded-full">
        <MdAttachFile size={20}/>
      </button>
     <button className="dark:bg-blue-500 dark:hover:bg-blue-900 h-10 w-10 flex justify-center items-center
       rounded-full">
        <MdSend size={20}/>
      </button>
     </div>
      </div>

    </div>
    </div>
  )
}

export default ChatPage