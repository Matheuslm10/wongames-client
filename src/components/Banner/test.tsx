import { screen } from '@testing-library/react'

import Banner from '.'
import { renderWithTheme } from 'utils/tests/helpers'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = renderWithTheme(
      <Banner
        img="images/my-image"
        title="Defy death"
        subtitle="Play the new CrashLands"
        buttonLabel="Buy now"
        buttonLink="/my-url"
      />
    )

    expect(screen.getByText(/buy now/i)).toBeInTheDocument()
    expect(screen.getByText(/play the new crashlands/i)).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /defy death/i })).toBeInTheDocument()
    expect(screen.getByRole('img', { name: /defy death/i })).toHaveAttribute(
      'src',
      'images/my-image'
    )
    expect(container.firstChild).toMatchSnapshot()
  })
})
