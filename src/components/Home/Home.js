import { useState, useEffect, useContext } from "react"
import Loading from "./Loading"
import Category from "./Category"
// import Modal from "./Modal"
import "./Home.css"
import Nav from "../Navbar/Nav"
// import axios from "axios";
import Product from "./Product"
import {data} from "../../Data"
import { GlobalContext } from "../../Context/GlobalState"
import Footer from "../Footer/Footer"

function Home() {
    const { setProducts } = useContext(GlobalContext);
    const [isloading, setIsloading] = useState(true);
    // const options1 = {
    //     method: 'GET',
    //     url: 'https://asos2.p.rapidapi.com/products/v2/list',
    //     params: {
    //         offset: '0',
    //         categoryId: '4209',
    //         limit: '48',
    //         store: 'US',
    //         country: 'US',
    //         currency: 'USD',
    //         sort: 'freshness',
    //         lang: 'en-US',
    //         sizeSchema: 'US'
    //     },
    //     headers: {
    //         'x-rapidapi-key': 'f5ce74c9camshfa984651ee1cdb9p12227ejsn58d9e773f1a7',
    //         'x-rapidapi-host': 'asos2.p.rapidapi.com'
    //     }
    // };

    useEffect(() => {
        setProducts(data);
        setIsloading(false);
        // axios.request(options1).then(function (response) {
        //     // setProducts(response.data["products"]);
        //     // console.log(response.data)
        //     // setIsloading(false)
        // }).catch(function (error) {
        //     console.error(error);
        // });

    }, [])

    if (isloading) {
        return <Loading />
    }
    else {
        return (
            <>
                <Nav />
                <Category />
                <div className="page">
                    <div className="title">
                        <h1>
                            Latest Arrivals
                    </h1>
                    </div>
                    <Product />
                </div>
                <Footer />
            </>
        )
    }
}
export default Home;