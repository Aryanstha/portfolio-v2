import { useContext, useEffect } from "react";
import {
  checkRedirect,
  getCurrentCmdArry,
  isArgInvalid,
} from "../../utils/funcs";
import {
  ProjectContainer,
  ProjectDesc,
  ProjectsIntro,
  ProjectTitle,
} from "../styles/Projects.styled";
import { termContext } from "../Terminal";
import Usage from "../Usage";

const Projects: React.FC = () => {
  const { arg, history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = getCurrentCmdArry(history);

  /* ===== check current command is redirect ===== */
  useEffect(() => {
    if (checkRedirect(rerender, currentCommand, "projects")) {
      projects.forEach(({ id, url }) => {
        id === parseInt(arg[1]) && window.open(url, "_blank");
      });
    }
  }, [arg, rerender, currentCommand]);

  /* ===== check arg is valid ===== */
  const checkArg = () =>
    isArgInvalid(arg, "go", ["1", "2", "3", "4"]) ? (
      <Usage cmd="projects" />
    ) : null;

  return arg.length > 0 || arg.length > 2 ? (
    checkArg()
  ) : (
    <div data-testid="projects">
      <ProjectsIntro>
        “Talk is cheap. Show me the code”? I got you. <br />
        Here are some of my projects you shouldn't misss
      </ProjectsIntro>
      {projects.map(({ id, title, desc }) => (
        <ProjectContainer key={id}>
          <ProjectTitle>{`${id}. ${title}`}</ProjectTitle>
          <ProjectDesc>{desc}</ProjectDesc>
        </ProjectContainer>
      ))}
      <Usage cmd="projects" marginY />
    </div>
  );
};

const projects = [
  {
    id: 1,
    title: "गवेषणा🔎",
    desc: "गवेषणा is an effective bash scripts that speeds up reconnaissance, extracting information, and the discovering of known vulnerabilities.",
    url: "https://github.com/Aryanstha/GabesanRecon",
  },
  {
    id: 2,
    title: "Code Chronicles🚀",
    desc: "Code Chronicle is a personal blog site that provides high-quality content on various topics related to technology and coding.",
    url: "https://github.com/Aryanstha/Code-Chronicles",
  },
  {
    id: 3,
    title: "GoSubSeeker 🔎",
    desc: "GoSubSeeker is a command-line tool written in Go programming language that scans a target domain to identify its subdomains.",
    url: "https://satnaing.github.io/haru-api/",
  },
  {
    id: 4,
    title: "Gopher",
    desc: "Gopher is a simple, lightweight and fast tool for scanning host: ping, port, service, and so on.",
    url: "https://gopher-yn5o.onrender.com/",
  },
  {
    id: 5,
    title: "Linux-Shell",
    desc: "Linux Shell in C Lang.",
    url: "https://github.com/Aryanstha/Linux-Shell",
  },
];

export default Projects;
