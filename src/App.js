import Label from "./Label";
import Select from "./Select";


function App() {
  return (
    <body className="body">
    <form className="form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <Label />
            </p>
            <p>
               <Select />
            </p>
            <p>
                <button className="form__button" name="submit">Przelicz</button>
            </p>
            <p>
                <span className="form__labelText">Kwota po przewalutowaniu: </span>
                <span className="form__result">N/A</span>
            </p>
        </fieldset>
    </form>
</body>
  );
}

export default App;
