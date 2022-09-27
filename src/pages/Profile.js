import { useNavigate, useParams, useLocation } from "react-router-dom"

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const boxStyle = {
	display: "flex",
	flexDirection: 'column',
	justifyContent: "center",
	borderRadius: 3,
}

export const Profile = (props) => {
	const { author, raiting, date, blocked } = props;
	console.log(props);



	const navigate = useNavigate();
	const { profileId } = useParams();
	const { pathname } = useLocation();
	console.log(useLocation());


	const isProfile = pathname !== '/profiles/';
	// console.log(isProfile);


	const handleClick = () => {
		navigate(`/profiles/:${profileId}`, { replace: true });
	}

	const goBack = () => navigate(-1);

	const res = <>
		<h4>дата : {date}</h4>
		<h4>рейтинг : {raiting}</h4>
		<Rating name="disabled" value={+raiting} readOnly />
		<h4>блокирован : {blocked ? 'нет' : 'да'}</h4>
		<button onClick={goBack}>back</button>
	</>
	return (
		<div>
			<Typography variant='h6'
				textAlign='center'
				marginTop='5px'
				onClick={!isProfile ? handleClick : null} >
				{author}
			</Typography>

			<Box sx={{ bgcolor: 'primary.light', textAlign: 'center', paddingLeft: '10px', paddingRight: '10px', paddingBottom: '5px', overflow: 'auto', marginBottom: '20px' }}
				{...boxStyle}>
				{
					isProfile && (res)
				}
			</Box>
		</div >
	)
}