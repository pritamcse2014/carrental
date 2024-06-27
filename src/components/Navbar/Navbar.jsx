import { BiSolidMoon, BiSolidSun } from 'react-icons/bi';
import './Navbar.css'
import ResponsiveMenu from '../ResponsiveMenu/ResponsiveMenu'
import { useState } from 'react';
import { HiMenuAlt3, HiMenuAlt1 } from 'react-icons/hi'

export const NavLinks = [
    {
        id: "1",
        name: "HOME",
        link: "/#"
    },
    {
        id: "2",
        name: "ABOUT",
        link: "/#about"
    },
    {
        id: "3",
        name: "CARS",
        link: "/#cars"
    },
    {
        id: "4",
        name: "SERVICES",
        link: "/#services"
    },
    {
        id: "5",
        name: "REVIEWS",
        link: "/#reviews"
    },
    {
        id: "6",
        name: "CONTACT",
        link: "/#contact"
    },
]

const Navbar = ({theme, setTheme}) => {
    const [showMenu, setShowMenu] = useState(false);
    const toggleMenu = () => {
        setShowMenu(!showMenu);
    }
    return (
        <nav className="shadow-md bg-white dark:bg-dark dark:text-white duration-300 relative z-40">
            <div className="container py-3 md:py-0">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold font-serif">Car Rental</h1>
                    </div>
                    <div className="hidden md:block">
                        <ul className="flex items-center gap-8">
                            {
                                NavLinks.map((data) => (
                                    <li key={data.id} className="py-4"><a className="py-2 hover:border-b-2 hover:text-primary hover:border-primary transition-colors duration-500 text-lg font-medium" href={data.link}>{data.name}</a></li>
                                ))
                            }
                            <div>
                                {
                                    theme === "dark" ? (
                                        <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
                                    ) : (
                                        <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
                                    )
                                }
                            </div>
                        </ul>
                    </div>
                    <div className="flex items-center gap-4 md:hidden">
                        <div>
                            {
                                theme === "dark" ? (
                                    <BiSolidSun onClick={() => setTheme("light")} className="text-2xl" />
                                ) : (
                                    <BiSolidMoon onClick={() => setTheme("dark")} className="text-2xl" />
                                )
                            }
                        </div>
                        {
                            showMenu ? (
                                <HiMenuAlt1 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                            ) : (
                                <HiMenuAlt3 onClick={toggleMenu} className="cursor-pointer transition-all" size={30} />
                            )
                        }
                    </div>
                </div>
            </div>
            <ResponsiveMenu showMenu={showMenu} />
        </nav>
    );
};

export default Navbar;