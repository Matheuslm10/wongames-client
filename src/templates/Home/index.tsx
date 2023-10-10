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
  newGamesTitle: string
  newGames: GameCardProps[]
  mostPopularGamesTitle: string
  mostPopularGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  upcomingGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  freeGamesTitle: string
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGamesTitle,
  newGames,
  mostPopularGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGamesTitle,
  upcomingHighlight,
  upcomingGames,
  freeGamesTitle,
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
      <Showcase title={newGamesTitle} games={newGames} />
    </S.SectionNews>

    <Container>
      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Container>
  </Base>
)

export default Home
