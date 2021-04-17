import Skills from 'components/Skills'

import { VscCode } from 'react-icons/vsc'

import { HadSkillsWrapper, HadSkillsContent } from './styles'

const HadSkills = () => (
  <HadSkillsWrapper>
    <HadSkillsContent>
      <VscCode size={46} />
      <Skills
        title="Software Engineer"
        subtitle="My name is Bernard Sydney. I am a Web Developer."
      />
      <VscCode size={46} />
      <Skills
        title="DevOps"
        subtitle="My name is Bernard Sydney. I am a Web Developer."
      />
      <VscCode size={46} />
      <Skills
        title="Software Engineer"
        subtitle="My name is Bernard Sydney. I am a Web Developer."
      />
    </HadSkillsContent>
  </HadSkillsWrapper>
)

export default HadSkills
