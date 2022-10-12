import React from 'react';
import { Link} from 'react-router-dom';

const Home = () => {

    return (
        <div>
           <section className="bg-gray-100 text-gray-800">
                <div className="container mx-auto flex flex-col items-center px-4 py-16 text-center md:py-32 md:px-10 lg:px-32 xl:max-w-3xl">
                    <h1 className="text-2xl font-bold leading-none sm:text-4xl">High quality and fun team<span className="text-emerald-800"> programming contests</span> for every Developer
                    </h1>
                    <p className="px-8 mt-8 mb-12 sm:text-lg">code olympiad offers online contests where students work on quality competitive programming problems in a team setting.</p>
                    <div className="flex flex-wrap justify-center">
                        <Link to='/topics'><button className="px-2 sm:px-8 py-3 m-2 text-lg font-semibold rounded bg-emerald-800 text-gray-50">Explore Topics</button></Link>
                        <Link to='/explore'><button className="px-2 sm:px-8 py-3 m-2 text-lg border rounded text-gray-900 border-gray-300">Learn more</button></Link>
                    </div>
                </div>
            </section>

            
        </div>
    );
};

export default Home;