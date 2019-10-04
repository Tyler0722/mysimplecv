import styled from 'styled-components';
import { Link } from 'react-router-dom';

import { Button } from 'src/components/Button';

export const Container = styled.div`
  margin: 0 auto;
  max-width: 72rem;
  width: 100%;
`;

export const Block = styled.div`
  padding-top: 15rem;
  width: 100%;
`;

export const CTA = styled(Block)`
  padding: 15rem;
  text-align: center;
`;

export const SampleWrap = styled.div`
  padding-top: 4rem;
  position: relative;

  :before {
    background: #d6d6d6;
    content: '';
    height: 2rem;
    left: 50%;
    position: absolute;
    top: 1rem;
    width: 1px;
  }
`;

export const SampleLink = styled(Link)`
  color: #78889f;
  font-size: 1.6rem;
  line-height: 1.6rem;
  padding-left: 2.4rem;
  position: relative;

  .icon {
    left: 0;
    position: absolute;
    top: 0;
  }
`;

export const Intro = styled(Block)`
  padding-top: 10rem;
  text-align: center;
`;

export const Tagline = styled.span`
  color: #78889f;
  font-weight: 400;
  text-transform: uppercase;
  font-size: 1.4rem;
`;

export const HeroText = styled.h1`
  font-size: 4.5rem;
  line-height: 5.4rem;
  font-weight: 300;
  color: #252525;
  margin: 2rem 0 4rem 0;
`;

export const Features = styled(Block)``;

export const H2 = styled.h2`
  font-size: 3rem;
  line-height: 3rem;
  margin-bottom: 6rem;
  font-weight: 400;
`;

export const FeatureList = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 4.8rem 6rem;

  span.h {
    background: #ef9a04;
  }
`;

export const Feature = styled.li`
  max-width: 33rem;
`;

export const FeatureName = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  line-height: 1.8rem;
  margin-bottom: 1.2rem;
`;

export const FeatureBadge = styled.span`
  background: #1a73e8;
  color: #ffffff;
  font-size: 1.2rem;
  padding: 0.6rem 1.2rem;
  font-weight: 500;
  margin-left: 0.8rem;
  border-radius: 20px;
  vertical-align: text-bottom;
`;

export const FeatureDescription = styled.p`
  font-size: 1.6rem;
  line-height: 2.4rem;
`;

export const Btn = styled(Button)`
  display: inline-flex;
  align-items: center;
  fill: #ffffff;
  font-size: 1.8rem;
  padding: 1.4rem 2rem;
  line-height: 1;

  svg:first-child {
    height: 1.6rem;
    width: 1.6rem;
    margin-right: 1.2rem;
  }

  svg:last-child {
    height: 1.8rem;
    width: 1.8rem;
    margin-left: 2rem;
  }
`;

export const Footer = styled.footer`
  padding: 5rem;
`;
