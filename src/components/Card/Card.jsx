const Card = ({ className, children }) => {
  return (
    <section
      className={`relative px-12 pt-16 pb-12 text-center flex flex-col gap-6 rounded-lg bg-gray-100 hover:shadow-lg hover:-translate-y-1 hover:scale-[1.01] transition-all ${className}`}
    >
      {children}
    </section>
  )
}

export default Card
