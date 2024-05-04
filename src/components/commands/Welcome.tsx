import {
  Cmd,
  HeroContainer, 
  PreName,
  PreNameMobile,
  PreWrapper,
  Seperator,
} from "../styles/Welcome.styled";

const Welcome: React.FC = () => {
  return (
    <HeroContainer data-testid="welcome">
      <div className="info-section">
        <PreName>
          {`         
    ┏┓          ┓   
    ┣┫┏┓┓┏┏┓┏┓┏╋┣┓┏┓
    ┛┗┛ ┗┫┗┻┛┗┛┗┛┗┗┻
         ┛    
          `}
        </PreName>
        <PreWrapper>
          <PreNameMobile>
            {`
     ┏┓          ┓   
     ┣┫┏┓┓┏┏┓┏┓┏╋┣┓┏┓
     ┛┗┛ ┗┫┗┻┛┗┛┗┛┗┗┻
          ┛   
          `}
          </PreNameMobile>
        </PreWrapper>
        <div>Welcome to my terminal portfolio. (Version 2.0)</div> 
        <Seperator>----</Seperator>
        <div>
          For a list of available commands, type `<Cmd>help</Cmd>`.
        </div>
      </div>
      <div className="illu-section">
      <img src="https://github.com/Aryanstha/portfolio-v2/blob/main/logo.png?raw=true" height="300" width="300" alt="ParrotOS" />

      </div>
    </HeroContainer>
  );
};

export default Welcome;
