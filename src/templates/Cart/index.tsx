import { Session } from 'next-auth'
import { loadStripe } from '@stripe/stripe-js'
import { Elements } from '@stripe/react-stripe-js'
import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'
import PaymentForm from 'components/PaymentForm'
import CartList, { CartListProps } from 'components/CartList'
import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import Base from 'templates/Base'

import * as S from './styles'

export type CartTemplateProps = {
  session: Session
  recommendedGamesTitle: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
} & CartListProps

const stripe = loadStripe(`${process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY}`, {
  locale: 'en'
})

const Cart = ({
  session,
  recommendedGamesTitle,
  recommendedGames,
  recommendedHighlight
}: CartTemplateProps) => {
  return (
    <Base>
      <Container>
        <Heading lineLeft lineColor="secondary" color="white">
          My cart
        </Heading>

        <S.Content>
          <CartList />

          <Elements stripe={stripe}>
            <PaymentForm session={session} />
          </Elements>
        </S.Content>

        <Divider />
      </Container>

      <Showcase
        title={recommendedGamesTitle}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Cart
