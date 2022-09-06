import { useEffect } from 'react'
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll'

const overscrollOptions = {
	enable: true,
	effect: 'bounce',
	damping: 0.15,
	maxOverscroll: 150,

}

const options = {
	damping: 0.07,
	alwaysShowTracks: false,
	continuousScrolling: true,
	plugins: {
		overscroll: { ...overscrollOptions }
	}
}

const Scroll = () => {
	const scroll = document.querySelector('.box');

	useEffect(() => {
		if (scroll) {
			Scrollbar.use(OverscrollPlugin)
			Scrollbar.init(scroll, options);
			return () => {
				if (Scrollbar) Scrollbar.destroy(scroll);
			}
		}

	}, [scroll])

	return null;
}

export default Scroll;