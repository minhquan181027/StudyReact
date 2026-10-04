import { useState } from "react";
function ColorPicker() {
    const [color, setColor] = useState("#FFFF");

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div style={{ background: color }} className="color-display">
                <p>Selected Color : {color}</p>
            </div>
            <input type="color" value={color} onChange={
                (e) => setColor(e.target.value)
            }></input>
        </div>
    );
}
export default ColorPicker;