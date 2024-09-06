'use client';

import Link from 'next/link';
import React from 'react';
import { useSearchParams } from 'next/navigation';

const NavbarItems = ({ title, param }: { title: string; param: string }) => {
	const searchParams = useSearchParams();
	const genre = searchParams.get('genre');
	return (
		<div>
			<Link
				className={`hover:text-amber-400 font-bold ${
					genre === param
						? 'underline underline-offset-8 decoration-4 decoration-amber-300 rounded-lg'
						: ''
				}`}
				href={`/?genre=${param}`}>
				{title}
			</Link>
		</div>
	);
};

export default NavbarItems;
