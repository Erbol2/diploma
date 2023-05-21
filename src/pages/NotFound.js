import error from "../assets/error.png"


export default function NotFound() {
  return (
    <div className="NotFound">
      <img src={error} alt="Not Found" width="60%" />
    </div>
  );
}