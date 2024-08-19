const HeaderNavbar = ({ children }) => {
  const items = children.map(item => (
    <li
      key={item.props.href}
      className='group transition duration-300'
    >
      {item}
      <span className='block max-w-full group-hover:-translate-y-1 transition-all duration-300 h-px bg-neutral-700' />
    </li>
  ))
  return (
    <>
      <nav>
        <ul className='flex gap-4 text-lg'>
          {items}
        </ul>
      </nav>
    </>
  )
}

// className='block max-w-0 group-hover:max-w-full transition-all duration-500 h-px bg-black'

export default HeaderNavbar
