const BannerText = ({ children, className }) => {
  return (
    <p className={`text-sm ${className}`}>{children}</p>
  )
}

export default BannerText
