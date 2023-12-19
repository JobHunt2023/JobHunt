import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";

export const SideMenu = () => {
  const [sidebarTop, setSidebarTop] = useState(undefined);
  // const [jobs,setJobs]= useState([]);
  const jobs = [
    {
      title: "Software Engineer",
      company: "Tech Innovators Inc.",
      description:
        "We are looking for a talented and motivated Software Engineer to join our dynamic team. The ideal candidate will be passionate about coding, problem-solving, and creating innovative solutions.",
      requirements: [
        "Bachelor's degree in Computer Science or related field",
        "Solid understanding of software development principles",
        "Proficiency in at least one programming language (e.g., Java, Python, C++)",
        "Experience with web development frameworks (e.g., React, Angular)",
        "Strong problem-solving and communication skills",
        "Ability to work collaboratively in a team environment",
        "Attention to detail and commitment to producing high-quality code",
      ],
    },
    {
      title: "Data Scientist",
      company: "Data Analytics Co.",
      description:
        "Join our data science team and contribute to cutting-edge projects in machine learning and data analysis. We are seeking individuals with a strong background in statistics, programming, and a passion for extracting insights from complex datasets.",
      requirements: [
        "Master's or PhD in a quantitative field (e.g., Statistics, Computer Science, Data Science)",
        "Experience with machine learning frameworks (e.g., TensorFlow, PyTorch)",
        "Proficiency in programming languages such as Python or R",
        "Strong statistical analysis skills",
        "Ability to work with large and complex datasets",
        "Excellent problem-solving and analytical skills",
        "Effective communication skills to present findings to non-technical stakeholders",
      ],
    },
    {
      title: "UX/UI Designer",
      company: "Creative Designs Agency",
      description:
        "We are seeking a talented UX/UI Designer to join our design team. The ideal candidate will have a passion for creating intuitive and visually appealing user interfaces, as well as a strong understanding of user experience principles.",
      requirements: [
        "Bachelor's degree in Graphic Design, HCI, or related field",
        "Proven experience in UX/UI design for web and mobile applications",
        "Proficiency in design tools such as Adobe XD, Sketch, or Figma",
        "Strong understanding of user-centered design principles",
        "Excellent visual design skills and attention to detail",
        "Ability to collaborate with cross-functional teams",
        "Portfolio showcasing relevant design projects",
      ],
    },
  ];

  useEffect(() => {
    const sidebarEl = document
      .querySelector(".sidebar")
      .getBoundingClientRect();
    setSidebarTop(sidebarEl.top);
  }, []);

  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, [sidebarTop]);

  const isSticky = (e) => {
    const sidebarEl = document.querySelector(".sidebar");
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      sidebarEl.classList.add("is-sticky");
    } else {
      sidebarEl.classList.remove("is-sticky");
    }
  };
  return (
    <div>
      <div>
        <div
          className={`w-4/12 border border-gray-300 rounded p-4`}
        >
          <h3 className="text-dark-green">Most Recent Jobs</h3>
          <hr />
          <br />
          <div>
            {jobs.map((job, id) => (
              <Link to="/" key={id}>
                <div className="flex justify-start items-start">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/briefcase-512.png"
                    alt="Job"
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <h1 className="py-0 text-dark-green w-full">{job.title}</h1>
                    <p className="text-light-green text-sm">
                      {job.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={`w-4/12 sidebar border border-gray-300 rounded p-4 sticky top-10`}
        >
          <h3 className="text-dark-green">Most Recent Jobs</h3>
          <hr />
          <br />
          <div>
            {jobs.map((job, id) => (
              <Link to="/" key={id}>
                <div className="flex justify-start items-start">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/briefcase-512.png"
                    alt="Job"
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <h1 className="py-0 text-dark-green w-full">{job.title}</h1>
                    <p className="text-light-green text-sm">
                      {job.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
