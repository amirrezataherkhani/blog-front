import React from 'react';

function Errors({errors}) {
	return (
		<div>
			{Object.keys(errors).length!==0&&Object.keys(errors).map(error => {
				return (<div>
					<p className={'capitalize text-red-500'}>{error} {errors[error]}</p>
				</div>)

			})}
		</div>
	);
}

export default Errors;