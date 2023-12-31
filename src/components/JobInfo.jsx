import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 0.5rem;
  display: flex;
  align-items: center;

  .icon {
    font-size: 1rem;
    margin-right: 1rem;
    display: flex;
    align-items: center;
    svg {
      color: var(--color-title);
    }
  }
  .text {
    text-transform: capitalize;
    letter-spacing: var(--letterSpacing);
    color: var(--color-text);
  }
`;

const JobInfo = ({ icon, text }) => {
  return (
    <Wrapper>
      <span className='icon'>{icon}</span>
      <span className='text'>{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
