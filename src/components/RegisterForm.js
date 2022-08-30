import React from 'react';

function LoginForm({setPassword, setPassword2, setUsername, handleRegister, errors}) {
	return (
		<div>
			<form className={'grid'} onSubmit={(e) => handleRegister(e)}>
				<label htmlFor="username">Username</label>
				<input type="text" className={'border '} onChange={e => setUsername(e.target.value)} name="username"
					   id=""/>
				{errors['username'] && <p className={'text-red-500 mb-3'}>{errors['username']}</p>}
				<label htmlFor="password">Password</label>
				<input type="password" className={'border '} onChange={e => setPassword(e.target.value)} name="password"
					   id=""/>
				{errors['password'] && <p className={'text-red-500 mb-3'}>{errors['password']}</p>}

				<label htmlFor="password2">Repeat Password</label>
				<input type="password" className={'border '} onChange={e => setPassword2(e.target.value)}
					   name="password2"
					   id=""/>
				{errors['password2'] && <p className={'text-red-500 mb-3'}>{errors['password2']}</p>}

				<input type="submit" name=""
					   className={'text-lg text-white bg-[#52ab98] py-1 rounded mt-3 hover:cursor-pointer active:bg-[#448f7f]'}
					   id="" value='Register'/>
			</form>
		</div>
	)
		;
}

export default LoginForm;