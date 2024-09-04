import Link from 'next/link';
import React from 'react';

const MenuItem = ({
	title,
	address,
	Icon,
}: {
	title: string;
	address: string;
	Icon: React.ElementType;
}) => {
	return (
		<Link href={address} className="hover:text-amber-600">
			<Icon className="text-2xl size-10  sm:hidden"  />
			<h1 className="uppercase hidden sm:inline text-sm">{title}</h1>
		</Link>
	);
};

export default MenuItem;
