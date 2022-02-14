import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Link from 'next/link'

const queryClient = new QueryClient()

function ExtractNames(props) {
  let pokeNames = [];
  for (let i = 0; i < props.pokeTypeNames.length; i++) {
    pokeNames.push(props.pokeTypeNames[i].pokemon.name) ;
  }
  let pokeList = pokeNames.map((name) =>
    <li>
      <Link
        href={{
        pathname: `/category/${encodeURIComponent(name)}`,
        query: { id: `${encodeURIComponent(name)}` },
        }}
      >
        <a>{name}</a>
      </Link>
    </li>
  );
  return (
    <div>
      <ul>{pokeList}</ul>
    </div>
  )
}

export default function PokemonList(props) {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://pokeapi.co/api/v2/type/' + props.category).then(res =>
      res.json()
    )
  )

  if (isLoading) return <h1>'Loading...'</h1>

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      <ExtractNames
        pokeTypeNames = {data.pokemon}
      />
    </div>
  )
}
