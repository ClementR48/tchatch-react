import React from 'react';

const Form = ({ value, setValue, manageSubmit }) => {

  const handleSubmit = (event) => {
    event.preventDefault()
    manageSubmit()
  }
  
  return (
    <form className="form" onSubmit={handleSubmit}>
      <input type="text"value={value} onChange={(event) => 
        setValue(event.target.value)
      }/>
      <button type="submit"> Envoyer </button>
    </form>
  );
};

export default Form;