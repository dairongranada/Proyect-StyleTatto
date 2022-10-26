import { React } from 'react'
import { UptInfoU } from '../../UptInfoU'
import { ChevronsLeft }  from '../../../../UI/ChevronsLeft/ChevronsLeft.jsx'



/* F I R E B A S E */


export const UserQuotes = () => {

  return (
    <div className='BodyProfileUser'>
      <section className="seccion-perfil-usuario">
        <UptInfoU />

        <div className="perfil-usuario-body">
          <div className="perfil-usuario-footer">

            <div className="BackgroundIcon">
              <div className="BackgroundIcon">
                  <div><ChevronsLeft LinkExotico ="/user/edit-profile"  classExotico= "ChevronsLeft" /></div>
                  <div><i class='bx bxs-user-detail' ></i></div>
                </div>
            </div>

            
            CONTENIDO

          </div>
        </div>
      </section>
    </div>
  )
}