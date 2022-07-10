import { DeleteDialogProps } from 'pages/SocialLinks/components/types'
import { DeleteContent, ErrorAlert } from 'components'
import { fetchSocialLinks } from 'helper/index'
import { useState } from 'react'
import axios from 'axios'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const { id, setShowModal, setLinks } = props

  const [error, setError] = useState(false)

  const closeModal = () => setShowModal(false)

  const deleteLink = async () => {
    try {
      const res = await axios.delete(
        'https://folksoul-api.sabavar.redberryinternship.ge/delete-link',
        {
          headers: {
            Authorization: 'Bearer ' + localStorage.getItem('token'),
          },

          data: {
            id,
          },
        }
      )

      if (res.status === 200) {
        fetchSocialLinks(setError, setLinks)
        setShowModal(false)
      }
    } catch (error: any) {
      setError(true)
    }
  }

  return (
    <>
      {error && (
        <ErrorAlert
          styles='top-[-10%] left-[32%]'
          title='ბმული ვერ წაიშალა'
          setShowAlert={setError}
        />
      )}

      <DeleteContent
        deleteMember={deleteLink}
        closeModal={closeModal}
        text='წავშალოთ ბმული?'
      />
    </>
  )
}

export default DeleteDialog
