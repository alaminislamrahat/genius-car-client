import img1 from '../../../assets/images/banner/1.jpg'
import img2 from '../../../assets/images/banner/2.jpg'
import img3 from '../../../assets/images/banner/3.jpg'
import img4 from '../../../assets/images/banner/4.jpg'


const Banner = () => {
    return (
        <div className="carousel w-full h-[600px]">
            <div id="slide1" className="carousel-item relative w-full ">
                <img
                    src={img1}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl bottom-0 flex items-center  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 ml-20'>
                        <h1 className="text-6xl font-bold">Afordable price for car serving</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor voluptas distinctio, quaerat itaque totam neque magnam a laborum quidem.</p>
                        <div>
                        <button className="btn btn-error text-white mr-5">Discover more</button>
                        <button className="btn btn-outline border-white text-white">Latest project</button>

                    </div>
                    </div>
                    
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full ">
                <img
                    src={img2}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl bottom-0 flex items-center  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 ml-20'>
                        <h1 className="text-6xl font-bold">Afordable price for car serving</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor voluptas distinctio, quaerat itaque totam neque magnam a laborum quidem.</p>
                        <div>
                        <button className="btn btn-error text-white mr-5">Discover more</button>
                        <button className="btn btn-outline border-white text-white">Latest project</button>

                    </div>
                    </div>
                    
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full ">
                <img
                    src={img3}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl bottom-0 flex items-center  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 ml-20'>
                        <h1 className="text-6xl font-bold">Afordable price for car serving</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor voluptas distinctio, quaerat itaque totam neque magnam a laborum quidem.</p>
                        <div>
                        <button className="btn btn-error text-white mr-5">Discover more</button>
                        <button className="btn btn-outline border-white text-white">Latest project</button>

                    </div>
                    </div>
                    
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full ">
                <img
                    src={img4}
                    className="w-full rounded-xl" />
                <div className="absolute h-full rounded-xl bottom-0 flex items-center  gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0)]">
                    <div className='text-white space-y-7 w-1/2 ml-20'>
                        <h1 className="text-6xl font-bold">Afordable price for car serving</h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro dolor voluptas distinctio, quaerat itaque totam neque magnam a laborum quidem.</p>
                        <div>
                        <button className="btn btn-error text-white mr-5">Discover more</button>
                        <button className="btn btn-outline border-white text-white">Latest project</button>

                    </div>
                    </div>
                    
                </div>
                <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-4">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
           
        </div>
    );
};

export default Banner;