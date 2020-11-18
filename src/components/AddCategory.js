import React, { useState } from "react";

const AddCategory = ({ setCategories }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleFormOnSubmit = (e) => {
    e.preventDefault();

    if( inputValue.trim().length > 2 ){
      setCategories((oldCategories) => [inputValue, ...oldCategories]);
      setInputValue("");
    }

  };

  return (
    <form onSubmit={ handleFormOnSubmit }>
      <input
        placeholder="Ingresar categoria a buscar"
        value={inputValue}
        onChange={handleInputOnChange}
      />
    </form>
  );
};

export default AddCategory;
