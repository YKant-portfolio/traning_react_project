import { Profile } from "./Profile";

import { useContext } from "react";
import { Context } from "../context/context";

import Box from '@mui/material/Box';
import List from '@mui/material/List';

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
			<List>
				{profiles.map(item => < Profile key={item.id}{...item} />)}
			</List>
		</Box >
	)
}

Profiles.defaultProps = {
	profiles: [],
};

