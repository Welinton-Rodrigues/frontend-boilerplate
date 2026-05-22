function Button({ children, onClick, className = '' }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`rounded-sm bg-primary px-3 py-3 text-sm font-normal text-white transition-opacity hover:opacity-80 ${className}`}
    >
      {children}
    </button>
  )
}

export default Button
