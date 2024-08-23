const TestimonialFooter = ({ author, company }) => {
  return (
    <div className='flex items-center gap-4'>
      <p className='text-sm font-bold'>{author}</p>
      <div className='text-blue-500 font-black text-xl'>/</div>
      <p className='text-sm font-light'>{company}</p>
    </div>
  )
}

export default TestimonialFooter
