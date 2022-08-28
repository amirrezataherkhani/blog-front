import React, {useState} from 'react';
import AuthLayout from "../layouts/AuthLayout";
import LoginForm from "../components/LoginForm";
import {Link} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import http from "../http";

function Register(props) {
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const [password2, setPassword2] = useState();
	const handleRegister = async (e) => {
		e.preventDefault()
		const response = await http.post('/api/register/', {username, password, password2})
	}
	return (
		<AuthLayout>
			<div className={'w-1/3 m-auto p-48'}>
				<RegisterForm setUsername={setUsername} setPassword={setPassword} setPassword2={setPassword2}
							  handleRegister={handleRegister}/>
				<p className={'mt-3 text-center'}>
					Already Registered? <Link to={'/login'} className={'text-emerald-700'}>Login</Link>
				</p>
			</div>
		</AuthLayout>);
}

export default Register;