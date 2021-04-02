import Typed from 'react-typed'

const ROLES = ['React.js', 'React Native', 'Next.js', 'Javascript']

import { HeroTyped } from './styles'

const TypedHero = () => {
  return (
    <HeroTyped>
      <h3>Desenvolvedor</h3>
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
