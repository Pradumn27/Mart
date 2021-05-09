import { GlobalContext, GlobalProvider } from "../../Context/GlobalState"
import { useContext, useState } from "react"
import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from 'react-icons/fa'
import fire from "../../Firebase/config"
import Modal from "./Modal"

const Product = () => {
    const { products } = useContext(GlobalContext);
    const [selectedObj, setSelectedObj] = useState(null);
    const [curren, setCurren] = useState(0);
    const handleCart = (e, index) => {
        e.preventDefault();
        fire.child('cart').push(
            products[index], err => {
                if (err) { 
                    console.log(err)
                }
            }
        )
    }
    const newLength = products.length;
    const nextSlide = () => {
        setCurren(curren === (newLength - 1) ? 0 : curren + 1)
    }
    const prevSlide = () => {
        setCurren(curren === 0 ? newLength - 1 : curren - 1)
    }
    return (
        <GlobalProvider>
            <section className="slider">
                <FaArrowAltCircleLeft className="left-arrow" onClick={prevSlide} />
                <FaArrowAltCircleRight className="right-arrow" onClick={nextSlide} />
                {products.map((prod, index) => {
                    const { baseImageUrl, current, name } = prod;
                    const url = "https://" + baseImageUrl;
                    return (
                        <div className={index === curren ? 'slide-active' : 'slide'} key={index} className="item">
                            {index === curren && (
                                <div className="box">
                                    <div className="slide-img">
                                        <img alt="3" src={url} />
                                        <div className="overlay">
                                            <a href="/cart"
                                                onClick={(e) => handleCart(e, index)}
                                                className="buy-btn">Add to Cart</a>
                                            <button className="buy-btn" onClick={() => setSelectedObj(prod)}>View</button>
                                        </div>
                                    </div>
                                    <div className="detail-box">
                                        <div className="type">
                                            <a href="#">{name}</a>
                                            <span>New Arrival</span>
                                        </div>
                                        <a href="#" className="price">{current.text}</a>
                                    </div>
                                </div>)
                            }
                        </div>
                    )
                })}
            </section>
            {selectedObj && <Modal selectedObj={selectedObj} setSelectedObj={setSelectedObj} />}
        </GlobalProvider>
    )
}

export default Product;