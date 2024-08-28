"use client"

import { useChat } from "ai/react"
import { Messages } from "./Messages";

const ChatWrapper = ({ sessionId }: { sessionId: string}) => {
  const { messages, handleInputChange, input, handleSubmit} = useChat({
    api: "/api/chat-stream",
    body: { sessionId },
  });
   return (
     <div className="relative min-h-full bg-zinc-900 flex  flex-col justify-between gap-2">
       <div className="flex-1 text-black bg-zinc-800 justify-between flex flex-col">
         <Messages messages={messages}/>
       </div>
       <form onSubmit={handleSubmit} className="items-center justify-between p-4 flex">
         <input
           placeholder=""
           type="text"
           value={input}
               onChange={handleInputChange}
               className="text-black rounded-xl h-10"
            />
            <button type="submit">Send</button>
       </form>
     </div>
   );
};

export default ChatWrapper