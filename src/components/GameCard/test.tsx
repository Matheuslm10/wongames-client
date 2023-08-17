import { screen } from '@testing-library/react'
import { renderWithTheme } from 'utils/tests/helpers'

import GameCard from '.'

const props = {
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 'R$ 235,00'
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(screen.getByText(/rockstar games/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByText('R$ 235,00')).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
  })

  it('should render price in label', () => {
    renderWithTheme(<GameCard {...props} />)

    expect(screen.getByText('R$ 235,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    renderWithTheme(<GameCard {...props} promotionalPrice="R$ 200,00" />)

    expect(screen.getByText('R$ 235,00')).toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('R$ 200,00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('R$ 200,00')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })
})
