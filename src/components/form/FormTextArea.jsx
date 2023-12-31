
export const FormTextArea = ({texto, placeholder, value, setValue}) => {
  return (
    <div className="mb-5">
      <label
        htmlFor="sintomas"
        className="block text-gray-700 uppercase font-bold"
      >
        {texto}
      </label>
      <textarea
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        id="sintomas"
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  )
}
