import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Users } from "../../assets/icons/Users";
// import "bootstrap/dist/css/bootstrap.min.css";

export const SideMenu = () => {
  const [sidebarTop, setSidebarTop] = useState(undefined);
  const [sticky, setSticky] = useState("");
  // const [groups,setGroups]= useState([]);
  // const [jobs,setJobs]= useState([]);
  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    if (scrollTop >= sidebarTop - 10) {
      setSticky("fixed top-5 z-50 animate-fadeInDown");
    } else {
      setSticky("");
    }
  };
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
  const groups = [
    {
      name: "Software Engineer",
      groupImageUrl: "Tech Innovators Inc.",
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
  //   useEffect(() => {
  //     const sidebarEl = document
  //       .querySelector(".sidebar")
  //       .getBoundingClientRect();
  //     setSidebarTop(sidebarEl.top);

  //     // axios.get('').then((response)=>{
  //     //     setJobs(response.data);
  //     // });
  // axios.get('').then((response)=>{
  //     //     setGroups(response.data);
  //     // });
  //   }, []);

  useEffect(() => {
    const sidebarEl = document.querySelector(".sidebar");
    if (sidebarEl) {
      const sidebarTopPos =
        sidebarEl.getBoundingClientRect().top + window.scrollY;
      setSidebarTop(sidebarTopPos);
    }

    const handleScroll = () => {
      isSticky();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    if (!sidebarTop) return;

    window.addEventListener("scroll", isSticky);
    // return () => {
    //   window.removeEventListener("scroll", isSticky);
    // };
  }, [sidebarTop]);

  return (
    <div className="p-3 w-1/3 ">
      <div className="p-3  ">
        <div className={`border bg-bg-white shadow-md border-gray-300  rounded-[1rem] p-4 mb-4`}>
          <h3 className="text-dark-green">Groups & Communities</h3>
          <hr />
          <br />
          <div className="p-3 ">
            {groups.map((group, id) => (
              <Link to="/groupDetails" key={id}>
                <div className="flex justify-start items-start p-3">
                <img
                    src={group.groupImageUrl}
                    alt="Job"
                    className="rounded-full w-10 h-10"
                  />
                  <div>
                    <h1 className="py-0 text-dark-green w-full p-3">
                      {group.name}
                    </h1>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <div
          className={` border bg-bg-white rounded-[1rem] border-light-color shadow-md p-4`}
        >
          <h3 className="text-dark-green">Most Recent Jobs</h3>
          <hr />
          <br />
          <div className="p-3">
            {jobs.map((job, id) => (
              <Link to="/jobDetails" key={id}>
                <div className="flex justify-start items-start p-3">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/mixed-rounded-flat-icon/512/briefcase-512.png"
                    alt="Job"
                    className="rounded-full w-10 h-10"
                  />
                  <div className="p-3">
                    <h1 className="py-0 text-dark-green w-full p-3">
                      {job.title}
                    </h1>
                    <p className="text-light-green text-sm p-3">
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
