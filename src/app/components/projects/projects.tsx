import * as React from 'react';

export const Projects = () => (
   <div
      className="grid grid-cols-3 gap-12 mt-4" // TODO: dynamic based on breakpoint
   >
      <div
         className="bg-black rounded-lg min-h-[420px]"
      >
      </div>
      <div
         className="bg-black rounded-lg min-h-[420px]"
      >
         Thing 2
      </div>
      <div
         className="bg-black rounded-lg min-h-[420px]"
      >
         Thing 3
      </div>
   </div>
);
