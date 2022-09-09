


function App() {
  return (
    <body className="body">
    <form className="form js-form">
        <fieldset className="form__fieldset">
            <legend className="form__legend">Kalkulator walut</legend>
            <p>
                <label className="form__label">
                    <span className="form__labelText">Podaj kwotę: </span><input className="form__field js-money" type="number"
                        min="1" step="0.01" name="money" />
                </label>
            </p>
            <p>
                <select className="form__select js-currency" name="currency">
                    <option value="EUR" selected>Euro</option>
                    <option value="DOL">Dolar</option>
                    <option value="GBP">Funt brytyjski</option>
                </select>
            </p>
            <p>
                <button className="form__button" name="submit">Przelicz</button>
            </p>
            <p>
                <span className="form__labelText">Kwota po przewalutowaniu: </span>
                <span className="form__result js-result">N/A</span>
            </p>
        </fieldset>
    </form>
</body>
  );
}

export default App;
