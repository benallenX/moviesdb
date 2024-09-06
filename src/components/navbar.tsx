import React from 'react';
import NavbarItems from './navbaritems';

const Navbar = () => {
	return (
		<div className="flex justify-center gap-4 dark:bg-amber-500 bg-slate-300 p-4 lg:text-lg">
			<NavbarItems title="Trending" param="fetchTrending" />
			<NavbarItems title="Top Rated" param="fetchTopRated" />
		</div>
	);
};

export default Navbar;
