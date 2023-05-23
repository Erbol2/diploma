import { useEffect, useContext } from 'react';
import './Roulette.css';
import { AppContext } from '../../App';
import { NavLink } from 'react-router-dom';
import arrow from '../../assets/arrow.png';
import $ from 'jquery';

export default function Roulette() {
  const { products } = useContext(AppContext);

  useEffect(() => {
    function windowSize() {
      let windowW = $(window).width();
      if (windowW > 1700) {
        $('.window').animate({
          right: 0
        }, 0);
      } else if (windowW <= 1700 && windowW > 1330) {
        $('.window').animate({
          right: 184
        }, 0);
      } else if (windowW <= 1330 && windowW > 990) {
        $('.window').animate({
          right: 364
        }, 0);
      } else if (windowW <= 990 && windowW > 780) {
        $('.window').animate({
          right: 542
        }, 0);
      } else if (windowW <= 780 && windowW > 615) {
        $('.window').animate({
          right: 515
        }, 0);
      } else {
        $('.window').animate({
          right: 635
        }, 0);
      }
    }

    $(window).on('load resize', windowSize);

    for (let i = 0; i < 1; i++) {
      $('.list li').clone().appendTo('.list');
    }

    $('.button').click(function () {
      $('.li-big').removeClass('li-big');
      $(this).prop('disabled', true);

      let x;

      setTimeout(function () {
        function selfRandom(min, max) {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        x = selfRandom(16, 34);

        if (x === 24 || x === 27 || x === 31) {
          x++;
        }

        let padding = 108;
        let itemW = 181;

        if ($(window).width() < 781) {
          padding = 104;
          itemW = 175;
        }

        let wrappW = $('.wraper').width() / 2;

        $('.window').animate({
          right: x * itemW + padding - wrappW
        }, 4000);

        setTimeout(function () {
          $('.list li:eq(' + x + ')').addClass('li-big');
          $('.card_num').val($('.li-big').attr('data-card'));
        }, 4300);
      }, 300);
    });

    return () => {
      $(window).off('load resize', windowSize);
    };
  }, []);

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
              <li data-card="4">{output[15]}</li>
              <li data-card="5" >{output[16]}</li>
              <li data-card="6">{output[17]}</li>
              <li data-card="7">{output[18]}</li>
              <li data-card="8">{output[19]}</li>
              <li data-card="9">{output[20]}</li>
              <li data-card="10">{output[21]}</li>
              <li data-card="11">{output[22]}</li>
              <li data-card="12">{output[23]}</li>
              <li data-card="13">{output[24]}</li>
              <li data-card="14">{output[25]}</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="btn-wrap">
        <button type="button" className="btn button">
          <span>Get the game <br /> for $9.99</span>
        </button>
      </div>
    </div>
  );
}
