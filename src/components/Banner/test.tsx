import { render, screen } from 'utils/test-utils'

import Banner from '.'

describe('<Banner />', () => {
  it('should render correctly', () => {
    const { container } = render(
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

  it('should render a Ribbon', () => {
    render(
      <Banner
        img="images/my-image"
        title="Defy death"
        subtitle="Play the new CrashLands"
        buttonLabel="Buy now"
        buttonLink="/my-url"
        ribbon="My Ribbon"
        ribbonSize="small"
        ribbonColor="secondary"
      />
    )

    const ribbon = screen.getByText(/My Ribbon/i)

    expect(ribbon).toBeInTheDocument()
    expect(ribbon).toHaveStyle({
      backgroundColor: '#3CD3C1'
    })
    expect(ribbon).toHaveStyle({
      height: '2.6rem',
      fontSize: '1.2rem'
    })
  })
})
