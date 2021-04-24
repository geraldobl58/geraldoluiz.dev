import PortfolioItems from 'components/PortfolioItems'
import { PortfolioWrapper, PortfolioContent } from './styles'

const Portfolio = () => {
  return (
    <PortfolioWrapper>
      <PortfolioContent>
        <h3>Portfolio</h3>
        <span>Trabalhos recentes</span>
        <PortfolioItems />
      </PortfolioContent>
    </PortfolioWrapper>
  )
}

export default Portfolio
