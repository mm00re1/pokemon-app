import { useRouter } from 'next/router'

export default function Form() {
  const router = useRouter()
  let pokemon = '';

  let handleChange = event => {
    pokemon = event.target.value;
  }

  let getPokemonStats = event => {
    event.preventDefault()
    let href={
      pathname: `/category/${encodeURIComponent(pokemon)}`,
      query: { id: `${encodeURIComponent(pokemon)}` },
    }
    router.push(href)
  }

  return (
    <form className = "searchbox" onSubmit={getPokemonStats}>
      <div>
        <input name="pokemon" type="text" placeholder = "pokemon" onChange={handleChange}/>
      </div>
      <button type="submit">Search</button>
    </form>
  )
}

