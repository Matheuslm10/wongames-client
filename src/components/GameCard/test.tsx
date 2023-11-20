import 'session.mock'
import { render, screen } from 'utils/test-utils'

import GameCard from '.'

const props = {
  id: '1',
  slug: 'population-zero',
  title: 'Population Zero',
  developer: 'Rockstar Games',
  img: 'https://source.unsplash.com/user/willianjusten/300x140',
  price: 235
}

describe('<GameCard />', () => {
  it('should render correctly', () => {
    const { container } = render(<GameCard {...props} />)

    expect(screen.getByText(/population zero/i)).toBeInTheDocument()
    expect(screen.getByText(/rockstar games/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: props.title })).toHaveAttribute(
      'src',
      props.img
    )
    expect(screen.getByRole('link', { name: props.title })).toHaveAttribute(
      'href',
      `/game/${props.slug}`
    )
    expect(screen.getByText('$235.00')).toBeInTheDocument()
    expect(screen.getByLabelText(/add to wishlist/i)).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should render price in label', () => {
    render(<GameCard {...props} />)

    expect(screen.getByText('$235.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('$235.00')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render a line-through in price when promotional', () => {
    render(<GameCard {...props} promotionalPrice={200} />)

    expect(screen.getByText('$235.00')).toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('$200.00')).not.toHaveStyle({
      'text-decoration': 'line-through'
    })
    expect(screen.getByText('$200.00')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render FREE label when price is 0', () => {
    render(<GameCard {...props} price={0} />)

    expect(screen.getByText('FREE')).toHaveStyle({
      'background-color': '#3CD3C1'
    })
  })

  it('should render Ribbon', () => {
    render(
      <GameCard
        {...props}
        ribbon="My Ribbon"
        ribbonColor="secondary"
        ribbonSize="small"
      />
    )
    const ribbon = screen.getByText(/my ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({ backgroundColor: '#3CD3C1' })
    expect(ribbon).toHaveStyle({ height: '2.6rem', fontSize: '1.2rem' })
  })
})
