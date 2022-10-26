import React,{useState} from 'react'
import './SearchTattoo.scss'


export const PageTattooists = () => {
    const tattoo = [
        {name: 'lewis holguin', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826276/ImagesTattoo/tatuador1_rvghbe.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam'},
        {name: 'chris nuñez', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826273/ImagesTattoo/tatuador2_efzh1a.png', descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam'},
        {name: 'oliver peck', image:'https://res.cloudinary.com/dsoovcjav/image/upload/v1660826274/ImagesTattoo/tatuador3_jd7kt9.png',descripcion:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit nostrum eius laboriosam?'},
    ]

    const [searchTattoo, setsearchTattoo] = useState(tattoo)
    const filterTattoo = (event) =>{
        const data = event.target.value;
        const filter = tattoo.filter  (tattoo => tattoo.name.includes(data))
        setsearchTattoo(filter);
    }

  return(
    <div className='Content_Tattooists'>
      <div className='Content_TattooistsTitle'>
        <h1>ARTISTAS</h1>
        <p>Contamos con un equipo de artistas profesionales e integrales que se 
          desempeñan en las diferentes técnicas o estilos del tatuaje, entre ellos, 
          sombras, realismo, sombras, color, realismo color, oriental, tradicional, 
          neotradicional, libre, liners, black work, black and grey y cover up</p>
      </div>
      
      <div className='contSearch'>
        <div className="search-box">
          <input className="Buscador12" onChange={filterTattoo} type="text" placeholder='Buscar Artistas' />
          <a href="##" className="material-symbols-outlined">
              <i className="fas fa-search">
                <svg xmlns="http://www.w3.org/2000/svg" className="input-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </i>
          </a>
        </div>
      </div>
 
      <main className='main-contenido'>
        {searchTattoo.map((tattoo, index) => {
            return<div className='pather'>
            <div className="containerTattois">
                <div className="cardsTattooists">
                    <div className="face facel">
                        <div className="content">
                            <img src={tattoo.image} alt={index} />
                        </div>
                    </div>
                    <div className="face face2">
                        <div className="content">
                            <p className='nameTattooists' >{tattoo.name}</p>
                            <p className='descripTattooists'href="/">{tattoo.descripcion}</p>
                            <a href="/tatto/view/profile" className='btnA_menu'>Ver Mi Perfil</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
              })}
      </main>
    </div>
  )
}