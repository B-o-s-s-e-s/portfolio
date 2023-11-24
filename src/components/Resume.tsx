import { Fragment, useRef, useState } from "react";

import LanguageIcon from "@mui/icons-material/Language";
import AlternateEmailIcon from "@mui/icons-material/AlternateEmail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import PrintIcon from "@mui/icons-material/Print";

function Resume() {
  const title = ["UX Designer"];

  const links = [
    {
      icon: <AlternateEmailIcon fontSize="small" />,
      link: "sc3322@cornell.edu",
      text: "sc3322@cornell.edu",
    },
    {
      icon: <LanguageIcon fontSize="small" />,
      link: "https://b-o-s-s-e-s.github.io/portfolio/",
      text: "b-o-s-s-e-s.github.io/portfolio/",
    },
    {
      icon: <LinkedInIcon fontSize="small" />,
      link: "https://www.linkedin.com/in/senhuangcai/",
      text: "linkedin.com/in/senhuangcai/",
    },
  ];

  const experience = [
    {
      company: "MetLife",
      position: "Business Analyst",
      dates: "Jun 2022 - Aug 2022",
      description:
        "Designed a prototype for an internal networking app with 20 features based on data analysis of onboarding metrics, in collaboration with designers and product managers on an agile team. Additionally, spearheaded a project that streamlined a project creation workflow by 30% through user interviews, identification of key pain points, and presentation of recommendations and its impact.",
    },
    {
      company: "SpeakHire",
      position: "Frontend Engineer",
      dates: "Jul 2021 - Aug 2021",
      description:
        "Built a compelling onboarding experience for new mentors, leading to a 50% improvement in user experience measured by bounce rate, conversion rate, and app responsiveness. Additionally, conducted research on User Experience (UX) best practices in wireframes, mockups, and prototypes.",
    },
    {
      company: "Queens College",
      position: "WordPress Developer",
      dates: "Jun 2021 - Jun 2023",
      description:
        "Developed compelling mobile friendly websites, achieving on average a 35% decrease in reported bugs by generating unique design systems, integrating third-party APIs, and conducting rigorous testing for responsiveness and quality assurance.",
    },
  ];

  const projects = [
    {
      company: "Google",
      position: "UX Researcher",
      dates: "Aug 2023 - Present",
      description:
        "Selected as one of 50 applicants to collaborate with Google designers to define an AI-first strategy and roadmap for a Google customer relationship management (CRM) system with LLM-powered capabilities.",
    },
    {
      company: "Google",
      position: "UX Designer",
      dates: "Aug 2022 - Dec 2022",
      description:
        "Conducted a case study identifying 4 customer pain points in the Google Maps app and managed design remediations through analysis of 10 user usability testing and user research.",
    },
  ];

  const education = [
    {
      school: "Cornell University",
      degree:
        "Master of Professional Studies in Information Science for User Experience",
      graduation: "Expected May 2024",
    },
    {
      school: "University at Buffalo",
      degree: "Bachelor of Science in Computer Science",
      graduation: "Graduated May 2023",
    },
  ];

  const skills = [
    {
      section: "Design",
      skills: [
        "User-Centered Design",
        "User Research",
        "Storyboarding",
        "Wireframing",
      ],
    },
    {
      section: "Techincal",
      skills: [
        "Adobe Creative Suite",
        "Fusion 360",
        "JavaScript",
        "TypeScript",
        "HTML",
        "CSS",
        "React",
        "Angular",
      ],
    },
  ];

  const leadership = [
    {
      company: "Cornell University",
      position: "M.P.S., Information Science Club President",
      dates: "Aug 2023 - Present",
      description:
        "Deliver over 10 graduate events centered on networking, career fairs, and diversity events, by ensuring seamless logistics, crafting enticing marketing campaigns.",
    },
    {
      company: "CodePath.org",
      position: "Tech Fellow",
      dates: "Jun 2021 - Aug 2023",
      description:
        "Managed the learning outcomes of around 90 students over 3 college semesters by defining weekly instructional for technical assistants, creating technical slides.",
    },
  ];

  const ref = useRef<HTMLDivElement>(null);

  const handlePrint = () => {
    if (ref && ref.current) {
      const html = ref.current.innerHTML;

      const iframe = document.createElement("iframe");
      iframe.style.display = "none";
      document.body.appendChild(iframe);

      const contentWindow = iframe.contentWindow;

      if (contentWindow) {
        contentWindow.document.open();
        contentWindow.document.write(`
        <head>
          <script type="text/javascript">
            window.onload = function() {
              if (parent) {
                const iframeHead = document.querySelector('head');

                const parentStylesheet = parent.document.querySelector('link[rel="stylesheet"]');

                iframeHead.appendChild(parentStylesheet.cloneNode(true));

                var parentOtherStylesheets = parent.document.getElementsByTagName("style");
                for (var i = 0; i < parentOtherStylesheets.length; i++) {
                  iframeHead.appendChild(parentOtherStylesheets[i].cloneNode(true));
                }

                console.log(iframeHead);
              }
            }

            addEventListener("load", () => { 
              print();
              close();
            });
          </script>
        </head>
        <body>
          ${html}
        </body>
        `);

        contentWindow.document.close();
        contentWindow.focus();
        contentWindow.print();
      }
    }
  };

  return (
    <div className="bg-blue-50 min-h-screen w-screen p-36">
      <div className="flex flex-col justify-center items-center gap-y-8=">
        <div
          className="h-[11in] w-[8.5in] bg-white shadow-lg flex justify-center items-center animate-showTopFadeIn relative
          overflow-hidden
          print:shadow-none
          print:rounded-none
          print:border-none
          print:scale-100
          print:overflow-hidden"
          ref={ref}
        >
          <span
            className="absolute top-2 right-2 text-xs text-gray-100 bg-slate-500 px-4 py-1 rounded-full hover:bg-slate-400 hover:cursor-pointer transition-all print:hidden"
            onClick={handlePrint}
          >
            Print <PrintIcon fontSize="small" />
          </span>
          <div className="p-10 h-full w-full flex flex-col justify-center items-center">
            {/* Heading */}

            <div className="flex w-full gap-x-8 pb-10">
              <div className="w-[60%]">
                <h1 className="text-4xl text-blue-500 font-medium">Pika Cai</h1>
                <h2>{title.join(", ")}</h2>
              </div>

              <div className="flex flex-col text-sm w-[40%]">
                {links.map((entry, index) => (
                  <a
                    key={index}
                    className="underline underline-offset-2"
                    href={
                      entry.link.includes("@")
                        ? "mailto:" + entry.link
                        : entry.link
                    }
                    target="blank"
                  >
                    {entry.icon} {entry.text}
                  </a>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="text-sm flex gap-x-8">
              {/* Experiece */}
              <div className="w-[60%]">
                <div className="pb-8">
                  <p className="text-xl font-medium pb-5">Experience</p>
                  {experience.map((entry, index) => (
                    <div key={index} className="pb-4 last:pb-0">
                      <div className="flex flex-col">
                        <p className="text-base">
                          <span className="font-medium">{entry.company}</span>,{" "}
                          <span className="text-blue-500 font-medium">
                            {entry.position}
                          </span>
                        </p>
                        <p className="text-gray-500 font-medium">
                          {entry.dates}
                        </p>
                        <p className="text-sm">{entry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pb-8">
                  <p className="text-xl font-medium pb-5">Projects</p>
                  {projects.map((entry, index) => (
                    <div key={index} className="pb-4 last:pb-0">
                      <div className="flex flex-col">
                        <p className="text-base">
                          <span className="font-medium">{entry.company}</span>,{" "}
                          <span className="text-blue-500 font-medium">
                            {entry.position}
                          </span>
                        </p>
                        <p className="text-gray-500 font-medium">
                          {entry.dates}
                        </p>
                        <p className="">{entry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* University/Skills/Tools */}
              <div className="w-[40%]">
                <div className="pb-8">
                  <p className="text-xl font-medium pb-5">Education</p>
                  {education.map((entry, index) => (
                    <div key={index} className="pb-4 last:pb-0">
                      <div className="flex flex-col">
                        <p className="text-base font-medium">{entry.school}</p>
                        <p className="text-gray-500 font-medium">
                          {entry.graduation}
                        </p>
                        <p>{entry.degree}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pb-8">
                  <p className="text-xl font-medium pb-5">Skills</p>
                  {skills.map((entry, index) => (
                    <div key={index} className="pb-4 last:pb-0">
                      <div className="flex flex-col">
                        <p className="text-base font-medium">{entry.section}</p>
                        <p>{entry.skills.join(", ")}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="pb-8">
                  <p className="text-xl font-medium pb-5">Leadership</p>
                  {leadership.map((entry, index) => (
                    <div key={index} className="pb-4 last:pb-0">
                      <div className="flex flex-col">
                        <p className="text-base">
                          <span className="font-medium">{entry.company}</span>,{" "}
                          <span className="text-blue-500 font-medium">
                            {entry.position}
                          </span>
                        </p>
                        <p className="text-gray-500 font-medium">
                          {entry.dates}
                        </p>
                        <p>{entry.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;