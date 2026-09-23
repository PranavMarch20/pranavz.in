// components/Tooltip.tsx
import { ReactNode } from 'react';

interface TooltipProps {
  message: string;
  children: ReactNode;
  className?: string
}

export function Tooltip({ message, children, className }: TooltipProps) {
  return (
    <div className={`group/tooltip relative flex flex-col items-center`}>
      {/* Trigger element */}
      {children}
      
      {/* Tooltip Content Container */}
      <div className={`
        absolute bottom-full mb-2 flex flex-col items-center ${className}
        /* Base Hidden State */
        opacity-0 pointer-events-none translate-y-1 scale-95
        
        /* Transition config - instantaneous reset on mouse leave */
        transition-all duration-100 ease-out delay-0
        
        /* Hover Active State - waits 50ms before fading/sliding in */
        group-hover/tooltip:opacity-100 
        group-hover/tooltip:pointer-events-auto 
        group-hover/tooltip:translate-y-0 
        group-hover/tooltip:scale-100 
        group-hover/tooltip:delay-50
      `}>
        <div className={`relative flex justify-center pb-2 ${message === "GitHub" ? "ml-8" : ""}`}>
          <span className="absolute bottom-full z-50 translate-y-2 w-max max-w-[200px] rounded-md bg-tooltip px-3 py-0.5 text-[11.5px] tracking-wide text-background text-center break-words">
            {message}
          </span>
        </div>

        <div className="-mt-2 h-3 w-3 rounded-xs rotate-45 bg-tooltip"></div>
      </div>
    </div>
  );
}
