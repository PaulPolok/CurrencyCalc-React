import "./style.css"

const Label = (props) => (
    <label className="label">
        <span className="label__text">Podaj kwotę (w PLN): </span>
        <input className="label__field" type="number" min="1" step="0.01" name="money" />
    </label>
)

export default Label;