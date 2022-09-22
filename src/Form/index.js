import "./style.css";
import Label from "./Label";
import Select from "./Select";
import Button from "./Button";

const Form = (props) => (
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <Label />
            <div className="">
                <Select />
                <Button />
            </div>
            <div>
                <span className="form__labelText">Kwota po przewalutowaniu: </span>
                <span className="form__result">N/A</span>
            </div>
        </fieldset>
    </form>
);

export default Form; 