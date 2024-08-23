const CardTitle = ({ children, className }) => {
  return (
    <h3
      className={`font-bold ${className}`}
    >
      {children}
    </h3>
  )
}

export default CardTitle
