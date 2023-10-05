import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'
import Button from 'components/Button'
import Link from 'next/link'

export type CartListProps = {
  items: GameItemProps[]
  total: string
  hasButton?: boolean
}

const CartList = ({ items, total, hasButton = false }: CartListProps) => (
  <S.Wrapper>
    {items.map((item) => (
      <GameItem key={item.title} {...item} />
    ))}

    <S.Footer>
      {!hasButton && <span>Total:</span>}
      <S.Total>{total}</S.Total>
      {!!hasButton && (
        <Link href="/cart">
          <Button as="a">Buy it now</Button>
        </Link>
      )}
    </S.Footer>
  </S.Wrapper>
)

export default CartList
