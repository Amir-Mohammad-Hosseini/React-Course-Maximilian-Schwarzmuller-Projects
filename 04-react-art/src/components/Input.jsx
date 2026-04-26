const Input = ({ label, invalid, ...props }) => {
  return (
    <p>
      <label className={`block mb-2 text-xs font-bold tracking-wide ${!invalid ? "text-stone-300" : "text-red-400"} uppercase`}>{label}</label>
      <input className={`w-full px-3 py-2 leading-tight border ${!invalid ? "bg-stone-300 text-gray-700 border-stone-200" : "text-red-500 bg-red-100 border-red-300"} rounded shadow`} {...props} />
    </p>
  );
}
export default Input
