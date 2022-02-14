//renders the list of categories and searchbox

import Head from 'next/head'
import Form from '../components/forms'
import Categories from '../components/categories'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Pokemon App</title>
      </Head>
      <main>
        <h1>Learn about Pokemon here</h1>
	<Form />
	<h2>Pokemon Categories</h2>
        <Categories /> 

      </main>
    </div>
  )
}

