interface Props {
  value: string;
  onClick(): void;
}

function Button({ value, onClick } : Props) {
  return (
    <p className="group-[.glass-active]:bg-black group-[.glass-active]:text-white bg-white text-black rounded-full text-md px-4 py-0.5 font-semibold" onClick={onClick}>
      {value}
    </p>
  )
}

export default Button
