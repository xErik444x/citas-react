
export const FormInput = ({texto, placeholder, type, value, setValue}) => {
  return (
    <div className="mb-5">
        <label
        htmlFor={texto || ''}
        className="block text-gray-700 uppercase font-bold"
        >
        {texto || ''}
        </label>
        <input
        id={texto || ''}
        className="border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md"
        type={type || 'text'}
        placeholder={placeholder || ''}
        value={value || ''}
        onChange={(e) => setValue(e.target.value)}
        />
    </div>
  )
}
