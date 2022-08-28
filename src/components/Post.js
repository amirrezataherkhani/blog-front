import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../http";
import SkeletonLoading from "./SkeletonLoading";

function Post() {
	const {id} = useParams()
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState();
	const width = window.screen.width - 100
	useEffect(() => {
		const getData = async () => {
			const response = await http.get(`/api/posts/${id}`)
			setData(response.data)
			setLoading(false)
		}
		getData()
	}, []);
	if (loading) {
		return (<SkeletonLoading height={30} titleWidth={400} width1={200} width2={300} count={10} widthContent={width}
								 center={true}/>)
	} else {
		return (<div className={'-mt-28 p-3 w-3/4 m-auto'}>
			<h1 className={'text-2xl capitalize'}>
				{data.title}
			</h1>
			<div className={'ml-10 mt-3'}>
				<p>
					{data.body}
				</p>
				<pre
					className={'text-sm mb-14 text-emerald-400 mt-14'}>By {data.author} on {new Date(data.created).toDateString()}
				</pre>
			</div>
		</div>);
	}
}

export default Post;