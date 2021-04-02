import TypedHero from 'components/TypedHero'
import { HeroWrapper, HeroContent } from './styles'

const Hero = () => {
  return (
    <HeroWrapper>
      <HeroContent>
        <h1>geraldo</h1>
        <h2>Luiz</h2>
        <TypedHero />
      </HeroContent>
    </HeroWrapper>
  )
}

export default Hero
