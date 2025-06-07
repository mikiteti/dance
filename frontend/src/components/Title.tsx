import type { ReactNode } from "react"

function Title({ children } : { children: string | ReactNode }) {
  return (
    <h1 className='max-w-11/12 mx-auto px-4 text-[1.7rem] font-semibold mb-2 text-shadow-md'>
      { children }
    </h1>
  )
}

export default Title
