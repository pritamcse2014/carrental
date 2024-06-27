import { FaFacebook, FaInstagram, FaLinkedin, FaLocationArrow, FaMobileAlt, FaTwitter } from 'react-icons/fa';
import './Footer.css'

const FooterLinks = [
    {
        title: "Home",
        link: "/#"
    },
    
    {
        title: "About",
        link: "/#about"
    },

    {
        title: "Contact",
        link: "/#contact"
    },

    {
        title: "Blog",
        link: "/#blog"
    },
]

const Footer = () => {
    return (
        <div className="bg-gray-100 dark:bg-dark mt-14 rounded-t-3xl">
            <div className="container">
                <div className="grid md:grid-cols-3 py-5">
                    <div className="px-4 py-8">
                        <h1 className="text-xl sm:text-3xl font-bold sm:text-left text-justify mb-3 gap-3 flex items-center font-serif">Car Rental</h1>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ullam dolores nulla consequuntur.</p>
                        <br />
                        <div className="flex items-center gap-3 mt-6">
                            <FaLocationArrow />
                            <p>Noida, Uttar Pradesh</p>
                        </div>
                        <div className="flex items-center gap-3">
                            <FaMobileAlt />
                            <p>123 456 789</p>
                        </div>
                        <div className="flex items-center gap-3 mt-6">
                            <a href="#"><FaFacebook className="text-3xl hover:text-primary duration-300" /></a>
                            <a href="#"><FaInstagram className="text-3xl hover:text-primary duration-300" /></a>
                            <a href="#"><FaLinkedin className="text-3xl hover:text-primary duration-300" /></a>
                            <a href="#"><FaTwitter className="text-3xl hover:text-primary duration-300" /></a>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Important Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title} className="cursor-pointer hover:text-primary duration-300">
                                                    <span className="mr-2">&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Links</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title} className="cursor-pointer hover:text-primary duration-300">
                                                    <span className="mr-2">&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                        <div>
                            <div className="px-4 py-8">
                                <h1 className="sm:text-xl text-xl font-bold sm:text-left text-justify mb-3">Location</h1>
                                <ul className="flex flex-col gap-3">
                                    {
                                        FooterLinks.map((data) => {
                                            return (
                                                <li key={data.title} className="cursor-pointer hover:text-primary duration-300">
                                                    <span className="mr-2">&#11162;</span>
                                                    <a href={data.link}>{data.title}</a>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;