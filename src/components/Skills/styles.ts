import styled from 'styled-components'

export const SkillsWrapper = styled.section``

export const SkillsContent = styled.div`
  padding: 20px 40px;

  display: grid;
  grid-template-columns: repeat(3, 1fr);

  svg {
    margin-right: 2rem;
  }

  @media (max-width: 768px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
  }
`

export const SkillsItems = styled.div`
  margin-bottom: 100px;
`

export const SkillsTitle = styled.h1``

export const SkillsDesciption = styled.p``
