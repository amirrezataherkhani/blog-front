import React from 'react';

function NewComment(props) {
	return (
		<div>
			<div className="flex mx-auto items-center justify-center shadow-lg w-2/3 ">
				<form className="w-full bg-white rounded-lg px-4 pt-2">
					<div className="flex flex-wrap -mx-3 mb-6">
						<div className="w-full md:w-full px-3 mb-2 mt-2">
										<textarea
											className="bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full h-20 py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white"
											name="body" placeholder='Type Your Comment (required)' required></textarea>
							<input type="email" placeholder={'Email (optional)'} className={'bg-gray-100 rounded border border-gray-400 leading-normal resize-none w-full py-2 px-3 font-medium placeholder-gray-400 focus:outline-none focus:bg-white'} name="" id=""/>
						</div>
						<div className="w-full md:w-full flex items-start md:w-full px-3">
							<div className="-mr-1">
								<input type='submit'
									   className="bg-[#d5f7e6] text-slate-600 font-medium py-1 px-4 rounded-lg tracking-wide mr-1 hover:bg-gray-100"
									   value='Post Comment'/>
							</div>
							
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}

export default NewComment;