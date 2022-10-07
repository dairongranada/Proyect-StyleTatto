import './LayoutsProfileU.scss' 
import { React,useEffect,useState } from 'react'
import { useNavigate } from 'react-router'


/* F I R E B A S E */
import  imgProfiles  from '../../.././images/Icons/profile.jpeg'
export const LayoutsProfileU = () => {

  const [ imgProfileU, setImgProfileU ] = useState()
  useEffect(()=>{setImgProfileU(imgProfiles)})

  return (
      <div className='Content_profleUser'>

        <div className='contProfileU'>
          <input type="file" name='file' onChange={e=> console.log(e.target.files[0])} />
          <div className='ContFaceUser'>
            <img className='FaceUser' src={imgProfileU} alt={imgProfileU} />
          </div>
          <div className='contNameU'>
            <h3 className='NameU'>Laura Vallejo Jaramillo</h3>
          </div>
          <div className='optionsUser'>
            <div className='option'>
              <p>Editar Foto De Perfil</p>
            </div>
            <div className='option'>
              <p>Editar Contraseña</p>
            </div>
            <div className='option'>
              <p>Citas Agendadas</p>
            </div>
            <div className='option Logout'>
              <p><button >Cerrar Sesion</ button></p>
            </div>
          </div>
        </div>

        <div className='contPublicP'>
          <div className='contTittle'>
            <h3>Public Profile</h3>
            <p>Agrege informacion sobre usted</p>
            <hr/>
          </div>

          <div className='datesBasics'>
            <div className='contN'>
            <label htmlFor="text">Nombres</label>
              <input name='name' className='boxInf' type="text"  defaultValue='laura'/>
            </div>
            <div className='contN'>
              <label htmlFor="text">Apellidos</label>
              <input name='apellido'  className='boxInf' type="text" defaultValue='Vallejo Jaramillo'/>
            </div>
            <div className='contN'>
              <label htmlFor="email">Correo</label>
              <input name='email' className='boxInf' type="text"defaultValue='Vallejojaramillo@gmai.com' />
            </div>
          </div>
          <div className='contButtonSave'>
            <button className='buttons_global_StyleTatto'>Guardar</button>
          </div>
        </div>
      </div>
  )
}
