import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing'

import { renderWithTheme } from 'utils/tests/helpers'
import filterItemsMock from 'components/ExploreSidebar/mock'
import { fetchMoreMock, gamesMock } from './mocks'

import Games from '.'
import userEvent from '@testing-library/user-event'
import apolloCache from 'utils/apolloCache'

// eslint-disable-next-line @typescript-eslint/no-var-requires
const useRouter = jest.spyOn(require('next/router'), 'useRouter')
const push = jest.fn()

useRouter.mockImplementation(() => ({
  push,
  query: '',
  asPath: '',
  route: '/'
}))

jest.mock('templates/Base', () => ({
  __esModule: true,
  default: function Mock({ children }: { children: React.ReactNode }) {
    return <div data-testid="Mock Base">{children}</div>
  }
}))

describe('<Games />', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should render loading when starting the template', () => {
    renderWithTheme(
      <MockedProvider mocks={[]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()
  })

  it('should render sections', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock]} addTypename={false}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(screen.getByText(/loading.../i)).toBeInTheDocument()

    expect(await screen.findByText(/Price/i)).toBeInTheDocument()
    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    expect(
      await screen.findByRole('button', { name: /show more/i })
    ).toBeInTheDocument()
  })

  it('should render more games when show more is clicked', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(await screen.findByText(/Sample Game/i)).toBeInTheDocument()

    userEvent.click(await screen.findByRole('button', { name: /show more/i }))

    expect(await screen.findByText(/Fetch More Game/i)).toBeInTheDocument()
  })

  it('should change push router when selecting a filter', async () => {
    renderWithTheme(
      <MockedProvider mocks={[gamesMock, fetchMoreMock]} cache={apolloCache}>
        <Games filterItems={filterItemsMock} />
      </MockedProvider>
    )

    expect(push.mock.calls[0][0]).toStrictEqual({
      pathname: '/games',
      query: {}
    })

    userEvent.click(await screen.findByRole('checkbox', { name: /windows/i }))
    expect(push.mock.calls[1][0]).toStrictEqual({
      pathname: '/games',
      query: { platforms: ['windows'] }
    })

    userEvent.click(await screen.findByRole('checkbox', { name: /linux/i }))
    expect(push.mock.calls[2][0]).toStrictEqual({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'] }
    })

    userEvent.click(await screen.findByLabelText(/low to high/i))
    expect(push.mock.calls[3][0]).toStrictEqual({
      pathname: '/games',
      query: { platforms: ['windows', 'linux'], sort_by: 'low-to-high' }
    })
  })
})
