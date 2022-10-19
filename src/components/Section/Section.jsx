import { Title, SectionContainer } from '../Section/Section.styled';

export const Section = ({ title, children }) => {
  return (
    <SectionContainer>
      <Title>{title}</Title>
      {children}
    </SectionContainer>
  );
};
