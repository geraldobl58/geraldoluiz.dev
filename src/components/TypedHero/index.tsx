import Typed from 'react-typed'

const ROLES = ['HTML', 'CSS', 'ReactJS', 'React Native', 'NextJS', 'Javascript']

import { HeroTyped } from './styles'

const TypedHero = () => {
  return (
    <HeroTyped>
      <h3>Hard Skills</h3>
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
