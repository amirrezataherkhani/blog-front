import React from 'react';

function Comments({comments}) {
	return (
		<div>
			{
				comments.map(comment => {
					console.log(comment)
					return (
						<div key={comment.id} className=" w-2/3 m-auto relative mt-10">
							<div
								className="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
								<div className="relative flex gap-4">
									<img
										src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png"
										className="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20"
										alt="" loading="lazy"/>
									<div className="flex flex-col w-full">
										<div className="flex flex-row justify-between">
											<p className="relative text-xl whitespace-nowrap truncate overflow-hidden capitalize">{comment.author}</p>
											<a className="text-gray-500 text-xl" href="#"><i
												className="fa-solid fa-trash"></i></a>
										</div>
										<p className="text-gray-400 text-sm">{new Date(comment.created).toLocaleDateString()} / {new Date(comment.created).toLocaleTimeString()} </p>
									</div>
								</div>
								<p className="-mt-4 text-gray-500">
									{comment.content}
								</p>
							</div>
						</div>
					)
				})
			}
		</div>
	)
}

export default Comments;