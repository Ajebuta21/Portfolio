import React, { useEffect, useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import logo from "./Elvis.png";
import elvis from "./my.JPG";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  const [activeSection, setActiveSection] = useState("section1");

  const handleSetActiveSection = (section) => {
    setActiveSection(section);
  };

  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

    const [bg, setBg] = useState("bg-transparent");
    const [scrollY, setScrollY] = useState(0);
    const [open, setOpen] = useState(false);

    window.addEventListener("scroll", () => {
      setScrollY(window.scrollY);
    });
    useEffect(() => {
      if (scrollY > 0) {
        setBg("bg-white");
      } else {
        setBg("bg-transparent");
      }
    }, [scrollY]);

  return (
    <div className="relative isolate overflow-hidden bg-white min-h-screen lg:overflow-visible">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true"
        >
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width={200}
              height={200}
              x="50%"
              y={-1}
              patternUnits="userSpaceOnUse"
            >
              <path d="M100 200V.5M.5 .5H200" fill="none" />
            </pattern>
          </defs>
          <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
            <path
              d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
              strokeWidth={0}
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth={0}
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <nav className={`w-full ${bg} text-purple-500 fixed h-[10vh] z-50`}>
        <div className="w-full flex justify-between px-4 lg:px-8 h-full items-center relative">
          <img src={logo} alt="" className="h-[9vh]" onClick={scrollToTop} />
          <ul className="md:flex gap-8 items-center h-full hidden text-xs">
            <Link
              to="section1"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActiveSection}
              className={`cursor-pointer transition ease-in-out duration-500 ${
                activeSection === "section1" ? "text-purple-700 scale-110" : ""
              }`}
            >
              Welcome
            </Link>
            <Link
              to="section2"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActiveSection}
              className={`cursor-pointer transition ease-in-out duration-500 ${
                activeSection === "section2" ? "text-purple-700 scale-110" : ""
              }`}
            >
              About Me
            </Link>
            <Link
              to="section3"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActiveSection}
              className={`cursor-pointer transition ease-in-out duration-500 ${
                activeSection === "section3" ? "text-purple-700 scale-110" : ""
              }`}
            >
              Technical Proficiencies
            </Link>
            <Link
              to="section4"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActiveSection}
              className={`cursor-pointer transition ease-in-out duration-500 ${
                activeSection === "section4" ? "text-purple-700 scale-110" : ""
              }`}
            >
              My Projects
            </Link>
            <Link
              to="section5"
              spy={true}
              smooth={true}
              offset={-70}
              duration={500}
              onSetActive={handleSetActiveSection}
              className={`cursor-pointer transition ease-in-out duration-500 ${
                activeSection === "section5" ? "text-purple-700 scale-110" : ""
              }`}
            >
              Why me?
            </Link>
          </ul>
          <button
            onClick={() => setOpen(!open)}
            className="w-[8vh] h-[8vh] block md:hidden"
          >
            {open ? (
              <i class="fa-solid fa-xmark"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </button>
          <ul
            className={`block md:hidden absolute text-sm w-full bg-white left-0 top-[10vh] duration-500 transition ease-in-out ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="w-full backdrop-blur flex flex-col text-purple-500">
              <Link
                to="section1"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActiveSection}
                className={`w-full py-1.5 px-5 ${
                  activeSection === "section1" ? "bg-purple-500 text-white" : ""
                }`}
              >
                Welcome
              </Link>
              <Link
                to="section2"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActiveSection}
                className={`w-full py-1.5 px-5 ${
                  activeSection === "section2" ? "bg-purple-500 text-white" : ""
                }`}
              >
                About Me
              </Link>
              <Link
                to="section3"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActiveSection}
                className={`w-full py-1.5 px-5 ${
                  activeSection === "section3" ? "bg-purple-500 text-white" : ""
                }`}
              >
                Technical Proficiencies
              </Link>
              <Link
                to="section4"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActiveSection}
                className={`w-full py-1.5 px-5 ${
                  activeSection === "section4" ? "bg-purple-500 text-white" : ""
                }`}
              >
                My Projects
              </Link>
              <Link
                to="section5"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                onSetActive={handleSetActiveSection}
                className={`w-full py-1.5 px-5 ${
                  activeSection === "section5" ? "bg-purple-500 text-white" : ""
                }`}
              >
                Why me?
              </Link>
            </div>
          </ul>
        </div>
      </nav>
      <section
        id="section1"
        className="w-full h-screen flex max-md:flex-col-reverse gap-4 pt-[10vh]"
      >
        <div className="w-full h-full flex flex-col justify-center items-center p-4 md:p-8 lg:p-12">
          <h3
            data-aos="fade-up"
            className="text-purple-500 text-xl font-semibold mb-4"
          >
            Welcome to my Portfolio Website!
          </h3>
          <p
            data-aos="fade-right"
            className="text-gray-500 text-center text-sm leading-7"
          >
            Hi, I'm <span className="text-purple-500">Elvis Nwankwere</span>, a
            highly skilled and experienced Full Stack Web Developer specializing
            in React and Laravel. With a solid foundation in HTML, CSS,
            JavaScript, and PHP, I am passionate about creating dynamic and
            innovative web applications that deliver exceptional user
            experiences.
          </p>
        </div>
        <div className="w-full h-full flex p-10 items-center justify-center">
          <div
            data-aos="fade-left"
            className="w-64 h-64 border-4 border-purple-500 rounded-3xl"
          >
            <img
              src={elvis}
              alt=""
              className="object-center w-full h-full rounded-2xl"
            />
          </div>
        </div>
      </section>
      <section
        id="section2"
        className="w-full py-24 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24"
      >
        <h3
          data-aos="fade-up"
          className="text-purple-500 text-xl font-semibold mb-4"
        >
          About me
        </h3>
        <p
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          className="text-gray-500 text-center text-sm leading-7"
        >
          With a strong background in web development, I have honed my skills
          over the years and built a solid expertise in the entire development
          lifecycle, from conceptualization and design to implementation and
          deployment. I possess a deep understanding of front-end and back-end
          technologies, allowing me to create seamless, responsive, and scalable
          web applications.
        </p>
      </section>
      <section
        id="section3"
        className="w-full py-24 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24"
      >
        <h3
          data-aos="fade-up"
          className="text-purple-500 text-xl font-semibold mb-8"
        >
          Technical Proficiencies
        </h3>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="bg-gray-100 shadow p-4 flex flex-col items-center hover:-translate-y-2 transition ease-in-out duration-300 cursor-pointer hover:bg-gray-50"
          >
            <h3 className="text-purple-500 font-semibold mb-2 w-full text-center">
              Front-end Development
            </h3>
            <p className="text-gray-500 text-center text-xs leading-5">
              My proficiency in HTML, CSS, and JavaScript allows me to craft
              visually appealing and intuitive user interfaces. I leverage
              modern frameworks and libraries such as React to create dynamic
              and interactive front-end experiences. Whether it's building
              reusable components, managing state with Redux, or utilizing
              modern CSS methodologies like CSS-in-JS or CSS modules, I strive
              for pixel-perfection and optimized performance.
            </p>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="bg-gray-100 shadow p-4 flex flex-col items-center hover:-translate-y-2 transition ease-in-out duration-300 cursor-pointer hover:bg-gray-50"
          >
            <h3 className="text-purple-500 font-semibold mb-2 w-full text-center">
              Back-end Development
            </h3>
            <p className="text-gray-500 text-center text-xs leading-5">
              I specialize in Laravel, a powerful PHP framework known for its
              elegant syntax and extensive feature set. With Laravel, I can
              build robust back-end systems, design RESTful APIs, and handle
              complex data operations with ease. I am well-versed in PHP,
              allowing me to develop custom functionalities and integrate
              third-party APIs seamlessly.
            </p>
          </div>
          <div
            data-aos="zoom-in-right"
            data-aos-duration="1000"
            className="bg-gray-100 shadow p-4 flex flex-col items-center hover:-translate-y-2 transition ease-in-out duration-300 cursor-pointer hover:bg-gray-50"
          >
            <h3 className="text-purple-500 font-semibold mb-2 w-full text-center">
              Database Management
            </h3>
            <p className="text-gray-500 text-center text-xs leading-5">
              I have hands-on experience with SQL and NoSQL databases, including
              MySQL, PostgreSQL, and MongoDB. I can efficiently design and
              optimize database schemas, write complex queries, and ensure data
              integrity.
            </p>
          </div>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1000"
            className="bg-gray-100 shadow p-4 flex flex-col items-center hover:-translate-y-2 transition ease-in-out duration-300 cursor-pointer hover:bg-gray-50"
          >
            <h3 className="text-purple-500 font-semibold mb-2 w-full text-center">
              Version Control and Deployment
            </h3>
            <p className="text-gray-500 text-center text-xs leading-5">
              I am proficient in Git, enabling me to collaborate effectively
              with team members and manage version control. I also have
              experience with various deployment strategies, including cloud
              platforms like AWS and Heroku, ensuring smooth and secure
              application deployment.
            </p>
          </div>
        </div>
      </section>
      <section
        id="section4"
        className="w-full py-24 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24"
      >
        <h3
          data-aos="fade-up"
          className="text-purple-500 text-xl font-semibold mb-4 w-full"
        >
          My Projects
        </h3>
        <p
          data-aos="zoom-in-left"
          data-aos-duration="1000"
          className="text-gray-500 text-sm leading-7 w-full mb-2"
        >
          Here are some notable projects I have worked on:
        </p>
        <ul className="list-decimal text-gray-500 leading-7 flex gap-4 flex-col">
          <li
            data-aos="zoom-in"
            data-aos-duration="800"
            className="flex flex-col"
          >
            <span className="text-purple-500">E-Commerce Platform:</span>
            Developed a scalable and feature-rich e-commerce platform using
            React, Laravel, and MySQL. Implemented essential functionalities
            such as product catalog, shopping cart, secure payment gateways, and
            order management.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="800"
            className="flex flex-col"
          >
            <span className="text-purple-500">
              University Website with Student Management System:
            </span>
            Developed a comprehensive university website using React and
            Laravel. Implemented a student management system that allows
            administrators to efficiently manage student details, track their
            academic scores, and calculate their Grade Point Average (GPA). The
            system includes features such as student enrollment, course
            registration, attendance tracking, and result computation.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="800"
            className="flex flex-col"
          >
            <span className="text-purple-500">
              Company Websites with Employee Management and Support System:
            </span>
            Created interactive company websites using React and Laravel.
            Implemented an employee management system that enables
            administrators to manage employee details, track their performance,
            and handle various HR operations. Additionally, integrated a support
            system to assist individuals interested in working with the company,
            providing information, job listings, and a platform for inquiries.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="800"
            className="flex flex-col"
          >
            <span className="text-purple-500">
              Task Management Application:
            </span>
            Created a task management application using Laravel and React.
            Implemented user authentication, task assignment, progress tracking,
            and notifications for efficient team collaboration. The application
            offers a user-friendly interface, allowing teams to organize tasks,
            set priorities, and meet project deadlines effectively.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="800"
            className="flex flex-col"
          >
            <span className="text-purple-500">Portfolio Website:</span>
            Designed and developed a personal portfolio website using React and
            Laravel. Implemented a clean and visually appealing layout to
            showcase my skills, projects, and professional experience.
            Integrated features such as contact forms and social media links to
            facilitate communication and networking.
          </li>
          <li
            data-aos="zoom-in"
            data-aos-duration="800"
            className="flex flex-col"
          >
            <span className="text-purple-500">
              Restaurant Menu Website with QR Code:
            </span>
            Developed a dynamic restaurant menu website using React and Laravel.
            Implemented a user-friendly interface that allows customers to
            browse the menu, view detailed descriptions of dishes, and place
            orders. Integrated QR code functionality, enabling customers to scan
            codes at their tables to access the menu directly on their mobile
            devices. This enhances the dining experience by providing a
            touchless and convenient ordering process.
          </li>
        </ul>
      </section>
      <section
        id="section5"
        className="w-full py-24 flex flex-col items-center justify-center px-8 md:px-16 lg:px-24"
      >
        <h3
          data-aos="fade-up"
          className="text-purple-500 text-xl font-semibold mb-8 w-full"
        >
          Why Choose Me?
        </h3>
        <div className="w-full flex flex-col gap-4 text-white text-xs">
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full rounded-e-xl rounded-tl-xl shadow bg-purple-500 flex flex-col p-4 items-start"
          >
            <span className="font-semibold text-lg">Expertise</span>
            With extensive experience in React, Laravel, and related
            technologies, I can bring your ideas to life and deliver
            high-quality web applications that meet your requirements.
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full rounded-s-xl rounded-tr-xl shadow bg-purple-100 flex flex-col p-4 text-purple-500 items-end"
          >
            <span className="font-semibold text-lg">
              Passion for Innovation
            </span>
            I am constantly keeping up with the latest industry trends, best
            practices, and emerging technologies. I strive to leverage
            innovative solutions and stay ahead of the curve in an ever-evolving
            digital landscape.
          </div>
          <div
            data-aos="fade-right"
            data-aos-duration="1000"
            className="w-full rounded-e-xl rounded-tl-xl shadow bg-purple-500 flex flex-col p-4 items-start"
          >
            <span className="font-semibold text-lg">
              Collaborative Approach
            </span>
            I believe in effective communication and collaboration to ensure a
            smooth development process. I actively engage with clients to
            understand their vision and deliver results that exceed
            expectations.
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="1000"
            className="w-full rounded-s-xl rounded-tr-xl shadow bg-purple-100 flex flex-col p-4 text-purple-500 items-end"
          >
            <span className="font-semibold text-lg">Attention to Detail</span>I
            have a keen eye for detail and take pride in delivering
            pixel-perfect designs and clean, maintainable code. I am committed
            to writing efficient, scalable, and well-documented code that is
            easy to maintain and extend.
          </div>
        </div>
      </section>
      <footer className="w-full py-6 bg-purple-500 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 text-white text-xs gap-4">
        <div className="w-full flex items-center justify-center gap-2 md:col-span-2">
          <i class="fa-brands fa-github text-6xl"></i>
          <a href="https://github.com/Ajebuta21">Ajebuta21</a>
        </div>
        <ul className="w-full flex flex-col gap-3 max-lg:px-6">
          <h5 className="font-semibold">Useful Links</h5>
          <Link
            to="section1"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActiveSection}
            className="cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition"
          >
            Welcome
          </Link>
          <Link
            to="section2"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActiveSection}
            className="cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition"
          >
            About Me
          </Link>
          <Link
            to="section3"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActiveSection}
            className="cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition"
          >
            Technical Proficiencies
          </Link>
          <Link
            to="section4"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActiveSection}
            className="cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition"
          >
            My Projects
          </Link>
          <Link
            to="section5"
            spy={true}
            smooth={true}
            offset={-70}
            duration={500}
            onSetActive={handleSetActiveSection}
            className="cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition"
          >
            Why me?
          </Link>
        </ul>
        <ul className="w-full flex flex-col gap-3 max-lg:px-6">
          <h5 className="font-semibold">Contact information</h5>
          <span className="flex justify-start gap-2 items-center cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition">
            <i class="fa-solid fa-phone"></i>
            0906 135 3797
          </span>
          <span className="flex justify-start gap-2 items-center cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition">
            <i class="fa-brands fa-whatsapp"></i>
            0906 135 3797
          </span>
          <span className="flex justify-start gap-2 items-center cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition">
            <i class="fa-solid fa-at"></i>
            elvisluckyest@gmail.com
          </span>
          <span className="flex justify-start gap-2 items-center cursor-pointer hover:translate-x-2 duration-500 ease-in-out transition">
            <i class="fa-solid fa-location-dot"></i>
            Nigeria
          </span>
        </ul>
      </footer>
    </div>
  );
};

export default App;
