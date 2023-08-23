import carousel1 from '../../assets/carousel/carousel-1.jpg';
import carousel2 from '../../assets/carousel/carousel-2.jpg';
import carousel3 from '../../assets/carousel/carousel-3.jpg';

const Carousel = () => {
    <main className="carousel-root">
        <div className="carousel">
            <img src={carousel1} alt="carousel-image-1" className="carousel-image" />
            <img src={carousel2} alt="carousel-image-3" className="carousel-image" />
            <img src={carousel3} alt="carousel-image-2" className="carousel-image" />
        </div>
    </main>
}