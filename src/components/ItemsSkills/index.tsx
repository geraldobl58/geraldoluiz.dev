import {
  SkillsContent,
  SkillsItems,
  SkillsWrapper,
  SkillsTitle,
  SkillsDescription,
  SkillsTitlePage,
  SkillContentFeatured
} from './styles'

import { VscCode } from 'react-icons/vsc'
import { FaBuromobelexperte } from 'react-icons/fa'
import { SiJest, SiStorybook, SiGraphql } from 'react-icons/si'
import {
  AiOutlineDeploymentUnit,
  AiOutlineAntDesign,
  AiFillGithub
} from 'react-icons/ai'

const ItemsSkills = () => {
  return (
    <SkillsWrapper>
      <SkillsTitlePage>Tecnologias</SkillsTitlePage>
      <SkillsContent>
        <SkillsItems>
          <VscCode size={46} />
          <SkillContentFeatured>
            <SkillsTitle>Desenvolvimento</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillContentFeatured>
        </SkillsItems>
        <SkillsItems>
          <AiOutlineDeploymentUnit size={46} />
          <SkillContentFeatured>
            <SkillsTitle>Deploy</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillContentFeatured>
        </SkillsItems>
        <SkillsItems>
          <AiOutlineAntDesign size={46} />
          <SkillsDescription>
            <SkillsTitle>Design Responsivo</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillsDescription>
        </SkillsItems>
        <SkillsItems>
          <SiGraphql size={46} />
          <SkillsDescription>
            <SkillsTitle>Graphql</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillsDescription>
        </SkillsItems>
        <SkillsItems>
          <FaBuromobelexperte size={46} />
          <SkillContentFeatured>
            <SkillsTitle>UX/UI</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillContentFeatured>
        </SkillsItems>
        <SkillsItems>
          <SiJest size={46} />
          <SkillContentFeatured>
            <SkillsTitle>Testing Library</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillContentFeatured>
        </SkillsItems>
        <SkillsItems>
          <SiStorybook size={46} />
          <SkillContentFeatured>
            <SkillsTitle>Storybook</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillContentFeatured>
        </SkillsItems>
        <SkillsItems>
          <AiFillGithub size={46} />
          <SkillContentFeatured>
            <SkillsTitle>Git/Github</SkillsTitle>
            <SkillsDescription>
              My name is Bernard Sydney. I am a Web Developer.
            </SkillsDescription>
          </SkillContentFeatured>
        </SkillsItems>
      </SkillsContent>
    </SkillsWrapper>
  )
}

export default ItemsSkills
