import dotTexture from 'assets/textures/dot-texture.png'

const Testimonial = ({ icon, iconAlt, iconScale = '100', children }) => {
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

  return (
    <div className='relative bg-neutral-100 w-full px-32 aspect-[16/4] flex flex-col items-center justify-center text-center'>
      <img className='absolute z-0 h-full left-0 bottom-0 bg-gradient-to-r from-neutral-200 to-transparent opacity-65' src={dotTexture} alt='background dotted texture' />
      <div className='max-w-2xl flex flex-col justify-center items-center gap-6'>
        <img className={`${iconScaleStyle[iconScale]} z-10`} src={icon} alt={iconAlt} />
        {children}
      </div>
    </div>
  )
}

export default Testimonial
