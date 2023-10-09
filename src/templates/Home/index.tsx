import BannerSlider from 'components/BannerSlider'
import Base from 'templates/Base'
import Showcase from 'components/Showcase'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import { Container } from 'components/Container'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingGames: GameCardProps[]
  freeHighlight: HighlightProps
  freeGames: GameCardProps[]
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingHighlight,
  upcomingGames,
  freeHighlight,
  freeGames
}: HomeTemplateProps) => (
  <Base>
    <Container>
      <S.SectionBanner>
        <BannerSlider items={banners} />
      </S.SectionBanner>
    </Container>

    <S.SectionNews>
      <Showcase title="News" games={newGames} />
    </S.SectionNews>

    <Container>
      <Showcase
        title="Most Popular"
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title="Upcoming"
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title="Free Games"
        highlight={freeHighlight}
        games={freeGames}
      />
    </Container>
  </Base>
)

export default Home
