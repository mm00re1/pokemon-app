//renders the list of pokemons in 1 category

import Head from 'next/head'
import { useRouter } from "next/router"
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import PokemonList from '../components/pokemonLists' 

const queryClient = new QueryClient()
 
export default function Category() {
  const router = useRouter()
  const {
    query: { id },
  } = router
  return (
    <div>
      <Head>
        <title>{id}</title>
      </Head>

      <main>
        <h1 className="title">
	  {id}
        </h1>

        <div>
          <QueryClientProvider client={queryClient}>
            <PokemonList
	      category = {id}
	    />
          </QueryClientProvider>
        </div>
      </main>
    </div>
  )
}
