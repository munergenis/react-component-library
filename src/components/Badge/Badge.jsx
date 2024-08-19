const Badge = ({ color = 'gray', shape = 'rounded', border = false, children }) => {
  const shapeStyle = {
    square: 'rounded',
    rounded: 'rounded-lg',
    pill: 'rounded-full',
  }

  const colorStyle = {
    gray: 'text-gray-800',
    red: 'text-red-800',
    yellow: 'text-yellow-800',
    green: 'text-green-800',
    blue: 'text-blue-800',
    indigo: 'text-indigo-800',
    purple: 'text-purple-800',
    pink: 'text-pink-800',
  }

  const bgStyle = {
    gray: 'bg-gray-100',
    red: 'bg-red-100',
    yellow: 'bg-yellow-100',
    green: 'bg-green-100',
    blue: 'bg-blue-100',
    indigo: 'bg-indigo-100',
    purple: 'bg-purple-100',
    pink: 'bg-pink-100',
  }

  const borderStyle = {
    gray: 'border-2 border-gray-300',
    red: 'border-2 border-red-300',
    yellow: 'border-2 border-yellow-300',
    green: 'border-2 border-green-300',
    blue: 'border-2 border-blue-300',
    indigo: 'border-2 border-indigo-300',
    purple: 'border-2 border-purple-300',
    pink: 'border-2 border-pink-300',
  }

  return (
    <span
      className={`
        font-bold 
        w-fit 
        px-4 
        py-1 
        ${shapeStyle[shape]} 
        ${!border && bgStyle[color]} 
        ${colorStyle[color]} 
        ${borderStyle[color]} 
        ${!border && 'border-transparent'}
      `}
    >{children}
    </span>
  )
}

export default Badge
