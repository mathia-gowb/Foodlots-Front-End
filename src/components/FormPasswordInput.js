import { useState } from 'react';


function FormPasswordInput(props) {
    const {placeholder,name,errorMessage}=props;
    const [inputType,setInputType] = useState('password')
    function handleClick({target}){
        if(inputType==='password'){
            setInputType('text');
            return
        }
        setInputType('password')
    }
  return (
    <div className="input-wrapper password-input-wrapper">
        <div>
            <input  type={inputType} placeholder={placeholder} name={name}  className={`${errorMessage?'form-error':""}`}/>
            <button type="button" className="toggle-password" onClick={handleClick}>show password</button>
        </div>
        <p className="validation-message">{errorMessage}</p>
    </div>
  )
}

export default FormPasswordInput