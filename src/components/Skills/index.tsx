import {
  SkillsContent,
  SkillsItems,
  SkillsWrapper,
  SkillsTitle,
  SkillsDesciption
} from './styles'

import { VscCode } from 'react-icons/vsc'
import { AiOutlineDeploymentUnit, AiOutlineAntDesign } from 'react-icons/ai'

const Skills = () => {
  return (
    <SkillsWrapper>
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
      </SkillsContent>
    </SkillsWrapper>
  )
}

export default Skills
