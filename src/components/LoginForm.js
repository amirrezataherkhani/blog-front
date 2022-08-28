import React from 'react';

function LoginForm({setPassword, setUsername, handleLogin}) {
	return (
		<div>
			<form className={'grid'} onSubmit={(e) => handleLogin(e)}>
				<label htmlFor="username">Username</label>
				<input type="text" className={'border '} onChange={e => setUsername(e.target.value)} name="username"
					   id=""/>
				<label htmlFor="password">Password</label>
				<input type="password" className={'border '} onChange={e => setPassword(e.target.value)} name="password"
					   id=""/>
				<input type="submit" name="" id="" value='Login'/>
			</form>
		</div>
	)
		;
}

export default LoginForm;