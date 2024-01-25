import '../Styles/UserMainHome.css'

function AdminMainHome(){
  return(
    <>
      <section className="home-container mt-5">
        <span className='icon-home mb-5'></span>
        <h2 className='text-light'>
          ¡Bienvenido!
        </h2>
        <p className='text-light'>
          Panel de Administrador
        </p>
      </section>
    </>
  )
}

export { AdminMainHome }