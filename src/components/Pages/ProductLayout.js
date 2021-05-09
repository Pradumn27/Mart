import { data } from "../../Data"
import "./ProductLayout.css"
import { useState } from "react"
import Nav from "../Navbar/Nav"
import Modal from "../Home/Modal"
import fire from "../../Firebase/config"

function ProductLayout(catego) {
    const [selectedObj, setSelectedObj] = useState(null);
    const [searcht, setSearcht] = useState("");
    const result = data.filter(data => data.category == catego.catego);
    const handleClick = (e,val)=>{
        e.preventDefault();
        fire.child('cart').push(
            val, err => {
                if (err) { 
                    console.log(err)
                }
            }
        )
    }
    
    return (
        <>
            <Nav />
            <div className="products-main">
                <div className="product-heading">
                    <h1>{catego.catego}</h1>
                </div> 
                <div className="inp">
                <input type="text" placeholder="Search..." onChange={(e) => setSearcht(e.target.value)} />
                </div>
                <div className="products">
                    {result.filter((val) => {
                        if (searcht == "") { return (val)}
                        else if (val.name.toString().toLowerCase().includes(searcht.toLowerCase())) { return (val) }
                    }).map((val) => {
                        const { baseImageUrl, name, current ,id,category} = val;
                        const url = "https://" + baseImageUrl;
                        return (
                            <div className="pro">
                                <div className="pro-img">
                                    <img alt="3" src={url} />
                                    <div className="overlay">
                                        <button className="buy-btn"  onClick={(e)=>{handleClick(e,val)}}>Add to Cart</button>
                                        <button className="buy-btn"
                                         onClick={() => setSelectedObj(val)}
                                         >View</button>
                                    </div>
                                </div>
                                <div className="detail-box">
                                    <div className="type">
                                        <h2>{name}</h2>
                                        <h3>{current.text}</h3>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
                {selectedObj && <Modal selectedObj={selectedObj} setSelectedObj={setSelectedObj} />}
            </div>
        </>
    )
}

export default ProductLayout;