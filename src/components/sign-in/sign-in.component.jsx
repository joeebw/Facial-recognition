import './sign-in.styles.scss';
import { useState} from 'react';

const SignIn = ({changeRoute, loadUser}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    const onUsernameChange = (event) => {
        setEmail(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const signInCheck = async() => {
        const postSignin = await fetch('http://localhost:3001/signin', {
            method: "post",
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
        const response = await postSignin.json();
        if(response.id) {
            loadUser(response);
            changeRoute('faceDetector', true);
        }
    };


    

    return(
     <div className='sign-in'>
        <div className="login-block">
            <h1>Sign-in</h1>
            <input type="email"  placeholder="Email" id="username" onChange={onUsernameChange}/>
            <input type="password"  placeholder="Password" id="password" onChange={onPasswordChange}/>
            <button onClick={signInCheck}>Sign-In?</button>
            <p onClick={() => changeRoute("register")}>REGISTER?</p>
        </div>
    </div>
    )
};

export default SignIn;