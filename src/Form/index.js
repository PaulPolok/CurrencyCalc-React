import React, { useState } from "react";
import "./style.css";
import Label from "./Label";
import Select from "./Select";
import Button from "./Button";
import Result from "./Result";



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
                <Result />
            </div>
        </fieldset>
    </form>
);

export default Form; 