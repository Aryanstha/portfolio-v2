import { EduIntro, EduList } from "../styles/Education.styled";
import { Wrapper } from "../styles/Output.styled";

const Education: React.FC = () => {
  return (
    <Wrapper data-testid="education">
      <EduIntro>Here is my education background!</EduIntro>
      {eduBg.map(({ title, desc }) => (
        <EduList key={title}>
          <div className="title">{title}</div>
          <div className="desc">{desc}</div>
        </EduList>
      ))}
    </Wrapper>
  );
};

const eduBg = [
  {
    title: "Bachelor of Science in Information Technology",
    desc: "Westcliff University | 2022 ~ running",
  },
  {
    title: "High School",
    desc: "Arniko College | 2019 - 2021",
  },
  {
    title: "Secondary Education Examination",
    desc: "New Tulips' School | 2019",
  },
];

export default Education;
