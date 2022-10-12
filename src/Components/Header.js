import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <header className="p-4 bg-gray-100 text-gray-800">
				<div className="container md:flex justify-between h-16 mx-auto">
					<button rel="noopener noreferrer" aria-label="Back to homepage" className="flex items-center p-2">
					  <Link to='/'><img className="w-10 bg-emerald-800" src="https://cdn.worldvectorlogo.com/logos/edge-code-app-cc.svg" alt="" /></Link>
					  <Link to='/'><p className="text-emerald-800 text-2xl font-bold">de Olympiad</p></Link>
					</button>
				
					<ul className="items-stretch  space-x-3 flex">
						<li className="flex">
							<button className="flex items-center px-1 lg:px-4 -mb-1 border-b-2 border-transparent"><NavLink to='/'>Home</NavLink></button>
						</li>
						<li className="flex">
							<button  className="flex items-center px-1 lg:px-4 -mb-1 border-b-2 border-transparent"><NavLink to='/topics' className={({ isActive }) =>
						isActive ? "border-b-2 border-emerald-800" : undefined}>Topics</NavLink></button>
						</li>
						<li className="flex">
							<button  className="flex items-center px-1 lg:px-4 -mb-1 border-b-2 border-transparent"><NavLink to='/statistics' className={({ isActive }) =>
						isActive ? "border-b-2 border-emerald-800" : undefined}>Statistics</NavLink></button>
						</li>
						<li className="flex">
							<button  className="flex items-center px-1 lg:px-4 -mb-1 border-b-2 border-transparent"><NavLink to='/blog' className={({ isActive }) =>
						isActive ? "border-b-2 border-emerald-800" : undefined}>Blog</NavLink></button>
						</li>
						<li className="flex">
							<button  className="flex items-center px-1 lg:px-4 -mb-1 border-b-2 border-transparent"><NavLink to='/about' className={({ isActive }) =>
						isActive ? "border-b-2 border-emerald-800" : undefined}>About</NavLink></button>
						</li>
					</ul>
				</div>
			</header>
        </div>
    );
};

export default Header;