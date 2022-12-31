import React from 'react'
import "../styles/card.css"
import { ReactComponent as Newsbanner } from '../assets/news/Thenews.svg';

const Card = ({ item, type }) => {
    return (
        <>

            <div className="card_mainparent">
                <div className="card_subparent">


                    {
                        type === "news" && (item.urlToImage ? <img src={item.urlToImage} alt="" className='card_img' /> : <Newsbanner className='card_img' />)
                    }

                    {type === "courses" && <img src={item.img} alt="" className='card_img' />}


                    <div className="card_textdiv">

                        <div className={type === "news" ? 'card_textdivsub' : 'card_textdivsub2'} >
                            <p>{item.title}</p>
                            <p>{item.tagline}</p>
                        </div>



                        {type === "news" && <div className="btn btn-warning" onClick={() => {
                            window.open(item.url)
                        }} >Read more</div>}

                    </div>
                </div>
            </div>

        </>
    )
}

export default Card