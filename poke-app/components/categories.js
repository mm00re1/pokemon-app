import Link from 'next/link'

const categories = ["normal","fighting","flying","poison","ground","rock","bug","ghost","steel","fire","water","grass","electric","psychic","ice","dragon","dark","fairy","unknown","shadow"];

export default function Categories(){
  let pokeCategories = categories.map((category) =>
    <li>
      <Link
        href={{
        pathname: `/${encodeURIComponent(category)}`,
        query: { id: `${encodeURIComponent(category)}` },
        }}
      >
        <a>{category}</a>
      </Link>
    </li>
  );
  return (
    <div>
      <ul>{pokeCategories}</ul>
    </div>
  )
}
