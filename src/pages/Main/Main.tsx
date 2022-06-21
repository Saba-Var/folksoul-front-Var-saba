import { WhiteWrapper } from 'components'
import { tv } from 'assets/images/index'

function Main() {
  return (
    <div className='w-screen h-screen flex items-center pr-[7%] justify-end'>
      <WhiteWrapper>
        <div className='flex flex-col items-center justify-between h-full'>
          <p className='tracking-widest pt-[10%] font-BPG-Nino-Mtavruli text-5xl text-slate-900'>
            დილამშვიდობისა!
          </p>
          <img src={tv} alt='Tv' />
        </div>
      </WhiteWrapper>
    </div>
  )
}

export default Main
