import {AiFillFacebook,AiFillInstagram,AiFillTwitterCircle} from "react-icons/ai"
import {FaTelegram} from "react-icons/fa"
import "./Footer.css"

function Footer(){
    return(
        <div className="footer">
            <div className="About">
                <h2>About Us</h2>
                <p>Jelly sweet roll jelly beans biscuit pie macaroon chocolate donut. Carrot cake caramels pie sweet apple pie tiramisu carrot cake. Marzipan marshmallow croissant tootsie roll lollipop. Cupcake lemon drops bear claw gummies. Jelly bear claw gummi bears lollipop cotton candy gummi bears chocolate bar cake cookie. Cupcake muffin danish muffin cookie gummies. Jelly beans tiramisu pudding. Toffee soufflé chocolate cake pastry brownie. Oat cake halvah sweet roll cotton candy croissant lollipop. Macaroon tiramisu chocolate bar candy candy carrot cake jelly sweet. Gummies croissant macaroon dessert. Chocolate cake dragée pie.
                </p>
            </div>
            <div className="Socials">
                <h2>Our Social Media</h2>
                <ul className="icons">
                    <li><AiFillFacebook className="icone" /></li>
                    <li><AiFillInstagram className="icone" /></li>
                    <li><AiFillTwitterCircle className="icone" /></li>
                    <li><FaTelegram className="icone" /></li>
                </ul>
            </div>           
        </div>
    )
}

export default Footer;