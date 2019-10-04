import styled, { keyframes } from 'styled-components';

export const scaleUp = keyframes`
    from {
        opacity: 0;
        transform: translateY(30px)
    }
    50% {
        opacity: 1;
        transform: translateY(0)
    }
`;

export const ResumeContainer = styled.div`
  animation: ${scaleUp} 1s ease;
  background: #ffffff;
  border-radius: 4px;
  padding: 6.5rem;
  position: relative;
  user-select: none;
  width: 770px;
  min-height: 110rem;
`;

export const Introduction = styled.div`
  margin-bottom: 80px;
`;

export const Heading = styled.div`
  padding: 0 0 4rem 6.6rem;
  position: relative;

  .avatar {
    border-radius: 4px;
    left: 0;
    position: absolute;
    top: 0;
  }
`;

export const FullName = styled.h2`
  font-size: 2rem;
  font-weight: 500;
  line-height: 2rem;
  padding: 0.6rem 0 0.4rem 0;
`;

export const Headline = styled.p`
  color: #555555;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 1.6rem;
`;

export const Summary = styled.p`
  color: #555555;
  font-size: 1.6rem;
  font-weight: 400;
  line-height: 2.6rem;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 4rem;
  grid-template-columns: 1fr 1fr;
  padding-bottom: 4rem;
`;

export const Entry = styled.div`
  cursor: pointer;
  margin-bottom: 3.5rem;
`;

export const EntryTitle = styled.h4`
  color: #252525;
  font-weight: 500;
  margin-bottom: 6px;
  line-height: 15px;
  font-size: 16px;
`;

export const Description = styled.p`
  color: #555555;
  margin-bottom: 10px;
  font-weight: 400;
  line-height: 20px;
  font-size: 15px;
`;

export const Company = styled.strong`
  border-bottom: 1px dotted #ccc;
  font-weight: 500;
`;

export const School = styled(Company)``;

export const Timeframe = styled.span`
  font-size: 13px;
  line-height: 13px;
  color: #ccc;
  display: block;
`;

export const SectionTitle = styled.h3`
  color: ${(props) => props.color};
  font-size: 12px;
  line-height: 12px;
  text-transform: uppercase;
  padding-bottom: 35px;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const Skill = styled.div`
  color: #252525;
  font-size: 16px;
  line-height: 16px;
  margin-bottom: 8px;
  cursor: pointer;
  width: min-content;

  a {
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
    color: #56d9a0;
  }
`;
