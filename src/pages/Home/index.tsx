import { useGetApiRestaurantsQuery } from '../../services/api'

import Header from '../../components/Header'
import ShopList from '../../components/ShopList'
import Loader from '../../components/Loader'

const Home = () => {
  const { data: restaurants, isLoading } = useGetApiRestaurantsQuery()

  if (isLoading) return <Loader />

  return (
    <>
      <Header $showtext={true} />
      <ShopList
        isLoading={isLoading}
        shop={Array.isArray(restaurants) ? restaurants : []}
      />
    </>
  )
}

export default Home
