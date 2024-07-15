import { ComponentProps } from 'react'

export interface ButtonCta {
  className: string
}

type ButtonFloatProps = ComponentProps<'a'>

export function ButtonFloat(props: ButtonFloatProps) {
  return (
    <div className="fixed bottom-4 right-4 z-50 flex h-24 w-24 items-end justify-end p-2 hover:-translate-x-0 hover:scale-110 hover:transition-all hover:duration-300">
      <div className="absolute z-50 flex items-center justify-center rounded-full bg-gradient-to-r from-green-500 to-green-600 p-4 text-white shadow-inner shadow-black/30 hover:bg-brandWts/80 hover:transition-all focus:outline-none">
        <a
          className="decoration-transparent"
          aria-label="Clique no botão"
          {...props}
        />
      </div>
    </div>
  )
}
