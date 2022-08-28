import {createContext, useState} from 'react'

export const UserContext = createContext()

export function UserProvider({children}) {
	const [authenticated, setAuthenticated] = useState();
	const token = localStorage.getItem('token')
	if (token && !authenticated) {
		setAuthenticated(true)
	}
	return (
		<UserContext.Provider value={{authenticated, setAuthenticated}}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContext