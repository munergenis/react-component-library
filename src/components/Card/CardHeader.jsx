const CardHeader = ({ className, icon, iconScale = '100', iconPadding = 'md', img, imgSize = 'md', imgPosition = 'center' }) => {
  const iconScaleStyle = {
    50: 'scale-50',
    75: 'scale-75',
    90: 'scale-90',
    95: 'scale-95',
    100: 'scale-100',
    105: 'scale-105',
    110: 'scale-110',
    125: 'scale-125',
    150: 'scale-150',
  }
  const iconPaddingStyle = {
    xs: 'w-12',
    sm: 'w-14',
    md: 'w-16',
    lg: 'w-20',
    xl: 'w-24',
  }

  const imgSizeStyle = {
    xs: 'w-4/12',
    sm: 'w-6/12',
    md: 'w-8/12',
    lg: 'w-10/12',
    xl: 'w-12/12',
  }

  const imgPositionStyle = {
    top: 'object-top',
    center: 'object-center',
    bottom: 'object-bottom',
    left: 'object-left',
    right: 'object-right',
  }

  return (
    <>
      {icon &&
        <header
          className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit rounded-xl flex justify-center items-center text-white bg-black shadow-lg shadow-neutral-400 ${className}`}
        >
          <img className={`${iconScaleStyle[iconScale]} object-none ${iconPaddingStyle[iconPadding]}`} src={icon} alt='icon' />
        </header>}

      {img &&
        <header
          className={`w-full h-full rounded-xl flex justify-center items-center ${className}`}
        >
          <img className={`aspect-video -mt-20 object-cover rounded-xl shadow-lg shadow-neutral-400 ${imgSizeStyle[imgSize]} ${imgPositionStyle[imgPosition]}`} src={img} />
        </header>}
    </>
  )
}

export default CardHeader
