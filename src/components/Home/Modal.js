import React from 'react';
import { motion } from 'framer-motion';
import fire from "../../Firebase/config"

const Modal = ({ setSelectedObj, selectedObj }) => {
  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedObj(null);
    }
  }

  const handleCart = (e)=>{
    e.preventDefault();
        fire.child('cart').push(
            selectedObj, err => {
                if (err) { 
                    console.log(err)
                }
            }
        )
  }

  const url = "https://" + selectedObj.baseImageUrl;

  return (
    <>
      {console.log(selectedObj)}
      <motion.div className="backdrop" onClick={handleClick}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div className="enclose">
          <motion.div className="motimg">
            <motion.img src={url} alt="enlarged pic"
              initial={{ y: "-100vh" }}
              animate={{ y: 0 }}
            />
          </motion.div>
          <motion.div
            initial={{ y: "-100vh" }}
            animate={{ y: 0 }}
            className="Details">
            <motion.h1>{selectedObj.name}</motion.h1>
            <motion.h2>Price: {selectedObj.current.text}
            </motion.h2>
            <motion.ul className="motionul">
            <motion.li className="sza">Sizes Available:</motion.li>
              {selectedObj.images.map((val) => {
                const { size } = val;
                return (
                  <motion.li className="motionli">{size}</motion.li>
                ) 
              })}
            </motion.ul>
            <motion.div className="motionbtns">
              <motion.button className="buy-btn" onClick={(e)=>handleCart(e)}>Add to Cart</motion.button>
              <motion.a href="/cart" className="buy-btn">Buy Now</motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default Modal;