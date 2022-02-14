//renders the individual pokemon stats page

import Head from 'next/head'
import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import GetPokemonStats from '../../components/pokemonStats'
const queryClient = new QueryClient()

export default function PokemonStats() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>
      <QueryClientProvider client={queryClient}>
        <GetPokemonStats
	  name = {id}
	/>
      </QueryClientProvider>
    </div>
  )
}
