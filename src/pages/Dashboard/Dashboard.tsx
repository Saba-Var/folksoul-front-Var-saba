import { PurpleBackground } from 'components'
import { Navigation } from 'pages/Dashboard/components/index'

function Dashboard() {
  return (
    <>
      <PurpleBackground styles='fixed -z-50 w-screen h-screen' />
      <Navigation />
    </>
  )
}

export default Dashboard
