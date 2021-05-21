import * as S from './styles'

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
    <S.Wrapper>
      <S.TitlePage>Tecnoogias</S.TitlePage>
      <S.Content>
        <S.Items>
          <VscCode size={46} />
          <S.ContentFeatured>
            <S.Title>Desenvolvimento</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.ContentFeatured>
        </S.Items>
        <S.Items>
          <AiOutlineDeploymentUnit size={46} />
          <S.ContentFeatured>
            <S.Title>Deploy</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.ContentFeatured>
        </S.Items>
        <S.Items>
          <AiOutlineAntDesign size={46} />
          <S.Description>
            <S.Title>Design Responsivo</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.Description>
        </S.Items>
        <S.Items>
          <SiGraphql size={46} />
          <S.Description>
            <S.Title>Graphql</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.Description>
        </S.Items>
        <S.Items>
          <FaBuromobelexperte size={46} />
          <S.ContentFeatured>
            <S.Title>UX/UI</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.ContentFeatured>
        </S.Items>
        <S.Items>
          <SiJest size={46} />
          <S.ContentFeatured>
            <S.Title>Testing Library</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.ContentFeatured>
        </S.Items>
        <S.Items>
          <SiStorybook size={46} />
          <S.ContentFeatured>
            <S.Title>Storybook</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.ContentFeatured>
        </S.Items>
        <S.Items>
          <AiFillGithub size={46} />
          <S.ContentFeatured>
            <S.Title>Git/Github</S.Title>
            <S.Description>
              My name is Bernard Sydney. I am a Web Developer.
            </S.Description>
          </S.ContentFeatured>
        </S.Items>
      </S.Content>
    </S.Wrapper>
  )
}

export default ItemsSkills
