import React, { useState } from "react";
import Container from "./Container";
import Form from "./Form";
import { currency } from "./Form/currency.js";



function App() {

    const [result, setResult] = useState();

    const calculateResult = (currency, amount) => {
        const rate = currency.find(({ short }) => short === currency).rate;

        setResult ({})
    }

    return (
        <div>
            <Container>
                <Form />
            </Container>
        </div>
    );
}

export default App;
