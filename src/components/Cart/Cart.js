import { useState, useEffect, useContext } from "react"
import { GlobalContext } from "../../Context/GlobalState"
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai"
import "./Cart.css"
import Loading from "../Home/Loading"
import Nav from "../Navbar/Nav"
import fire from "../../Firebase/config"

function Cart() {
    const { total,updateTotal,reduceTotal } = useContext(GlobalContext);
    const [load, setLoad] = useState(true);
    const [cart, setCart] = useState({})
    const ids = [];
    let t=0;
    useEffect(() => {
        fire.child('cart').on('value', (snapshot) => {
            if (snapshot.val() != null) {
                setCart({ ...snapshot.val() });
            }
            setLoad(false);
        });
    }, [])

    useEffect(() => {
        Object.keys(cart).map(id => {
            updateTotal(cart[id].current.value)})
    }, [cart])

    const handleClick = (e,id)=>{
        e.preventDefault();
        reduceTotal(cart[id].current.value)
        fire.child(`cart/${id}`).remove(
            err => {
                if (err) { 
                    console.log(err)
                }
            }
        )
                
    }

    if (load) {
        return (<Loading />)
    }
    else if(cart) {
        t=Object.keys(cart).length;
        return (
            <>
                <Nav />
                <div className="cart">
                    <div className="cart-list">
                        <div className="cart-items-container">
                            <div className="top">
                                <h4>My Cart
                         ({t})
                         </h4>
                            </div>
                            <div className="conta">
                                    {Object.keys(cart).map(id => {
                                        // updateTotal(cart[id].current.value);
                                        if (!(ids.includes(cart[id].name))) {
                                            ids.push(cart[id].name)
                                            const url = "https://" + cart[id].baseImageUrl;
                                            return (
                                                <div className="cart-elements">
                                                    <div className="cart-item" key={id}>
                                                        <div className="image">
                                                            <img src={url}></img>
                                                        </div>
                                                        <div className="desc">
                                                            <h2>{cart[id].name}</h2>
                                                            <p>Price:{cart[id].current.text}</p>
                                                        </div>
                                                    </div>
                                                    <div className="cart-buttons">
                                                        <div className="plus-minus">
                                                            <AiFillMinusCircle className="minus" /><h1 id="h1">1</h1><AiFillPlusCircle className="plus" />
                                                        </div>
                                                        <div className="remove">
                                                            <button onClick={(e)=>{handleClick(e,id)}} >
                                                                REMOVE
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        }
                                        else {
                                            ids.push(cart[id].title);
                                        }
                                    })
                                }
                            </div>
                        </div>
                    </div>
                    <div className="balance">
                        <div className="price-details">
                        <h1>Price Details</h1>
                        <h2>Price({t})items</h2>
                        <h2>Delivery Charges - FREE</h2>
                        <h2>Total Amount = {total}</h2>
                        </div>
                        <div className="pri">
                            <button className="pri-btn">Place Order</button>
                        </div>
                    </div>
                </div>
            </>
        )}
        else {
            return(
                <>
                <Nav />
                <h1>"Your Cart is Empty..."</h1>
                </>
                )
        }
    }

export default Cart;