import React, { useState } from 'react'
import "../styles/medicalsupplies.css"
import medsbanner from "../assets/meds/medsbanner.png"
import Line from "../assets/meds/Line.png"
import medicines from '../data/medicines'

import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { fontSize } from '@mui/system';


const MedicalSupplies = () => {

    const [open, setOpen] = useState(false);
    const [walletAddress, setWalletAddress] = useState("");
    const [ethAmount, setEthAmount] = useState("");
    const [paymentDone, setPaymentDone] = useState(false);
  
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
      setPaymentDone(false);
    };
  
    const handlePay = async () => {    
      try {
        if(!window.ethereum) 
          throw new Error("No crypto wallet found. Please install it.");
  
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        const signer = provider.getSigner();
        ethers.utils.getAddress(walletAddress);
        const tx = await signer.sendTransaction({
          to: walletAddress,
          value: ethers.utils.parseEther(ethAmount)
        })
        console.log("Payment done: " + JSON.stringify(tx));
        setPaymentDone(true);
      } catch(e) {
        console.log(e.message);      
      }    
    };

    return (
        <>

        {/* Dialog Box */}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Send ETH Payment</DialogTitle>
        <DialogContent>          
          { paymentDone == false && 
              <div className="payment-not-done">
                <DialogContentText>
                  Pay to the following wallet address
                </DialogContentText>          
                <TextField
                  autoFocus
                  // value={}
                  onChange={(e) => setWalletAddress(e.target.value)}
                  margin="dense"
                  id="address"
                  label="Wallet Address"
                  type="text"
                  fullWidth
                  variant="standard"
                />
                <TextField
                  autoFocus
                  onChange={(e) => setEthAmount(e.target.value)}
                  margin="dense"
                  id="amount"
                  label="Amount"
                  type="amount"
                  fullWidth
                  variant="standard"
                />         
              </div>
          }
          { paymentDone && 
              <div className="payment-done">
                <DialogContentText>
                  The payment has been initiated
                </DialogContentText>          
                <Button onClick={handleClose}>
                  Ok
                </Button>
              </div>
          }          
        </DialogContent>
        <DialogActions>
          { paymentDone == false && <Button onClick={handleClose}>Cancel</Button> }
          { paymentDone == false && <Button onClick={handlePay}>Pay</Button> }
        </DialogActions>
      </Dialog>

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
                                    <button onClick={handleClickOpen} className="paybuttons">
                                    Buy
                                    </button>
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