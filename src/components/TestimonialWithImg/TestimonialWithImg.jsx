import quoteIcon from 'assets/icons/quote-icon.png'

const TestimonialWithImg = ({ img, alt, imgPosition = 'center', children }) => {
  const imgPositionStyle = {
    top: 'object-top',
    center: 'object-center',
    bottom: 'object-bottom',
    left: 'object-left',
    right: 'object-right',
  }

  return (
    <div className='text-white relative w-full aspect-[16/4] bg-blue-800 flex items-center'>
      <img className={`absolute w-3/12 aspect-[10/12] object-cover ${imgPositionStyle[imgPosition]} left-[6%] rounded-lg shadow-xl shadow-neutral-600`} src={img} alt={alt} />
      <div className='ml-[31%] p-16 flex flex-col items-start'>
        <img className='scale-50 -translate-x-1/4' src={quoteIcon} alt='quote icon.' />
        <div className='flex flex-col gap-4'>
          {children}
        </div>
      </div>
    </div>
  )
}

export default TestimonialWithImg
