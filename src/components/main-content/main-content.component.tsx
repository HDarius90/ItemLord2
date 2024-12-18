import { MainContentWrapper, MainHeading, MainText } from "./main-content.styled";

interface MainContentProps {
  darktheme: true;
}

// MainContent Component
const MainContent: React.FC<MainContentProps> = () => {
  return (
    <MainContentWrapper>
      <MainHeading>{'title'}</MainHeading>
      <MainText>{'content'}</MainText>
    </MainContentWrapper>
  );
};

export default MainContent;
