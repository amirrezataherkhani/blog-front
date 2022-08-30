import React, {useContext} from 'react';
import {Link, Outlet, useLocation, useNavigate} from "react-router-dom";
import logo from '../images/developer.png';
import UserContext from "../context/userContext";
import http from "../http";
import AuthenticatedDropdown from "../components/AuthenticatedDropdown";


function MainLayout(props) {
	const location = useLocation()
	const {authenticated} = useContext(UserContext);
	const handleLogout = async (e) => {
		localStorage.removeItem('token')
		window.location.reload()
	}
	return (
		<div className={'h-screen'}>
			<nav className={'p-3 flex justify-between h-3/4 bg-gradient-to-b via-[#d5f7e6] from-[#d5f7e6]'}>
				<div className={'col-span-1'}>
					<Link to='/about' className={'p-2 h-fit'}>About</Link>
					<Link to='/contact' className={'p-2 h-fit'}>Contact</Link>
				</div>
				<div className={'col-span-1 w-1/3 '}>
					<Link to='/'>
						<img src={logo} className={'m-auto bottom-0 h-2/3'} alt=""/>
					</Link>
				</div>
				{!authenticated ?
					<div className={'col-span-1 '}>
						<Link to={'/register'} className='text-[#52ab98] p-2 h-fit'>
							Register
						</Link>
						<Link to={'/login'} className={'bg-[#52ab98] text-white p-2 rounded-md h-fit'}>
							Login
						</Link>
					</div> :
					<AuthenticatedDropdown handleLogout={handleLogout}/>
				}
			</nav>
			<Outlet/>
		</div>
	);
}

export default MainLayout;