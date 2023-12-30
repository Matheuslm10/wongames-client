import 'session.mock'
import 'match-media-mock'
import { render, screen } from 'utils/test-utils'

import Success from '.'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

const props = {
  recommendedTitle: 'You may like these games',
  recommendedGames: gamesMock,
  recommendedHighlight: highlightMock
}

jest.mock('hooks/use-cart', () => ({
  ...jest.requireActual('hooks/use-cart'),
  clearCart: jest.fn()
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

jest.mock('components/Showcase', () => ({
  __esModule: true,
  default: function Mock() {
    return <div data-testid="Mock Showcase" />
  }
}))

describe('<Success />', () => {
  it('should render correctly', () => {
    const { container } = render(<Success {...props} />)

    expect(
      screen.getByRole('heading', { name: /Your purchase was successful!/i })
    ).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })
})
