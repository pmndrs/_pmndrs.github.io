export function H1({ children }: { children?: React.ReactNode }) {
  return (
    <h1 className="font-serif text-5xl uppercase leading-none tracking-tight sm:text-6xl md:text-7xl">
      {children}
    </h1>
  )
}
