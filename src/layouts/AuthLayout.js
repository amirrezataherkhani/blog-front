import React from 'react';
import {Link} from "react-router-dom";

function AuthLayout({children}) {
	return (
		<div
			className={'p-3 flex justify-between h-3/4 bg-gradient-to-b via-[#d5f7e6] from-[#d5f7e6]'}
		>
			<div className={'col-span-1'}>
				<Link to='/about' className={'p-2 h-fit'}>About</Link>
				<Link to='/contact' className={'p-2 h-fit'}>Contact</Link>
			</div>
			{children}
			<div className={'col-span-1 '}>
				<Link to={'/'} className={'bg-[#52ab98] text-white px-8 py-2 rounded-md h-fit'}>
					Home
				</Link>
			</div>
		</div>
	);
}

export default AuthLayout;