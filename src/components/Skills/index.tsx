import { HardSkillsItem } from './styles'

interface SkillsProps {
  title: string
  subtitle: string
}

const Skills = ({ title, subtitle }: SkillsProps) => (
  <HardSkillsItem>
    <div>
      <h1>{title}</h1>
      <p>{subtitle}</p>
    </div>
  </HardSkillsItem>
)

export default Skills
