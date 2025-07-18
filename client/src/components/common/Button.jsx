const Button = ({ children, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="flex items-center gap-3 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-10 py-4 rounded-full font-bold text-xl shadow-xl hover:from-emerald-600 hover:to-green-600 transition duration-200"
    >
      {children}
    </button>
  )
}

export default Button