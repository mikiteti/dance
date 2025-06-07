import type { ReactNode } from "react";

interface Props {
  children: string | ReactNode;
  active: boolean;
  className: string;
}

function GlassGroup({ children, active, className } : Props) {
  return (
    <div className={"group w-full " + (active ? "glass-active" : "")}>
      <div className={className + " w-full shadow-md rounded-4xl not-first:mt-6 group-[.glass-active]:shadow-lg bg-[#0003] group-[.glass-active]:bg-[#ffff] backdrop-blur-2xl group-[.glass-active]:text-black"}>
        {children}
      </div>
    </div>
  )
}

export default GlassGroup
