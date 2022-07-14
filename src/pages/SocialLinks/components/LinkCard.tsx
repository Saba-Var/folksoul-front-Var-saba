import { DeleteLink, Details, ChangeIcon } from 'pages/SocialLinks/components'
import { LinksData } from 'pages/SocialLinks/components/types'
import { YellowBtn } from 'components'

const LinkCard: React.FC<LinksData> = (props) => {
  const { links, setLinks, setLinkId, setSection } = props

  const changeButtonHandler = (id: string) => {
    setLinkId(id)
    setSection('changeLink')
  }

  return (
    <div className='overflow-y-auto pt-[3%] mb-2'>
      <div className='flex flex-col overflow-y-auto items-center gap-14 animate-fade-in'>
        {links.map((link) => (
          <div
            key={link._id}
            className='border border-black transition-transform shadow-4.5xl rounded-md bg-charcoal w-[750px] 4xl:w-[820px] !h-16 flex justify-between px-7 items-center'
          >
            <ChangeIcon
              linkName={link.linkName}
              setLinks={setLinks}
              image={link.image}
              id={link._id}
            />

            <Details linkName={link.linkName} url={link.url} />

            <div className='flex justify-between w-24'>
              <div
                data-cy='YellowBtn'
                onClick={() => changeButtonHandler(link._id)}
              >
                <YellowBtn />
              </div>

              <DeleteLink id={link._id} links={links} setLinks={setLinks} />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkCard
