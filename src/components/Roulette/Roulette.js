import React, { useEffect, useContext } from 'react';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/arrow.png';
import { AppContext } from '../../App';
import $ from 'jquery';
import "./Roulette.css";

export default function Roulette() {
  const { products } = useContext(AppContext);

  function startRoulette() {
    $('.li-big').removeClass('li-big');
    $(this).prop('disabled', true);

    let x;

    setTimeout(() => {
      x = selfRandom(16, 36);

      if (x === 24 || x === 27 || x === 31) {
        x++;
      }

      let padding = 88;
      let itemW = 161;

      if ($(window).width() < 761) {
        padding = 84;
        itemW = 155;
      }

      let wrappW = $('.wraper').width() / 2;

      $('.window').animate(
        {
          right: x * itemW + padding - wrappW,
        },
        4000
      );

      setTimeout(() => {
        $('.list li.li-win').removeClass('li-win'); // Remove the class from any previous winner
        $('.list li:eq(' + x + ')').addClass('li-win');
        $('.card_num').val($('.li-win').attr('data-card'));
      }, 4300);
    }, 300);
  }


  function selfRandom(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    const windowSizes = {
      1900: 0,
      1430: 64,
      1170: 44,
      960: 522,
      695: 595,
    };

    function windowSize() {
      const windowW = $(window).width();

      let right = Object.keys(windowSizes)
        .sort((a, b) => b - a)
        .find((size) => windowW > size);

      right = right ? windowSizes[right] : 605;

      $('.window').animate(
        {
          right: right,
        },
        0
      );
    }

    $(window).on('load resize', windowSize);

    $(document).on('click', '.button', startRoulette);

    return () => {
      $(window).off('load resize', windowSize);
      $(document).off('click', '.button', startRoulette);
    };
  },);

  const output = products.map((product) => (
    <div key={product.id} className="Product">
      <NavLink to={'/products/' + product.slug}>
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
              <li data-card="5">{output[5]}</li>
              <li data-card="6">{output[6]}</li>
              <li data-card="7">{output[7]}</li>
              <li data-card="8">{output[8]}</li>
              <li data-card="9">{output[9]}</li>
              <li data-card="10">{output[10]}</li>
              <li data-card="11">{output[11]}</li>
              <li data-card="12">{output[12]}</li>
              <li data-card="13">{output[13]}</li>
              <li data-card="14">{output[14]}</li>
              <li data-card="15">{output[15]}</li>
              <li data-card="16">{output[16]}</li>
              <li data-card="17">{output[17]}</li>
              <li data-card="18">{output[18]}</li>
              <li data-card="19">{output[1]}</li>
              <li data-card="20">{output[2]}</li>
              <li data-card="21">{output[3]}</li>
              <li data-card="22">{output[4]}</li>
              <li data-card="23">{output[5]}</li>
              <li data-card="24">{output[6]}</li>
              <li data-card="25">{output[7]}</li>
              <li data-card="26">{output[8]}</li>
              <li data-card="27">{output[9]}</li>
              <li data-card="28">{output[10]}</li>
              <li data-card="29">{output[11]}</li>
              <li data-card="30">{output[12]}</li>
              <li data-card="31">{output[13]}</li>
              <li data-card="32">{output[14]}</li>
              <li data-card="33">{output[15]}</li>
              <li data-card="34">{output[16]}</li>
              <li data-card="35">{output[17]}</li>
              <li data-card="36">{output[18]}</li>
              <li data-card="37">{output[12]}</li>
              <li data-card="38">{output[13]}</li>
              <li data-card="39">{output[14]}</li>
              <li data-card="40">{output[15]}</li>
              <li data-card="41">{output[16]}</li>
              <li data-card="42">{output[17]}</li>
              <li data-card="43">{output[18]}</li>
              <li data-card="44">{output[12]}</li>
              <li data-card="45">{output[13]}</li>
              <li data-card="46">{output[14]}</li>
              <li data-card="47">{output[15]}</li>
              <li data-card="48">{output[16]}</li>
              <li data-card="49">{output[17]}</li>
              <li data-card="50">{output[18]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <button type="button" className="btn button" onClick={startRoulette}>
          <span>Get the game <br /> for $9.99</span>
        </button>
      </div>
    </div>
  );
}
