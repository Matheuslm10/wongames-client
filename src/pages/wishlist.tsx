import { GetServerSidePropsContext } from 'next'
import protectedRoutes from 'utils/protected-routes'
import { initializeApollo } from 'utils/apollo'
import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { gamesMapper, highlightMapper } from 'utils/mappers'

import Wishlist, { WishlistTemplateProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'

export default function WishlistPage(props: WishlistTemplateProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)

  if (process.env.NODE_ENV !== 'development') {
    return {
      props: {
        session,
        recommendedGamesTitle: 'Recommended games',
        recommendedGames: gamesMock,
        recommendedHighlight: highlightMock
      }
    }
  }

  const apolloClient = initializeApollo(null, session)

  if (!session) return {}

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session?.user?.email as string
    }
  })

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initializeApolloState: apolloClient.cache.extract(),
      recommendedGamesTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
