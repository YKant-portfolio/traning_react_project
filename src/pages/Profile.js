import { useHistory, useRouteMatch } from "react-router-dom"

export const Profile = ({ id, author, raiting, date }) => {

	const history = useHistory();
	const match = useRouteMatch();


	const isProfile = match.path !== '/profiles';

	const handleClick = () => {
		history.push(`/profile/${id}`);
	}

	const handleClickBack = () => {
		/* history.push('/posts'); */
		history.goBack();
		//history.go(-1);
	}

	return (
		<div>
			{/* <h5><Link to={`/profile/${id}`}>{author}</Link></h5> */}
			<h3 onClick={!isProfile ? handleClick : Function.prototype} >{author}</h3>
			<p>{date}</p>
			{
				isProfile && <button onClick={handleClickBack}>back</button>
			}
		</div>
	)
}