import React from 'react';

const Settings = ({ setOpen, toggleOpen }) => {
  let cssClass = 'setting-toggle';
    if(setOpen === true) {
      cssClass = 'setting-toggle-open'
    }

  return (
    <div className='settings'>
      <button className={cssClass} type="button" onClick={() => toggleOpen()}>X</button>
      {setOpen && 
      ( <form>
          <input type="email" placeholder="Email"></input>
          <input type="password" placeholder="Mot de passe"></input>
          <button type="submit">Envoyer</button>
        </form>)}
      
    </div>
  );
};

export default Settings;