import type { ReactNode } from "react";
import Glass from "./Glass";

type Side = "left" | "right";
interface Props {
  side?: Side;
  children?: string | ReactNode;
}

function TopButton({ side = "right", children } : Props) {
  return (
    <Glass className={'z-50 fixed top-6 flex gap-2 py-1 rounded-full ' + (side == "right" ? "right-6 " : "left-6 ") + (children.length > 1 ? "px-2" : "px-1")}>
      {children}
    </Glass>
  )
}

export default TopButton;
