import React from 'react';
import './auth.css';
import Logo from '../../img/logo.png'

const Auth = () => {
    return (
        <div className='Auth'>
            <div className="a-left">
                <img src={Logo} alt="" />
                <div className="Webname">
                    <h1>ZKC Media</h1>
                    <h6>
                        Explore the ideas throughout the world
                    </h6>
                </div>
            </div>
            {/* <SignUp /> */}
            <Login />
        </div>

    )
}

function Login() {
    return (
        <div className="a-right">
            <form action="" className='infoForm authForm'>

                <h3>Login In</h3>
                <div>
                    <input type="text" className="infoInput" placeholder='Username' name='username' />
                </div>

                <div>
                    <input type="password" className="infoInput" placeholder='Password' name='password' />
                </div>

                <div>
                    <span style={{ fontSize: "12px" }}>
                        Don't have an account Sign Up
                    </span>
                </div>

                <button className="button infoButton" type='submit'>Login</button>
            </form>
        </div>
    )
}

function SignUp() {
    return (
        <div className="a-right">
            <form action="" className='infoForm authForm'>

                <h3>Sign up</h3>
                <div>
                    <input type="text"
                        name="firstname" id=""
                        placeholder='First Name'
                        className='infoInput' />

                    <input type="text"
                        name="lastname" id=""
                        placeholder='Last Name'
                        className='infoInput' />
                </div>
                <div>
                    <input type="text" className="infoInput" placeholder='Username' name='username' />
                </div>

                <div>
                    <input type="password" className="infoInput" placeholder='Password' name='password' />

                    <input type="password" className="infoInput" placeholder='Confirm password' name='Confirmpassword' />
                </div>

                <div>
                    <span style={{ fontSize: "12px" }}>Already have an account. Login !</span>
                </div>

                <button className="button infoButton" type='submit'>SignUp</button>
            </form>
        </div>
    )
}

export default Auth;