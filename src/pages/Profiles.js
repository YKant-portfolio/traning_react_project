import { Profile } from "./Profile";

import { useContext } from "react";
import { Context } from "../context/context";

import Box from '@mui/material/Box';

const boxStyle = {
	display: "flex",
	justifyContent: "center",
	borderRadius: 3,
	marginTop: '10px',
	marginBottom: '60px',
}

export const Profiles = () => {
	const { profiles } = useContext(Context);

	return (
		<Box sx={{ bgcolor: 'primary.light', minHeight: '200px', minWidth: '300px', maxWidth: '100%', textAlign: 'center', padding: '5px', maxHeight: 380, overflow: 'auto' }}
			{...boxStyle}>
			<ul>
				{profiles.map(item => < Profile key={item.id}{...item} />)}
			</ul>
		</Box >
	)
}

Profiles.defaultProps = {
	posts: [],
};

