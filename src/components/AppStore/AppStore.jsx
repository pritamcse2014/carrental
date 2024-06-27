import './AppStore.css'
import pattern from '../../assets/website/pattern.jpeg'
import PlayStoreImg from '../../assets/website/play_store.png'
import AppStoreImg from '../../assets/website/app_store.png'

const bannerImg = {
    backgroundImage: `url(${pattern})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    width: "100%"
}

const AppStore = () => {
    return (
        <div className="container pb-14">
            <div className="text-black py-10 sm:min-h-[400px] sm:grid sm:place-items-center rounded-xl" style={bannerImg}>
                <div>
                    <div className="space-y-6 max-w-xl mx-auto">
                        <h1 data-aos="fade-up" className="text-2xl text-center sm:text-4xl font-semibold font-serif">Get Started With Our App</h1>
                        <p data-aos="fade-up" className="text-center sm:px-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et quia, ipsam neque beatae asperiores eveniet.</p>
                        <div data-aos="fade-up" className="flex flex-wrap justify-center items-center gap-4">
                            <a href="#">
                                <img className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" src={PlayStoreImg} alt="Play Store Image" />
                            </a>
                            <a href="#">
                                <img className="max-w-[150px] sm:max-w-[120px] md:max-w-[200px]" src={AppStoreImg} alt="App Store Image" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AppStore;