import {
  SkillsContent,
  SkillsItems,
  SkillsWrapper,
  SkillsTitle,
  SkillsDesciption,
  SkillsTitlePage
} from './styles'

import { VscCode } from 'react-icons/vsc'
import { FaBuromobelexperte } from 'react-icons/fa'
import { SiJest, SiStorybook, SiGraphql } from 'react-icons/si'
import {
  AiOutlineDeploymentUnit,
  AiOutlineAntDesign,
  AiFillGithub
} from 'react-icons/ai'

const Skills = () => {
  return (
    <SkillsWrapper>
      <SkillsTitlePage>Skills</SkillsTitlePage>
      <SkillsContent>
        <SkillsItems>
          <VscCode size={46} />
          <SkillsTitle>Desenvolvimento</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <AiOutlineDeploymentUnit size={46} />
          <SkillsTitle>Deploy</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <AiOutlineAntDesign size={46} />
          <SkillsTitle>Design Responsivo</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <SiGraphql size={46} />
          <SkillsTitle>Graphql</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <FaBuromobelexperte size={46} />
          <SkillsTitle>UX/UI</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <SiJest size={46} />
          <SkillsTitle>Testing Library</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <SiStorybook size={46} />
          <SkillsTitle>Storybook</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
        <SkillsItems>
          <AiFillGithub size={46} />
          <SkillsTitle>Git/Github</SkillsTitle>
          <SkillsDesciption>
            My name is Bernard Sydney. I am a Web Developer.
          </SkillsDesciption>
        </SkillsItems>
      </SkillsContent>
    </SkillsWrapper>
  )
}

export default Skills
