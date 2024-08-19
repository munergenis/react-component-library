const Header = ({ children, className = '', title, img = null, icon = null, ...rest }) => {
  return (
    <header
      className={`fixed top-0 w-full p-4 md:p-8 shadow-lg ${className}`}
      {...rest}
    >

      <div
        className='container mx-auto flex justify-between items-end'
      >

        <div
          className='flex items-end gap-2'
        >

          {img &&
            <img
              className='h-8 w-auto'
              src={img.src}
              alt={img.alt}
            />}

          {icon && icon}

          <h1
            className='text-3xl'
          >
            {title}
          </h1>

        </div>

        {children}

      </div>

    </header>
  )
}

export default Header
