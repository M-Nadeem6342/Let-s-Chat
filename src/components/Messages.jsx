import React, { useContext, useEffect, useState} from 'react'
import { doc, onSnapshot } from 'firebase/firestore'
import Message from './Message'
import {db} from '../firebase'
import { ChatContext } from '../context/ChatContext'

export const Messages = () => {
  const [messages, setMessage] = useState([]);
  const { data } = useContext(ChatContext);

  useEffect(() => {
    const unSub = onSnapshot(doc(db,"chats",data.chatId),(doc)=>{
      doc.exists() && setMessage(doc.data().messages)
    })

    return () => {
      unSub()
    }
  },[data.chatId])
  return (
    <div className='messages'>
      {messages.map((m) => (
        <Message message={m} key={m.id}/>
      ))}
    </div>
  )
}
 