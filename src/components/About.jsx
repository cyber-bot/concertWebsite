import AboutImage1 from '../assets/about1.jpg'
import AboutImage2 from '../assets/about2.jpg'

const AboutSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="gap-16 items-center py- px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Bringing Unforgettable Music Experiences to You</h2>
          <p className="mb-4">At Epic, we live and breathe music. Our mission is to create extraordinary concert experiences that leave a lasting impression on music lovers like you.</p>
          <p>With a team of dedicated professionals, we meticulously plan and execute concerts featuring the world's most renowned artists. From intimate venues to grand stadiums, we curate diverse musical events that cater to a wide range of tastes and preferences.</p>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-8">
          <img className="w-full rounded-lg" src={AboutImage1} alt="Concert Image 1" />
          <img className="mt-4 w-full lg:mt-10 rounded-lg" src={AboutImage2} alt="Concert Image 2" />
        </div>
      </div>
    </section>
  );
}

export default AboutSection;