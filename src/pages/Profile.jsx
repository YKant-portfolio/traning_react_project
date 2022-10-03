import { useContext } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom"
import { Context } from "../context/context";
import ProfileCard from "../component/ProfileCard/ProfileCard";

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const boxStyle = {
	display: "flex",
	flexDirection: 'column',
	justifyContent: "center",
	borderRadius: 3,
}

export const Profile = (props) => {
	const navigate = useNavigate();
	const { profileId } = useParams();
	const { pathname } = useLocation();
	const { profiles } = useContext(Context);

	const { author, raiting, date, blocked } = profileId ?
		profiles.find(({ id }) => id === profileId) : props;

	const isProfile = `${pathname}` !== '/profiles/';

	const handleClick = () => {
		navigate(`/profiles/:${profileId}`);
	}

	const goBack = () => navigate(`/profiles/`);

	return (
		<div>
			<Typography variant='h6'
				textAlign='center'
				marginTop='5px'
				onClick={!isProfile ? handleClick : Function.prototype} >
				{author}
			</Typography>

			<Box sx={{ bgcolor: 'primary.light', textAlign: 'center', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '5px', overflow: 'auto', marginBottom: '20px' }}
				{...boxStyle}>
				{isProfile &&
					<>
						<ProfileCard
							author={author}
							raiting={raiting}
							date={date}
							blocked={blocked}
						/>
						<button onClick={goBack}>back</button>
					</>
				}
			</Box>
		</div >
	)
}