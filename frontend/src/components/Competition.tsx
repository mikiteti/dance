import { useState } from "react"

function Competition({ data }) {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  }

  return (
    <div className={"group " + (active ? "glass-active" : "")}>
      <div className="glass max-w-11/12 p-7" onClick={handleClick}>
        <h1 className="text-2xl font-semibold [font-variant:small-caps]">{data.title}</h1>
        <h2 className="text-gray-200 group-[.glass-active]:text-gray-700">{data.subtitle}</h2>
        <div className="w-full mt-4 text-gray-200 group-[.glass-active]:text-gray-700">
          {data.list.map(item => (
            <div key={item.title} className="flex py-1 not-first:border-t border-gray-200 group-[.glass-active]:border-gray-600">
              <p>{item.title}</p>
              <p className="ml-auto">{item.value}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Competition
