import React, {useContext, useState} from 'react';
import {Link, Navigate} from "react-router-dom";
import LoginForm from "../components/LoginForm";
import http from "../http";
import UserContext from "../context/userContext";
import AuthLayout from "../layouts/AuthLayout";

function Login() {
	const token = localStorage.getItem('token')
	const {authenticated, setAuthenticated} = useContext(UserContext)
	const [username, setUsername] = useState();
	const [password, setPassword] = useState();
	const handleLogin = async (e) => {
		e.preventDefault()
		const response = await http.post('/api-token-auth/', {username, password}).then(res => {
			return {data: res.data, status: res.status}
		}).catch(err => {
			return {data: err.response.data, status: err.response.status}
		})
		if (response.status === 200) {
			localStorage.setItem('token', response.data.token)
			setAuthenticated(true)
		} else {
			setAuthenticated(false)
		}
	}

	if (authenticated) {
		return (
			<Navigate to={'/'}/>
		)
	} else {
		return (
			<AuthLayout>
				<div className={'w-1/3 m-auto p-48'}>
					<LoginForm setUsername={setUsername} setPassword={setPassword} handleLogin={handleLogin}/>
					<p className={'mt-3 text-center'}>
						Not a member? <Link to={'/register'} className={'text-emerald-700'}>Register</Link>
					</p>
				</div>
			</AuthLayout>

		)
	}
}

export default Login;