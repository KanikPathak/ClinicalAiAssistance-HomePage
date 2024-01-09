import Navbar from "./components/Navbar";
import "./app.css";
import { useRef, useEffect, useState } from "react";
import Footer from "./components/footer";
function App() {
  const robottRef = useRef(null);
  const [roboPos, setroboPos] = useState(0);

  useEffect(() => {
    const movingRobo = () => {
      if (robottRef.current) {
        const robottPosition = robottRef.current.getBoundingClientRect().top;
        setroboPos(robottPosition);
      }
    };

    window.addEventListener("scroll", movingRobo);
    return () => {
      window.removeEventListener("scroll", movingRobo);
    };
  }, []);

  return (
    <>
      <Navbar />

      <div className="Intro">
        <div className="box bg-white rounded-xl flex flex-col relative top-20 left-10 ">
          <div className=" flex justify-center p-2 flex-wrap">
            <span className="cli font1 mr-3" > CLINICAL </span>
            <span
              style={{ color: "red" }}
              className="cli font1 mr-3
            "
            >
              AI
            </span>
            <span className="cli font1 "> ASSISTANCE </span>
          </div>
          <div className="para mx-4 sm:mx-14 mb-4 sm:mb-10 mt-3 hidden lg:block">
            {/* This paragraph will be hidden on screens smaller than md (768px) */}
            In the past five years, dozens of surveys and reports indicate an
            unbalanced doctor-to-population ratio. With the motivation of
            assisting doctors, we built an autonomous junior healthcare
            assistant, which serves as the initial point of contact for
            patients. The assistant conducts an initial assessment and compiles
            a concise report for the physician. We have also noticed that
            patients encounter challenges when trying to access medical care,
            which can stem from issues such as infrastructure limitations or
            personal stigma. Hence, we are introducing AI-assisted online
            consultation services. Considering the products and services we
            provide, our platform has a substantial number of researchers and
            clinicians. Consequently, we have decided to extend our offerings to
            include clinical datasets, clinical AI frameworks, and mentorship
            opportunities.
          </div>

          <div className="para mx-4 sm:mx-14 mb-4 sm:mb-10 mt-3 lg:hidden">
            In response to a doctor shortage, we've developed an autonomous
            healthcare assistant for patient assessments and reports. Our
            platform now offers AI-assisted online consultations, clinical
            datasets, and mentorship opportunities.
          </div>
          <button
            className="bg-sky-500/ p-3 text-white rounded-lg demo mt-14 bg-blue-400"
            style={{ fontFamily: "", fontWeight: "normal" }}
          >
            Demo Booking
          </button>
          <div className="signUpButton flex justify-center ">
            <button
              className="mt-10 p-4 w-40 mb-7 text-lg font-light rounded-full cli text-white"
              style={{ backgroundColor: "#203658" }}
            >
              Sign Up Now!
            </button>
          </div>
        </div>

        <div className="our-services justify-center flex ">
          <span className="text-4xl font1 mt-10  p-4 sm:p-10 font-bold ">
            OUR SERVICES
          </span>
        </div>

        <div className="cards m-4 grid sm:grid-cols-5 gap-4">
  {/* Card Item 1 */}
  <div className="consultation card-item blue-shade flex flex-col items-center p-4">
    <img src="./media/1.png" alt="" className="card-img mt-4" />
    <div className="desc text-white text-center p-2">
      AI AIDED ONLINE DOCTOR CONSULTATION
    </div>
    <div className="flex mr-10 w-full justify-center">
      <button
        className="details"

      >
        Details
      </button>
      <button
        className="access"

      >
        Access
      </button>
    </div>
  </div>

  {/* Card Item 2 */}
  <div className="dataset card-item blue-shade flex flex-col items-center p-4">
    <img src="./media/2.png" alt="" className="card-img mt-4" />
    <div className="desc text-white text-center p-2">
      CLINICAL DATASETS
    </div>
    <div className="flex mr-10 w-full justify-center">
      <button
        className="details mt-2"

      >
        Details
      </button>
      <button
        className="access mt-2"

      >
        Access
      </button>
    </div>
  </div>

  {/* Card Item 3 */}
  <div className="frameword card-item blue-shade flex flex-col items-center p-4">
    <img src="./media/3.png" alt="" className="card-img mt-4" />
    <div className="desc text-white text-center p-2">
      CLINICAL FRAMEWORKS
    </div>
    <div className="flex mr-10 w-full justify-center">
      <button
        className="details mt-2"

      >
        Details
      </button>
      <button
        className="access mt-2"

      >
        Access
      </button>
    </div>
  </div>

  {/* Card Item 4 */}
  <div className="mentor card-item blue-shade flex flex-col items-center p-4">
    <img src="./media/4.png" alt="" className="card-img mt-4" />
    <div className="desc text-white text-center p-2">MENTORSHIP</div>
    <div className="flex mr-10 w-full justify-center">
      <button
        className="details mt-2"

      >
        Details
      </button>
      <button
        className="access mt-2"

      >
        Access
      </button>
    </div>
  </div>

  {/* Card Item 5 */}
  <div className="pharma card-item blue-shade flex flex-col items-center p-4">
    <img src="./media/5.png" alt="" className="card-img mt-4" />
    <div className="desc text-white text-center p-2">
      NUTRACEUTICAL PRODUCTS
    </div>
    <div className="flex mr-10 w-full justify-center">
      <button
        className="details mt-2"

      >
        Details
      </button>
      <button
        className="access mt-2"

      >
        Access
      </button>
    </div>
  </div>
</div>

      </div>

      <div className="chart w-full">
        <div className="flex flex-col text-center mx-4 sm:mx-20 mt-4 sm:mt-52 mb-4 sm:mb-20">
          <div className="qs bg-blue-300 rounded-lg mb-4 sm:mb-10 text-lg uppercase flex items-center " style={{fontWeight:"500"}}>
            <span>
              We asked 100 Doctors affiliated with prestigious institutions like
              AIIMS
            </span>
            <span className="my-20 text-4xl sm:text-6xl   bg-red-900/20 rounded-lg p-5 ">
              DO
              <span className="text-red-500 font-bold"> YOU </span> THINK?
            </span>
            <span className="text-normal">
              a junior can save your time if they could have performed initial
              symptom investigation <br />
            </span>
          </div>

          <div className="pie-chart mx-auto sm:flex sm:flex-row">
            <img
              src="./media/yes-no.svg"
              alt="pie-chart"
              className="w-full sm:w-auto sm:h-auto"
            />
          </div>
        </div>

        <button className="bg-red-700 text-white p-4 rounded-3xl book">
          BOOK NOW!
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 login m-4 sm:m-20 mt-4 sm:mt-44 text-sm">
        <div className="login text-xl ml-2 sm:ml-32 font1 text-black text-center">
          Log In
          <button className="google border-solid w-96 mt-10 border-gray-600 border-2 shadow-sm shadow-black flex flex-wrap justify-center p-2">
            <img src="./media/google.svg" alt="" className="w-7 h-4" />
            <span className="text-red-600 font-normal ">
              Continue with GOOGLE
            </span>
          </button>
          <div className="credentials mt-20 text-start w-96">
            <form action="submit" className="text-black font-normal">
              <label htmlFor="mail" className="text-black font-normal text-lg">
                E-mail
              </label>
              <br />
              <input
                type="text"
                id="mail"
                placeholder="Enter your e-mail address"
                className="border-2 border-red-400 w-96 p-3 mb-8"
              />
              <br />
              <label htmlFor="pass" className="text-black font-normal text-lg">
                Password
              </label>
              <br />
              <input
                type="password"
                id="pass"
                autoComplete="username"
                className="border-2 border-red-400 w-96 p-3"
                placeholder="Enter your password"
              />
              <button
                type="submit"
                className="p-4 rounded-2xl mt-6 w-28 "
                style={{ backgroundColor: "#1B2D49", color: "white" }}
              >
                LogIn
              </button>
            </form>
            <span className="forgot text-black justify-end flex ">
              {" "}
              <a href="" className="font-normal">
                Forgot Password
              </a>{" "}
            </span>
          </div>
          <div className="text-black font-normal mt-20 ">
            Or register using
            <div className="options flex gap-2 justify-center mt-2">
              <img src="./media/google.svg" alt="" className="w-6 " />
              <img src="./media/mobile.svg" alt="" className="w-6 " />
              <img src="./media/mail.svg" alt="" className="w-6 " />
            </div>
          </div>
        </div>

        <div className="robo sm:col-span-1">
          <img src="./media/robo.png" className="robott" alt="" />
        </div>

        <div
          className="chat-container flex flex-col gap-7 overflow-hidden sm:col-span-1"
          style={{ fontFamily: "" }}
        >
          <div className="bg-red-300 p-4 rounded-3xl text-white font-normal text-end">
            Hi There! How are you feeling today?
          </div>
          <div className="bg-blue-400 p-4 rounded-3xl text-white font-normal">
            I'm not feeling well.
          </div>
          <div className="bg-red-300 p-4 rounded-3xl text-white font-normal text-end">
            Can you specify your problem?
          </div>
          <div className="bg-blue-400 p-4 rounded-3xl text-white font-normal">
            Headache since last night?
          </div>
          <div className="bg-red-300 p-4 rounded-3xl text-white font-normal text-end">
            Are you taking any medications?
          </div>
          <div className="bg-gray-400 p-3 rounded-3xl text-white font-normal">
            Type here..
            <span className="flex justify-end">
              <img
                src="./media/microphone-342.svg"
                className="w-6 relative bottom-4"
                alt=""
              />
            </span>
          </div>
        </div>
      </div>

      <div className="image-ending flex">
        <img src="./media/patta-kot.png" className="" alt="" />
      </div>

      <Footer />
    </>
  );
}

export default App;
