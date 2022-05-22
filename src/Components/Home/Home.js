import React from "react";
import img from "../../Image/5bb47bb19cc3d3c790f42291212f7f0a.gif";
import CardSection from "../CardSection/CardSection";
import { useCountUp } from "react-countup";

const Home = () => {
  const countUpRef = React.useRef(null);
  const { start, pauseResume, reset, update } = useCountUp({
    ref: countUpRef,
    start: 0,
    end: 1234567,
    delay: 1000,
    duration: 5,
    onReset: () => console.log("Resetted!"),
    onUpdate: () => console.log("Updated!"),
    onPauseResume: () => console.log("Paused or resumed!"),
    onStart: ({ pauseResume }) => console.log(pauseResume),
    onEnd: ({ pauseResume }) => console.log(pauseResume),
  });
  return (
    <div>
      <div
        className="hero min-h-screen"
        style={{ background: `url(${img})`, backgroundSize: "cover" }}
      >
        <div>
          <div class="hero-overlay bg-opacity-60"></div>
          <div class="hero-content text-center text-neutral-content">
            <div class="max-w-md">
              <h1 class="mb-5 text-5xl font-bold">Hello there</h1>
              <p class="mb-5">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
              <button class="btn btn-primary">Get Started</button>
            </div>
          </div>
        </div>
      </div>
      <CardSection></CardSection>

      <div class="bg-white">
        <div class="container px-6 py-8 mx-auto">
          <h1 class="text-3xl font-semibold text-center text-gray-800 capitalize lg:text-4xl dark:text-white">
            Pricing Plan
          </h1>

          <p class="max-w-2xl mx-auto mt-4 text-center text-gray-500 xl:mt-6 dark:text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Alias quas
            magni libero consequuntur voluptatum velit amet id repudiandae ea,
            deleniti laborum in neque eveniet.
          </p>

          <div class="grid grid-cols-1 gap-8 mt-6 xl:mt-12 xl:gap-12 md:grid-cols-2 lg:grid-cols-3">
            <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
              <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
                Free
              </p>

              <h2 class="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $0
              </h2>

              <p class="font-medium text-gray-500 dark:text-gray-300">
                Life time
              </p>

              <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Start Now
              </button>
            </div>

            <div class="w-full p-8 space-y-8 text-center bg-blue-600 rounded-lg">
              <p class="font-medium text-gray-200 uppercase">Premium</p>

              <h2 class="text-5xl font-bold text-white uppercase dark:text-gray-100">
                $40
              </h2>

              <p class="font-medium text-gray-200">Per month</p>

              <button class="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-200 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                Start Now
              </button>
            </div>

            <div class="w-full p-8 space-y-8 text-center border border-gray-200 rounded-lg dark:border-gray-700">
              <p class="font-medium text-gray-500 uppercase dark:text-gray-300">
                Enterprise
              </p>

              <h2 class="text-5xl font-bold text-gray-800 uppercase dark:text-gray-100">
                $100
              </h2>

              <p class="font-medium text-gray-500 dark:text-gray-300">
                Life time
              </p>

              <button class="w-full px-4 py-2 mt-10 tracking-wide text-white capitalize transition-colors duration-200 transform bg-blue-600 rounded-md hover:bg-blue-500 focus:outline-none focus:bg-blue-500 focus:ring focus:ring-blue-300 focus:ring-opacity-80">
                Start Now
              </button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div ref={countUpRef} />
        <button onClick={start}>Start</button>
        <button onClick={reset}>Reset</button>
        <button onClick={pauseResume}>Pause/Resume</button>
        <button onClick={() => update(2000)}>Update to 2000</button>
      </div>
    </div>
  );
};

export default Home;
