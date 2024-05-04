import {
  AboutWrapper,
  HighlightAlt,
  HighlightSpan,
} from "../styles/About.styled";

const About: React.FC = () => {
  return (
    <AboutWrapper data-testid="about">
      <p>
        Hi, my name is <HighlightSpan>Aryan Shrestha</HighlightSpan>!
      </p>
      <p>
        I'm <HighlightAlt>a Security Researcher</HighlightAlt> based in Kathmandu,
        Lalitpur.
      </p>
      <p>
      I'm a technology geek and cybersecurity researcher <br /> 
       who draws inspiration from Nepal's breathtaking landscapes.
      </p>
    </AboutWrapper>
  );
};

export default About;
