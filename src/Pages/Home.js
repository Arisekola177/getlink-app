import React from 'react'
import Homebanner from '../Components/Homebanner'
import Introduction from '../Components/Introduction'
import Rules from '../Components/Rules'
import Criteria from '../Components/Criteria'
import FAQ from '../Components/FAQ'
import Timeline from '../Components/Timeline'
import Reward from '../Components/Reward'
import Partner from '../Components/Partner'
import Privacy from '../Components/Privacy'

const Home = () => {
  return (
    <div>
        <Homebanner />
        <Introduction />
        <Rules />
        <Criteria />
        <FAQ />
        <Timeline />
        <Reward />
        <Partner />
        <Privacy />
    </div>
  )
}

export default Home