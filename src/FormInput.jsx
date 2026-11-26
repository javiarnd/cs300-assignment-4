function FormInput({ id, label, type = 'text', value, onChange, error }) {
    return (
        <>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
            />
            {error && <p className="error">{error}</p>}
        </>
    );
}

export default FormInput;