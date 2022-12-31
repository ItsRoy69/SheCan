import React from 'react'
import { ReactComponent as Newsbanner } from '../assets/news/Thenews.svg';
import "../styles/edtech.css"

const Newscard = ({ item }) => {
    return (
        <>

            <div className="newscard_mainparent">
                <div className="newscard_subparent">


                    {
                        item.urlToImage ? <img src={item.urlToImage} alt="" className='newscard_img' /> : <Newsbanner className='newscard_img' />
                    }


                    <div className="newscard_textdiv">
                        <p>{item.title}</p>

                        <div className="btn btn-warning">Read more</div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Newscard