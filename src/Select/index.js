import "./style.css";

const Select = (props) => (

    <select className="select" name="currency">
        <option value="EUR" selected>Euro</option>
        <option value="DOL">Dolar</option>
        <option value="GBP">Funt brytyjski</option>
    </select>
);

export default Select;