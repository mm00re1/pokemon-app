import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import Image from 'next/image'
import Chart from "react-apexcharts"

const queryClient = new QueryClient()

export default function GetPokemonStats(props) {
  const { isLoading, error, data } = useQuery('repoData', () =>
    fetch('https://pokeapi.co/api/v2/pokemon/' + props.name).then(res =>
      res.json()
    )
  )

  if (isLoading) return <h1>'Loading...'</h1>

  if (error) return <h1>"This pokemon might not exist, try again or manually look in the categories"</h1>

  //Display pokemon data and stats chart
  let chartDetails = {
      options: {
        chart: {
          id: "basic-bar"
        },
        xaxis: {
          categories: ["hp", "attack", "defense", "specialAttack", "specialDefense", "speed"]
        }
      },
      series: [
        {
          name: "series-1",
          data: [data.stats[0].base_stat, data.stats[1].base_stat, data.stats[2].base_stat, data.stats[3].base_stat, data.stats[4].base_stat, data.stats[5].base_stat]
        }
      ]
    };

  return (
    <div>
      <h1>{props.name}</h1>
      <div>
          <Image
            src={data.sprites.front_default}
            height={144}
            width={144}
            alt={props.name}
          />
          <h2>id: {data.id}</h2>
      </div>
      <div className="mixed-chart">
        <Chart
          options={chartDetails.options}
          series={chartDetails.series}
          type="bar"
          width="500"
        />
      </div>
    </div>
  )
}

