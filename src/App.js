import http from "./http";
import {useEffect, useState} from "react";
import PostItem from "./components/PostItem";
import SkeletonLoading from "./components/SkeletonLoading";


function nth(n, a1, d) {
	const output = []
	for (let i = 0; i < n; i++) {
		output.push((a1 + (i - 1) * d))
	}
	return output
}


function App() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const getData = async () => {
			const response = await http.get('/api/posts/')
			setPosts(response.data)
			setLoading(false)
		}
		getData()
	}, []);

	let N = 50;
	let a = 1;
	let d = 3;
	const nterm = nth(N, a, d);
	nterm.shift()

	if (loading) {
		return (
			<SkeletonLoading height={30} count={3} cols={4} width1={150} width2={100}/>
		)
	} else {
		return (<div className="App">
			<div className={'grid grid-cols-4 justify-around gap-5 p-3'}>
				{posts.map((post, index) => {
					return (
						<PostItem post={post} index={index}/>
					)
				})}
			</div>
		</div>);
	}
}

export default App;
