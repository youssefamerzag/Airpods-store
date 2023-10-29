import React from "react";
import css from './Products.css'
function Products(){
    return(
        <div>
            <p id="protitle1">Which AirPods are</p>
            <p id="protitle2">right for you?</p>
            <div id="cards">
                <div id="card">
                    <img id="cardimg1"></img>
                    <h1>AirPods</h1>
                    <p>2nd generation</p>
                    <p>$129</p>
                    <button id="buybutton">Buy</button>
                    <a href="#" id="learmore">Learn more</a>
                </div>
                <div id="card">
                    <img id="cardimg2"></img>
                    <h1>AirPods</h1>
                    <p>3rd generation</p>
                    <p>$169</p>
                    <button id="buybutton">Buy</button>
                    <a href="#" id="learmore">Learn more</a>
                </div>
                <div id="card">
                    <img id="cardimg3"></img>
                    <h1>AirPods</h1>
                    <p>2nd generation</p>
                    <p>$249</p>
                    <button id="buybutton">Buy</button>
                    <a href="#" id="learmore">Learn more</a>
                </div>
                <div id="card">
                    <img id="cardimg4"></img>
                    <h1>AirPods</h1>
                    <p>2nd generation</p>
                    <p>$549</p>
                    <button id="buybutton">Buy</button>
                    <a href="#" id="learmore">Learn more</a>
                </div>
            </div>
        </div>
    )
}export default Products;