import React from "react";
import css from './Header.css'
import max from './airpods_max_logo__bdgdixidcqcy_large.jpg'
import maximg from './airpods_max.png'

function Header(){
    return(
        <div>
            <div id="card1">
                <p id="airtitle">AirPods Pro</p>
                <p id="airgen">2nd generation</p>
                <p id="airprice">$249</p>
                <button id="buy">Buy</button><a id="learnmore" href="#">Learn more</a>
            </div>
            <div id="card2">
                <p id="airtitle2">AirPods</p>
                <p id="airgen2">3nd generation</p>
                <p id="airprice2">$169</p>
                <button id="buy2">Buy</button><a id="learnmore2" href="#">Learn more</a>
            </div>
            <div id="card3">
                <img id="maxtext" src={max} alt="airmax"></img>
                <img id="maximg" src={maximg} alt="airmax"></img>
                <p id="airprice3">$549</p>
                <button id="buy3">Buy</button><a id="learnmore3" href="#">Learn more</a>
            </div>
        </div>
    )
}export default Header;