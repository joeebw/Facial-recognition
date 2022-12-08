import { useState } from 'react';
import './register.styles.scss';

const Register = ({changeRoute, loadUser}) => {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [name, setName] = useState('');

const onUsernameChange = (event) => {
    setName(event.target.value);
};

const onEmailChange = (event) => {
    setEmail(event.target.value);
};

const onPasswordChange = (event) => {
    setPassword(event.target.value);
};

const fetchRegister = async() => {
    const registerFetch = await fetch('http://localhost:3001/register', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify ({
            email: email,
            name: name,
            password: password
        })
    });
    const response = await registerFetch.json();
    if(response){
        loadUser(response);
        changeRoute('faceDetector', true);
    };
}


    return(
     <div className='register-container'>
        <div className="login-block">
            <h1>Register</h1>
            <input type="text"  placeholder="Name" id="username" onChange={onUsernameChange} />
            <input type="email"  placeholder="Email" id="email" onChange={onEmailChange}/>
            <input type="password"  placeholder="Password" id="password" onChange={onPasswordChange}/>
            <button onClick={fetchRegister}>Register</button>
            <p onClick={() => changeRoute("signin")}>SIGN-IN</p>
        </div>
    </div>
    )
};

export default Register;