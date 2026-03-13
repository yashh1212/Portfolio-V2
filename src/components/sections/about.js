import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { srConfig } from '@config';
import sr from '@utils/sr';
import { usePrefersReducedMotion } from '@hooks';


const StyledAboutSection = styled.section`
  max-width: 700px;

  .inner {
    display: block;
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);
  const prefersReducedMotion = usePrefersReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }

    sr.reveal(revealContainer.current, srConfig());
  }, []);

  const skills = [
    'JavaScript',
    'React',
    'Node.js',
    'Python',
    'Express',
    'MongoDB',
    'HTML & CSS',
    'Git & GitHub',
  ];

  return (
    <StyledAboutSection id="about" ref={revealContainer}>
      <h2 className="numbered-heading">About Me</h2>

      
    <div className="inner">
  <StyledText>
    <div>
      <p>
        Hello! I'm Yash, a passionate full-stack developer currently pursuing a B.Tech in
        Cybersecurity Engineering (3rd year) with an <strong>8.03 CGPA</strong>. I enjoy
        building scalable, efficient web applications that solve real-world problems — from
        idea to deployment.
      </p>

      <p>
        Skilled in both front-end and back-end development, I work with technologies like{' '}
        <strong>React, Node.js, Python, Express, and MongoDB</strong> to build products that
        are fast, reliable, and maintainable. With hands-on experience across Git, REST APIs,
        databases, and cloud deployment, I focus on writing clean, well-structured code that
        scales.
      </p>

      <p>
        Beyond traditional web development, I've been exploring{' '}
        <strong>AI agents</strong> and how large language models can be integrated into real
        products to automate workflows and solve complex problems intelligently. I find the
        intersection of software engineering and AI particularly exciting — and it's the
        direction I'm actively growing toward.
      </p>

      <p>Here are a few technologies I've been working with recently:</p>
    </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

      </div>
    </StyledAboutSection>
  );
};

export default About;
