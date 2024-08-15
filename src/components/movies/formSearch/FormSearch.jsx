import React, { useState } from 'react'

const Formsearch = ({getKeyWord}) => {
    const [inputValue, setInputValue] = useState("");
    const onInput = (e) => {
        const {value, name} = e.target;
        setInputValue(value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        getKeyWord(inputValue);
        setInputValue("");
    }

  return (
    <form onSubmit={onSubmit}>
        <button type='submit'>send</button> 
        <input onChange={onInput} value={inputValue} name="imput" type="text"/>
    </form>
  )
};

export default Formsearch;