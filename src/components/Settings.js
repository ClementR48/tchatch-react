import React from 'react';

const Settings = ({ setOpen, toggleOpen, email, password, setEmail, setPassword, submitLogin }) => {
  let cssClass = 'setting-toggle';
    if(setOpen === true) {
      cssClass = 'setting-toggle-open'
    }

  return (
    <div className='settings'>
      <button className={cssClass} type="button" onClick={() => toggleOpen()}>X</button>
      {setOpen && 
        ( <form onSubmit={(event) => {
          event.preventDefault()
          submitLogin()}}>
            <input value={email} type="email" placeholder="Email" onChange={(event) => setEmail(event.target.value)}></input>
            <input value={password} type="password" placeholder="Mot de passe" onChange={(event) => setPassword(event.target.value)}></input>
            <button type="submit">Envoyer</button>
          </form>)}
    </div>
  );
};

export default Settings;