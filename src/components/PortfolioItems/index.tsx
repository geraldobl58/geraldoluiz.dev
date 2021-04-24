import {
  PortfolioItemsWrapper,
  PortfolioItemsContent,
  PortfolioItem
} from './styles'

const PortfolioItems = () => {
  return (
    <PortfolioItemsWrapper>
      <PortfolioItemsContent>
        <PortfolioItem>
          <img src="https://via.placeholder.com/645" alt="" />
          <h3>Primasi Design</h3>
          <p>
            Agência de design gráfico com o melhor custo-benefício. Logotipo,
            panfletos, folders, publicações em redes sociais, sites e mais!
          </p>
        </PortfolioItem>
        <PortfolioItem>
          <img src="https://via.placeholder.com/645" alt="" />
          <h3>Primasi Design</h3>
          <p>
            Agência de design gráfico com o melhor custo-benefício. Logotipo,
            panfletos, folders, publicações em redes sociais, sites e mais!
          </p>
        </PortfolioItem>
      </PortfolioItemsContent>
    </PortfolioItemsWrapper>
  )
}

export default PortfolioItems
