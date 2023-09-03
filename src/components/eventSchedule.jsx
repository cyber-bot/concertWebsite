const ScheduleSection = () => {
  return (
    <section className="bg-white dark:bg-gray-900 antialiased">
      <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
            EpicFest Schedule
          </h2>
        </div>
        <div className="flow-root max-w-3xl mx-auto mt-8 sm:mt-12 lg:mt-16">
          <div className="-my-4 divide-y divide-gray-200 dark:divide-gray-700">
            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                Day - 1 <br /> 29 August 2024
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">The Chainsmokers</a>
              </h3>
            </div>
            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                Day - 2 <br /> 30 August 2024
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">DJ Snake</a>
              </h3>
            </div>
            <div className="flex flex-col gap-2 py-4 sm:gap-6 sm:flex-row sm:items-center">
              <p className="w-32 text-lg font-normal text-gray-500 sm:text-right dark:text-gray-400 shrink-0">
                Day - 3 <br /> 31 August 2024
              </p>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                <a href="#" className="hover:underline">Marshamello</a>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScheduleSection;