import Skills from 'components/Skills'

import { VscCode } from 'react-icons/vsc'
import { AiOutlineDeploymentUnit, AiOutlineAntDesign } from 'react-icons/ai'

import { HadSkillsWrapper, HadSkillsContent } from './styles'

const HadSkills = () => (
  <HadSkillsWrapper>
    <HadSkillsContent>
      <VscCode size={46} />
      <Skills
        title="Desenvolvimento"
        subtitle="My name is Bernard Sydney. I am a Web Developer."
      />
      <AiOutlineDeploymentUnit size={46} />
      <Skills
        title="Deploy"
        subtitle="My name is Bernard Sydney. I am a Web Developer."
      />
      <AiOutlineAntDesign size={46} />
      <Skills
        title="Design Responsivo"
        subtitle="My name is Bernard Sydney. I am a Web Developer."
      />
    </HadSkillsContent>
  </HadSkillsWrapper>
)

export default HadSkills
