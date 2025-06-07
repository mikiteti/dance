import { useState } from "react"
import List from "./List";
import Button from "./Button";
import GlassGroup from "./GlassGroup";

interface Item {
  key: string;
  title: string;
  value: string;
}

interface Props {
  title: string;
  subtitle: string;
  list: Item[];
}

function Competition({ title, subtitle, list } : Props) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <GlassGroup active={active} className="p-7">
      <h1 className="text-xl font-semibold [font-variant:small-caps]">{title}</h1>
      <h2 className="text-gray-200 group-[.glass-active]:text-gray-700">{subtitle}</h2>
      <List className="mt-4" items={list}/>
      <div className="flex justify-end mt-3 pr-2">
        <Button value="Nevezés" onClick={handleClick} />
      </div>
    </GlassGroup>
  )
}

export default Competition
