import { FaUserCircle } from 'react-icons/fa';
import './ResponsiveMenu.css'
import { NavLinks } from '../Navbar/Navbar';

const ResponsiveMenu = ({showMenu}) => {
    return (
        <div className={`${showMenu ? "left-0" : "-left-full"} fixed top-0 z-50 bg-white dark:bg-gray-900 h-screen w-[75%] md:hidden rounded-r-xl shadow-md flex flex-col justify-between px-8 pb-6 pt-16 transition-all duration-300`}>
            <div className="card">
                <div className="flex items-center justify-start gap-3">
                    <FaUserCircle size={50} />
                    <div>
                        <h1>Hello User</h1>
                        <h1>Premium User</h1>
                    </div>
                </div>
                <nav className="mt-12">
                    <ul className="space-y-4 text-xl">
                        {
                            NavLinks.map((data) => (
                                <li key={data.id} className="py-4"><a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a></li>
                            ))
                        }
                    </ul>
                </nav>
            </div>
            <div>
                <h1>Made with ❤ by <a href="#">The Coding Journey</a>{" "}</h1>
            </div>
        </div>
    );
};

export default ResponsiveMenu;