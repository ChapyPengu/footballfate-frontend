import FormRegister from '../components/form/Register'
import LayoutPage from '../layouts/LayoutPage'

function Register() {
  return (
    <LayoutPage>
      <div className='px-8 lg:px-0'>
        <h1 className='text-primary font-bold text-2xl mb-4 text-center'>Registro</h1>
        <FormRegister />
      </div>
    </LayoutPage>
  )
}

export default Register