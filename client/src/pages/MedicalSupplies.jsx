import React from 'react'
import "../styles/MedicalSupplies.css"
import medsbanner from "../assets/meds/medsbanner.png"
import Line from "../assets/meds/Line.png"
import medicines from '../data/medicines'


const MedicalSupplies = () => {
    return (
        <>

            <div className="container med_mainparent">
                <div className="">
                    <div className="med_subparent">


                        <div className="meds_heroheader">

                            <div className="meds_heroheader_textdiv">
                                <h1>Medical & Other Supplies</h1>
                                <p>All the supplies you need in one place delivered at your door steps</p>
                            </div>

                            <img src={medsbanner} alt="" />
                        </div>


                    </div>
                </div>
            </div>

            <div className="meds_trendingheader">
                <h2>Top Trending Products</h2>

                <div className="products_bar">
                    <p>Medicines</p>
                    <p>Menstruation Products</p>
                    <p>Hygiene Products</p>
                </div>

                <p className='howtoorder_header'>How to order medicines</p>

                <div className="products_orderheader">

                    <img src={Line} alt="" className='products_lineimg' />

                    <div className='products_stepcard'>
                        <p>1</p>
                        <p>Select the medicines you wish to buy and add them to cart</p>
                    </div>


                    <img src={Line} alt="" className='products_lineimg' />

                    <div className='products_stepcard'>
                        <p>2</p>
                        <p>Select the medicines you wish to buy and add them to cart</p>
                    </div>


                    <img src={Line} alt="" className='products_lineimg' />

                    <div className='products_stepcard'>
                        <p>3</p>
                        <p>Select the medicines you wish to buy and add them to cart</p>
                    </div>

                    <img src={Line} alt="" className='products_lineimg' />
                </div>


                <div className="searchbox_parent container">
                    <div className="input-group mb-3 searchbox">
                        <input type="text" className="form-control" placeholder="Type what medicine you need and hit the enter button ! " aria-label="Recipient's username" aria-describedby="button-addon2" />
                        <button className="btn btn-outline-secondary " type="button" id="button-addon2">Search</button>
                    </div>
                </div>


                <div className="medicinecards_parent container">
                    {medicines.map((medicine) => {
                        return (
                            <div className="medicinecard">
                                <img src={medicine.img
                                } alt="" />
                                <div className="medicinecard_text">
                                    <p>{medicine.name}</p>
                                    <p>$ {medicine.price}</p>
                                    <p>Available : {medicine.quantity} / 200</p>
                                </div>
                            </div>
                        )
                    })

                    }
                </div>
            </div>

        </>
    )
}

export default MedicalSupplies