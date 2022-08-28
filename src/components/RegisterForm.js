import React from 'react';

function LoginForm({setPassword, setPassword2, setUsername, handleRegister}) {
	return (
		<div>
			<form className={'grid'} onSubmit={(e) => handleRegister(e)}>
				<label htmlFor="username">Username</label>
				<input type="text" className={'border '} onChange={e => setUsername(e.target.value)} name="username"
					   id=""/>
				<label htmlFor="password">Password</label>
				<input type="password" className={'border '} onChange={e => setPassword(e.target.value)} name="password"
					   id=""/>
				<label htmlFor="password2">Repeat Password</label>
				<input type="password" className={'border '} onChange={e => setPassword2(e.target.value)}
					   name="password2"
					   id=""/>
				<input type="submit" name="" id="" value='Register'/>
			</form>
		</div>
	)
		;
}

export default LoginForm;