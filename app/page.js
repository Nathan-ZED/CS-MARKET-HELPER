import Image from 'next/image'
import ItemCard from './Components/ItemCard/ItemCard'

export default function Home() {
  return (
    <main>
      <div className="container mx-auto pt-10">
        <h1>Tous les résultats</h1>
          <ItemCard />
      </div>
    </main>
  )
}
