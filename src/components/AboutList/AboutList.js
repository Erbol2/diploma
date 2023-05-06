import "./AboutList.css";
import pikachu from "../../assets/pikachu.png"

export default function AboutList() {
  return (
    <div className="AboutList">
      <div className="aboutContent">
        <h1>Game Store</h1>
        <p>
          Welcome to our premier online PC game store, the ultimate destination for all your gaming needs! Step into a world of limitless possibilities and immerse yourself in an unrivaled collection of digital adventures. Our store is designed to cater to gamers of all ages and preferences, offering a diverse selection of games that will satisfy every craving for excitement and entertainment.

          At our online PC game store, you'll find an extensive library featuring both classic and contemporary titles, spanning various genres such as action, adventure, role-playing, strategy, simulation, and more. Whether you're a fan of heart-pounding first-person shooters, captivating open-world epics, mind-bending puzzles, or heartwarming indie gems, we have something special in store for you.

          Browse through our intuitive and user-friendly interface to discover an ever-expanding universe of games. Explore featured releases, popular titles, and hidden gems that await your discovery. Our store ensures seamless navigation, allowing you to effortlessly find the games you desire. With detailed descriptions, screenshots, and user reviews, you can make informed decisions and select the perfect game to suit your preferences.
        </p>
      </div>
      <div className="aboutImg">
        <img src={pikachu} alt="pikachu" />
      </div>

    </div>
  )
}