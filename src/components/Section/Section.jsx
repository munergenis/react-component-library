const Section = ({ id, children, className = '' }) => {
  return (
    <section id={id} className={`container w-full mx-auto scroll-mt-28 ${className}`}>

      {children}

    </section>
  )
}

export default Section
