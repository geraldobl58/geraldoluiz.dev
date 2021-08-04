import Link from 'next/link'

import { BsCodeSlash } from 'react-icons/bs'

import * as S from './styles'

const mock = [
  {
    id: 1,
    link: 'https://reactjs-app-gitcollection.netlify.app/',
    icon: <BsCodeSlash />,
    code: 'Code',
    title: 'Github Collection',
    description: 'Aplicação criada para consultar respositórios no github',
    tags: 'react, styled components, axios, polished, typescript'
  },
  {
    id: 2,
    link: 'https://next-games-client.netlify.app/',
    icon: <BsCodeSlash />,
    code: 'Code',
    title: 'Next Games',
    description: 'Loja virtual criada com nextjs, strapi e stripe pagamentos',
    tags: 'react, sass, axios, typescript'
  }
]

const Portfolio = () => (
  <S.Wrapper>
    <S.Title>Cases</S.Title>
    {mock.map((item) => (
      <Link href={item.link} key={item.id}>
        <a target="_blank">
          <S.Column>
            <S.Coding>
              {item.icon}
              <span>{item.code}</span>
            </S.Coding>
            <S.PortfolioItem>
              <S.TitlePortfolio>{item.title}</S.TitlePortfolio>
              <S.Description>{item.description}</S.Description>
              <S.Tags>
                <span>Tecnologias:</span> {item.tags}
              </S.Tags>
            </S.PortfolioItem>
          </S.Column>
        </a>
      </Link>
    ))}
  </S.Wrapper>
)

export default Portfolio
