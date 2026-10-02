
function Button() {
    const handleClick = (e) => e.target.textContent = `Ouch`;

    return (
        <button onClick={() => handleClick(e)}>Click me bitch </button>
    )
}
export default Button;