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
    'JavaScript (ES6+)',
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
              building scalable and efficient web applications that solve real-world problems.
            </p>

            <p>
              Skilled in both front-end and back-end development, I work with technologies like{' '}
              <strong>React, Node.js, Python, Express, and MongoDB</strong>. With hands-on
              experience in Git, databases, and cloud deployment, I focus on writing clean,
              maintainable code.
            </p>

            <p>
              I've had the opportunity to work as a{' '}
              <a href="https://www.linkedin.com/in/yash-dhokane-85b876287/">
                Frontend Developer Intern at RB Tech
              </a>
              , where I gained hands-on experience building responsive and intuitive web
              interfaces, collaborating with senior developers to enhance user experiences.
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
