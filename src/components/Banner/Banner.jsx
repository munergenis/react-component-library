const Banner = ({ status = 'success', children, className }) => {
  const statusStyle = {
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    error: 'bg-red-100 text-red-800',
    neutral: 'bg-blue-100 text-blue-800',
  }

  const iconStyle = `bg-${status}`

  return (
    <div className={`flex-1 flex gap-2 py-6 px-6 rounded max-w-xl w-full ${statusStyle[status]} ${className}`}>
      <div className={`${iconStyle} w-10 h-10 bg-no-repeat bg-center scale-50`} />
      <div className='py-2 flex flex-col gap-2 w-fit'>
        {children}
      </div>
    </div>
  )
}

export default Banner
