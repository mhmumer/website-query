import { cn } from '@/lib/utils';
import React from 'react'
import {Bot, User} from "lucide-react"

interface MessageProps {
  content: string;
  isUserMessage: boolean
}

export const Message = ({content, isUserMessage}:MessageProps) => {
  return <div className={cn({
    "bg-zinc-800": isUserMessage,
    "bg-zinc-900/25":!isUserMessage,
  })}>
    <div className="p-6">
      <div className="flex max-w-3xl mx-auto items-start gap-2.5">
        
        <div className="flex flex-col ml-6 w-full">
          <div className="flex space-x-2 items-center">
            
          </div>
          <p className='text-sm font-normal py-2.5 text-gray-900 bg-white w-80 rounded-2xl p-4'>{content}</p>
        </div>
      </div>
    </div>
  </div>;
};

