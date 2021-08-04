import Typed from 'react-typed'

const ROLES = [
  'Deploy',
  'Design Responsivo',
  'Graphql',
  'UX/UI',
  'Testing Library',
  'Cypress',
  'Storybook',
  'Git/Github',
  'Docker'
]

import { HeroTyped } from './styles'

const TypedHero = () => {
  return (
    <HeroTyped>
      <Typed
        loop
        typeSpeed={70}
        backSpeed={70}
        strings={ROLES}
        backDelay={1000}
        loopCount={0}
        showCursor
        cursorChar="|"
      />
    </HeroTyped>
  )
}

export default TypedHero
