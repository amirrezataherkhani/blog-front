import React, {useContext, useRef, useState} from 'react';
import AuthLayout from "../layouts/AuthLayout";
import {Link, Navigate} from "react-router-dom";
import RegisterForm from "../components/RegisterForm";
import http from "../http";
import UserContext from "../context/userContext";
import {toast} from "react-toastify";
import Errors from "../components/Errors";

function Register(props) {
	const token = localStorage.getItem('token')
	const [username, setUsername] = useState();
	const [errors, setErrors] = useState({});
	const {authenticated, setAuthenticated} = useContext(UserContext)
	// const errors = useRef([])
	const [password, setPassword] = useState();
	const [password2, setPassword2] = useState();
	const handleRegister = async (e) => {
		e.preventDefault()
		await http.post('/api/register/', {
			username,
			password,
			password2
		}).then(response => {
			if (response.status === 200) {
				setAuthenticated(true)
				localStorage.setItem('token', response.data.token)
			}
		}).catch(err => {
			setErrors(err.response.data)
		})
	}

	if (authenticated) {
		return (
			<Navigate to={'/'}/>
		)
	} else {
		return (
			<AuthLayout>
				<div className={'w-1/3 m-auto p-48'}>
					<RegisterForm setUsername={setUsername} setPassword={setPassword} setPassword2={setPassword2}
								  handleRegister={handleRegister} errors={errors}/>
					{/*<Errors errors={errors}/>*/}
					<p className={'mt-3 text-center'}>
						Already Registered? <Link to={'/login'} className={'text-emerald-700'}>Login</Link>
					</p>
				</div>
			</AuthLayout>);
	}
}

export default Register;