const CardMain = ({ children, className }) => {
  return (
    <div className={`w-fit mx-auto flex flex-col gap-4 ${className}`}>
      {children}
    </div>
  )
}

export default CardMain
