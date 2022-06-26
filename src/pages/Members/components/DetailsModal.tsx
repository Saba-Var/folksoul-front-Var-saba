import { Modal } from 'components'
import { DetailModal } from 'pages/Members/components/types'

const DetailsModal: React.FC<DetailModal> = (props) => {
  const { name, instrument, orbitLength, biography } = props.currentMember
  return (
    <Modal title={`${name}~${instrument}`} setShowModal={props.setMemberModal}>
      <div
        className={`h-[500px] ${biography.length > 630 && 'overflow-y-scroll'}`}
      >
        <div className='flex justify-center mb-4 mt-4'>
          <div
            className={`border bg-darkBlue shadow-5xl border-white w-36 h-36 rounded-full flex justify-center items-center  `}
          >
            <img src={props.avatar} alt='avatar icon' />
          </div>
        </div>

        <p className='text-sm tracking-wide text-center mb-3'>
          ორბიტალური დაშორება:
          <span className='font-bold'>{orbitLength}</span>
        </p>
        <p className='text-justify'>{biography}</p>
      </div>
    </Modal>
  )
}

export default DetailsModal
