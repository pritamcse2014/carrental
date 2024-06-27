import './Contact.css'

const Contact = () => {
    return (
        <div data-aos="zoom-in" className="dark:bg-black dark:text-white py-14">
            <div className="container">
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 bg-gray-800 px-6 py-8">
                    <div className="col-span-2 space-y-3">
                        <h1 className="text-4xl sm:text-5xl font-bold text-white">
                            {" "}
                            Let's Collaborate on Your Upcoming Car Rental Venture
                        </h1>
                        <p className="text-gray-400">Lorem ipsum dolor sit amet consectetur adipisicing elit. Et minima voluptas tempora hic nihil perspiciatis.</p>
                    </div>
                    <div className="grid place-items-center">
                        <a className="inline-block font-semibold px-6 py-2 bg-primary text-white rounded-lg tracking-wider uppercase hover:bg-primary/80 duration-300" href="#">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;