import TypedHero from 'components/TypedHero'

import { HeroWrapper, HeroContent } from './styles'

const Hero = () => (
  <HeroWrapper>
    <HeroContent>
      <h1>geraldo</h1>
      <h2>Luiz</h2>
      <TypedHero title="Skills" />
    </HeroContent>
  </HeroWrapper>
)

export default Hero
