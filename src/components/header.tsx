import React from 'react';
import MenuItem from './menuItem';
import { CircleIcon, HelpCircleIcon, HomeIcon } from 'lucide-react';
import { InfoCircledIcon } from '@radix-ui/react-icons';
import Link from 'next/link';
import { ThemeToggle } from './theme-toggle';

const Header = () => {
	return (
		<div className=" flex justify-between items-center p-3 max-w-6xl mx-auto">
			<div className="flex gap-4">
				<MenuItem title="home" address="/" Icon={HomeIcon} />
				<MenuItem title="about" address="/about" Icon={InfoCircledIcon} />
			</div>
			<div className="flex items-center gap-4">
				<ThemeToggle />
				<Link href="/" className="flex gap-1 items-center">
					<span className="text-2xl font-bold bg-amber-700 py-1 px-2 rounded-lg">
						IMDb
					</span>
					<span className="text-xl hidden sm:inline">Clone</span>
				</Link>
			</div>
		</div>
	);
};

export default Header;
