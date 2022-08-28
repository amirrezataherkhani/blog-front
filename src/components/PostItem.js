import React from 'react';
import {Link} from "react-router-dom";

function PostItem({post, index}) {
	return (<div
		className={`border-l-2 pl-2 border-[#a0edce]
								${3 >= index > 0 ? '-mt-28' : ''} mb-10 relative`}>
		<h1 className={'text-2xl font-bold capitalize'}>
			{post.title}
		</h1>
		<p className={'text-slate-600 text-lg mb-28 text-justify'}>
			{post.body.split(' ').slice(0, 20).join(' ')}{post.body.split(' ').length > 20 && ' ...'}
		</p>
		<pre
			className={'text-sm absolute bottom-0 mb-14 text-emerald-400'}>By {post.author} on {new Date(post.created).toDateString()}
						</pre>


		<p className={'w-1/3 m-auto absolute bottom-0 border-b-4 text-center border-[#5ae4a8] text-lg'}>
			<Link to={`post/${post.id}`}>Read More</Link>
		</p>
	</div>);
}

export default PostItem;