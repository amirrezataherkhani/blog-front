import React, {useEffect, useRef, useState} from 'react';
import {useParams} from "react-router-dom";
import http from "../http";
import SkeletonLoading from "./SkeletonLoading";
import Comments from "./Comments";
import NewComment from "./NewComment";
import {ArrowDownIcon, ArrowUpIcon} from "@heroicons/react/20/solid";

function Post() {
	const {id} = useParams()
	const [loading, setLoading] = useState(true);
	const [showComments, setShowComments] = useState(false);
	const [data, setData] = useState();
	const [comments, setComments] = useState([]);
	const width = window.screen.width - 100

	const handleShowComments = () => {
		setShowComments((prev) => !prev)
	}

	useEffect(() => {
		const getData = async () => {
			const response = await http.get(`/api/posts/${id}`)
			setData(response.data)
			setComments(response.data.comments)
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
				<div className={'p-2 mt-10'}>
					<p className={'flex bg-emerald-50 p-3 w-1/6 justify-center hover:cursor-pointer hover:bg-emerald-100 hover:shadow-md rounded-md'}
					   onClick={handleShowComments}>Comments
						{
							showComments ?
								<ArrowUpIcon className="h-5 w-5 self-center" aria-hidden="true"/> :
								<ArrowDownIcon className="h-5 w-5 self-center" aria-hidden="true"/>
						}

					</p>
					{showComments &&
						<Comments comments={comments}/>
					}
					<NewComment/>
				</div>
				<pre
					className={'text-sm mb-14 text-emerald-400 mt-14'}>By {data.author} on {new Date(data.created).toDateString()}
				</pre>
			</div>
		</div>)
	}
}

export default Post;