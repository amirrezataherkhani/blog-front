import React from 'react';
import Skeleton from "react-loading-skeleton";
import 'react-loading-skeleton/dist/skeleton.css'

function SkeletonLoading({height, count, cols, width1, width2, widthContent, titleWidth, center}) {
	return (
		<div className={`grid grid-cols-${cols} gap-5 -mt-28 p-3 w-full `}>
			{[...Array(cols)].map((e, i) =>
				<div key={i} className={`${center ? 'justify-self-center' : ''}`}>
					<Skeleton height={height} width={titleWidth}/>
					<Skeleton count={count} width={widthContent}/>
					<br/>
					<br/>
					<br/>
					<Skeleton width={width1}/>
					<Skeleton height={height} width={width2}/>
				</div>
			)
			}
		</div>
	);
}

export default SkeletonLoading;