import { Link, useHistory, useRouteMatch } from "react-router-dom"

export const Profiles = ({ title, body, id }) => {

	const history = useHistory();
	const match = useRouteMatch();

	const isPost = match.path !== '/posts';

	const handleClick = () => {
		history.push(`/post/${id}`);
	}

	const handleClickBack = () => {
		/* history.push('/posts'); */
		history.goBack();
		//history.go(-1);
	}

	return (
		<div>
			{/* <h5><Link to={`/post/${id}`}>{title}</Link></h5> */}
			<h5 onClick={!isPost ? handleClick : Function.prototype} className="post-link">{title}</h5>
			<p>{body}</p>

			{
				isPost && <button onClick={handleClickBack}>back</button>
			}
		</div>
	)
}