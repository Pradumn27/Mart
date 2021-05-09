import { data } from "./data"
import "./Category.css"
import { useHistory } from "react-router-dom";

function Category() {

    const history = useHistory();

    const routeChange = (path) => {
        let npath = "/category/"+path
        history.push(npath);
    }
    return (
        <>
            <div className="cat-div">
                <ul className="cat-ul">
                    {data.map((ele) => {
                        const { id, category, image } = ele;
                        return (
                            <li className="cat-li" key={id} onClick={()=>{routeChange(category)}}>
                                <img className="cat-img" src={image} alt={category}></img>
                                <h3 className="cat-h3">{category}</h3>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </>
    )
}

export default Category;