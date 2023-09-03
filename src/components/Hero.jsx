import heroImage from '../assets/heroBackground.jpg'

const Hero = () => {
  return (
    <div className="bg-cover bg-center h-screen flex flex-col justify-center items-center bg-indigo-900" style={{ backgroundImage: `url(${heroImage})`}}>
      <div className="text-white text-center">
        <h1 className="text-4xl sm:text-6xl font-bold mb-4">EpicFest is Here.</h1>
        <div className="flex space-x-4 justify-center">
          <button className="bg-indigo-500 hover:bg-indigo-600 text-white px-6 py-2 rounded-lg font-medium">
            Join Waitlist
          </button>
          <button className="bg-gray-700 hover:bg-gray-800 text-white px-6 py-2 rounded-lg font-medium">
            Advanced Sales Info
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
