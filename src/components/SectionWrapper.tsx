import { WhiteWrapper } from 'components'
import { SectionWrapperProps } from 'components/types'

const SectionWrapper: React.FC<SectionWrapperProps> = (props) => {
  return (
    <WhiteWrapper>
      <>
        <p className='mb-10 font-BPG-Nino-Mtavruli text-center tracking-wider text-lg pb-3 border-b border-black'>
          {props.title}
        </p>
        <div className='flex flex-col justify-between h-full pb-[10%]'>
          {props.children}
        </div>
      </>
    </WhiteWrapper>
  )
}

export default SectionWrapper
