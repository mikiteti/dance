import type { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  className?: string;
}

function Glass({ children, className } : Props) {
  return (
    <div className={className + " shadow-md rounded-4xl mx-auto group-[.glass-active]:shadow-lg bg-[#0005] group-[.glass-active]:bg-[#ffff] backdrop-blur-2xl group-[.glass-active]:text-black"}>
      {children}
    </div>
  )
}

export default Glass
