import { InputField } from 'pages/Login/components'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useState } from 'react'

function LoginForm() {
  const [showError, setShowError] = useState<boolean>(false)
  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: 'all',
    defaultValues: {
      Username: '',
      Password: '',
    },
  })

  const onSubmit = () => {
    navigate('/dashboard')
  }

  const clickHandler = () => {
    if (!showError) setShowError(true)
  }

  return (
    <div className='flex items-center justify-center w-screen h-screen overflow-hidden'>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className='bg-gradient-to-t from-[#7B5A5A] to-[#345161] w-96 h-[438px] border-[1px] border-white flex flex-col pb-14 pt-11 px-12 justify-between'
      >
        <div className='tracking-wide w-40 mx-auto relative   -skew-x-[40deg] h-14 bg-red drop-shadow-xl text-lg font-bold font-BPG-Nino-Mtavruli text-black flex justify-center items-center'>
          <p className='-skew-x-[-40deg]'>კარიბჭე</p>
        </div>
        <InputField
          showError={showError}
          register={register}
          placeholder='მეტსახელი'
          errors={errors.Username}
          type='text'
        />
        <InputField
          showError={showError}
          register={register}
          placeholder='პაროლი'
          errors={errors.Password}
          type='password'
        />
        <button
          onClick={clickHandler}
          className='bg-darkGreen hover:scale-105 mx-auto text-sm w-56 border-[1px] border-white rounded-sm text-white py-3 text-center'
        >
          შემობრძანდი
        </button>
      </form>
    </div>
  )
}

export default LoginForm
