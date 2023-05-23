import { useContext } from "react";
import "./Roulette.css";
import { AppContext } from "../../App";
import { NavLink } from "react-router-dom";
import arrow from "../../assets/arrow.png";

export default function Roulette() {
  const { products } = useContext(AppContext);
  var list_block = document.querySelector('.list');
  var lists = document.querySelectorAll('.list > li');

  function onClickScroll() {
    var random = Math.floor(Math.random() * 9);
    list_block.style.left = -random * 100 + 'px';
  
    setTimeout(function () {
      random++;
      lists[random].classList.add("la-big");
      lists[random].style.color = 'white';
    }, 5000);
  }
  
  const output = products.map((product) => (
    <div key={product.id} className="Product">
      <NavLink to={"/products/" + product.slug}>
        <img src={product.picture} alt={product.name} />
      </NavLink>
    </div>
  ));

  return (
    <div className="Roulette">
      <div className="arrow">
        <img className="arrow-bl" src={arrow} alt="arrow" />
      </div>
      <div className="items">
        <div className="wraper">
          <div className="window">
            <ul className="list">
              <li data-card="1">{output[1]}</li>
              <li data-card="2">{output[2]}</li>
              <li data-card="3" className="li-big">{output[3]}</li>
              <li data-card="4">{output[4]}</li>
              <li data-card="5" >{output[5]}</li>
              <li data-card="6">{output[6]}</li>
              <li data-card="7">{output[7]}</li>
              <li data-card="8">{output[8]}</li>
              <li data-card="9">{output[9]}</li>
              <li data-card="10">{output[10]}</li>
              <li data-card="11">{output[11]}</li>
              <li data-card="12">{output[12]}</li>
              <li data-card="13">{output[13]}</li>
              <li data-card="14">{output[14]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <button type="button" className="btn button" onClick={onClickScroll} >
          <span>Get the game <br /> for $9.99</span>
        </button>
      </div>
    </div>
  );
}
