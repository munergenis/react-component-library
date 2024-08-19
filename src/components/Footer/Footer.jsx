const Footer = () => {
  return (
    <footer className='px-4 md:px-8 bg-blue-600 text-white p-4 mt-auto'>
      <div className='container mx-auto text-center md:text-left'>
        <p>&copy; 2024 Mi Página Web. Todos los derechos reservados.</p>
        <nav className='mt-2'>
          <ul className='flex justify-center md:justify-start space-x-4'>
            <li><a href='#' className='hover:underline'>Política de Privacidad</a></li>
            <li><a href='#' className='hover:underline'>Términos de Servicio</a></li>
            <li><a href='#' className='hover:underline'>Contacto</a></li>
          </ul>
        </nav>
      </div>
    </footer>
  )
}

export default Footer
