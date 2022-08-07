import React from 'react'


import { Home_CardsTattooists } from '.././Home_CardsTattooists/Home_CardsTattooists'
import ImgTattooistsOne from '../../../.././images/Tatuadores/tatuador1.png'
import ImgTattooistsTwo from '../../../.././images/Tatuadores/tatuador2.png'
import ImgTattooistsThree from '../../../.././images/Tatuadores/tatuador4.jpg'

import { ImgTemplate } from '../.././ImgTemplate/ImgTemplate'
import newsCards from '../../../../images/Icons/new.png'




export const Home_NewTattooists = () => {
    return (
        <section className='NewTattooists'>
            <div className='TitleTattooists'>
            <ImgTemplate classN= 'news_Img' srcImg ={newsCards}/>
                <h1>ARTISTAS</h1>
                <div className='separatorTwo'></div>
            </div>
            <div className='CardsTattooists'>
                <Home_CardsTattooists  ImgTattooists={ImgTattooistsOne}  NameTattooists='Dairon' SocialTattooists='DaironGranada'  />
                <Home_CardsTattooists  ImgTattooists={ImgTattooistsTwo}  NameTattooists='Lorem' SocialTattooists='Lorem ipsum dolor sit.'  />
                <Home_CardsTattooists  ImgTattooists={ImgTattooistsThree}  NameTattooists='Loris' SocialTattooists='Lorem ipsum dolor sit.'  />
            </div>
            <div className='SeeTattooists'><a className='buttons_global_StyleTatto' href="/tatuadores">VER MAS TATUADORES</a></div>
        </section>

    )
}
