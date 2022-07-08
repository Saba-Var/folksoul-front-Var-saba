import { Header, Wrapper, Info, SolarSystem } from 'pages/Home/components'
import { useEffect, useState } from 'react'
import { ErrorAlert } from 'components'
import { fetchBandAbout } from 'helper'
import {
  bandMember1,
  bandMember2,
  bandMember3,
  bandMember4,
  bandMember5,
} from 'assets/images'

const Home = () => {
  const [infoImage, setInfoImage] = useState('')

  const [bandInfo, setBandInfo] = useState('')
  const [infoText, setInfoText] = useState('')

  const [image, setImage] = useState('')
  const [color, setColor] = useState('')

  const [errorAlert, setErrorAlert] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const imageArray = [
    bandMember1,
    bandMember2,
    bandMember3,
    bandMember4,
    bandMember5,
  ]

  useEffect(() => {
    fetchBandAbout(setErrorAlert, setBandInfo, setIsLoading, setImage)
    setInfoText(bandInfo)
    setInfoImage(image)
  }, [bandInfo, image])

  return (
    <Wrapper>
      <>
        <Header />

        {errorAlert && (
          <ErrorAlert
            styles='top-[5%] left-[53%]'
            setShowAlert={setErrorAlert}
            title='ინფორმაცია ვერ მოიძებნა'
          />
        )}

        <div className='flex justify-between px-[3%]'>
          <SolarSystem
            setInfoImage={setInfoImage}
            setInfoText={setInfoText}
            imageArray={imageArray}
            setColor={setColor}
            bandInfo={bandInfo}
            image={image}
          />

          <Info
            isLoading={isLoading}
            infoText={infoText}
            image={infoImage}
            color={color}
          />
        </div>
      </>
    </Wrapper>
  )
}

export default Home
