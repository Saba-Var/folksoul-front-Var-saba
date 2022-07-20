import { DeleteDialogProps } from 'pages/SocialLinks/components'
import { DeleteContent, ErrorAlert } from 'components'
import axios, { deleteSocialLink } from 'services'
import { fetchSocialLinks } from 'helpers'
import { useState } from 'react'

const DeleteDialog: React.FC<DeleteDialogProps> = (props) => {
  const { id, setShowModal, setLinks } = props

  const [error, setError] = useState(false)

  const closeModal = () => setShowModal(false)

  const deleteLink = async () => {
    try {
      axios.defaults.headers.common[
        'Authorization'
      ] = `Bearer ${localStorage.getItem('token')}`

      const { status } = await deleteSocialLink(`/delete-link?id=${id}`)

      if (status === 200) {
        fetchSocialLinks(setError, setLinks)
        setShowModal(false)
      }
    } catch (error: unknown) {
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
