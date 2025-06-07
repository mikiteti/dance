interface Item {
  key: string;
  title: string;
  value: string;
}

function List({items, className = ""} : { items: Item[], className: string}) {
  return (
    <div className={"w-full text-gray-200 group-[.glass-active]:text-gray-700 " + className}>
      {items.map(item => (
        <div key={item.key} className="flex py-1 not-first:border-t border-gray-200 group-[.glass-active]:border-gray-600">
          <p>{item.title}</p>
          <p className="ml-auto">{item.value}</p>
        </div>
      ))}
    </div>
  )
}

export default List
