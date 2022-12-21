import './input.css'

export default function Input({ label, type, value, placeholder, change }) {
    return (
        <label>
            <p>{label}</p>
            <input type={type} value={value} placeholder={placeholder} onChange={({ target }) => change(target)} />
        </label>
    )
}