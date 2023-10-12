const Slider = () => {
  return (
    <div>
      <div className="flex justify-center mb-8">
        <div className="w-full h-[75vh] carousel">
          <div id="slide1" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/02HzBvQ/slider1.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide3" className="btn btn-circle">
                ❮
              </a>
              <p className="text-white font-bold text-4xl leading-tight mb-6 p-4 shadow-lg bg-gray-800 bg-opacity-70">
                <span className="text-blue-300">
                  Discover Unforgettable Events with Eduvent!
                </span>{" "}
                <br />
                <span className="text-green-300">
                  Elevate Your Experience with Our Exciting Events
                </span>{" "}
                <br />
                <span className="text-yellow-300">
                  Join Us for a Journey of Learning and Fun
                </span>
              </p>
              <a href="#slide2" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide2" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/nrcdbm4/slider2.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide1" className="btn btn-circle">
                ❮
              </a>
              <p className="text-white font-bold text-4xl leading-tight mb-6 p-4 shadow-lg bg-gray-800 bg-opacity-70">
                <span className="text-blue-300">
                  Explore a World of Knowledge Through Eduvent!
                </span>{" "}
                <br />
                <span className="text-green-300">
                  Unlock Your Potential with Inspiring Events
                </span>{" "}
                <br />
                <span className="text-yellow-300">
                  Immerse Yourself in Educational Excellence
                </span>
              </p>
              <a href="#slide3" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
          <div id="slide3" className="carousel-item relative w-full">
            <img
              src="https://i.ibb.co/879v1gQ/slider3.jpg"
              className="w-full"
            />
            <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
              <a href="#slide2" className="btn btn-circle">
                ❮
              </a>
              <p className="text-white font-bold text-4xl leading-tight mb-6 p-4 shadow-lg bg-gray-800 bg-opacity-70">
                <span className="text-blue-300">
                  Create Lasting Memories at Eduvents Events
                </span>{" "}
                <br />
                <span className="text-green-300">
                  Experience the Joy of Learning Like Never Before
                </span>{" "}
                <br />
                <span className="text-yellow-300">
                  Transform Your Learning Adventure with Eduvent
                </span>
              </p>

              <a href="#slide1" className="btn btn-circle">
                ❯
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Slider;
