import React from 'react'
import {type Message as Tmessage} from 'ai/react'
import {Message} from './Message';
import { MessageSquare } from 'lucide-react';

interface MessagesProps {
   messages: Tmessage[]
}

export const Messages = ({messages}:MessagesProps) => {
  return (
    <div className="flex max-h-[calc(100vh-3.5rem-7rem)] flex-1 flex-col overflow-y-auto">
      {messages.length ? (
        messages.map((message: any, i: any) => (
          <Message
            key={i}
            content={message.content}
            isUserMessage={message.roll === "user"}
          />
        ))
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center gap-2">
          <MessageSquare className="size-8 text-blue-500"></MessageSquare>
          <h3 className="font-semibold text-xl text-white">
            You&apos;re all set
          </h3>
          <p className="text-sm text-zinc-500">
            Ask your first question to get started
          </p>
        </div>
      )}
    </div>
  );
}

