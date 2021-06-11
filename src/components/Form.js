import React from 'react';

const Form = ({ value, setValue }) => {
  
  return (
    <form className="form">
      <input type="text"value={value} onChange={(event) => 
        setValue(event.target.value)
      }/>
      <button type="submit"> Envoyer </button>
    </form>
  );
};

export default Form;