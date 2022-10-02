import { Link } from 'react-router-dom';
import { Profile } from "./Profile";

import { useContext, useRef, useEffect, useState } from "react";
import { Context } from "../context/context";

import Box from '@mui/material/Box';
import List from '@mui/material/List';

import Scroll from "../component/SmoothScroll/SmoothScroll";

const boxStyle = {
	display: "flex",
	justifyContent: "center",
	borderRadius: 3,
	marginTop: '10px',
	marginBottom: '60px',
}

export const Profiles = () => {
	const { profiles, getScrollRef } = useContext(Context);
	const [refScroll, setRefScroll] = useState('');


	const scrollRef = useRef();
	useEffect(() => {
		setRefScroll(scrollRef);
		getScrollRef(refScroll);
	}, [getScrollRef, refScroll]);

	return (
		<Box sx={{ bgcolor: 'primary.light', minHeight: '200px', minWidth: '300px', maxWidth: '100%', textAlign: 'center', padding: '5px', maxHeight: 380, overflow: 'auto' }}
			{...boxStyle}
			ref={scrollRef}>
			<Scroll />
			<List>
				{profiles.map(item =>
					<Link key={item.id} to={`/profiles/${item.id}`} >
						<Profile {...item} />
					</Link>)}
				{/* < Profile key={item.id}{...item} />	)} */}

			</List>
		</Box >
	)
}

Profiles.defaultProps = {
	profiles: [],
};

