import "./ContactList.css";
import pikachu from "../../assets/pikachu.png";
export default function ContactList() {
  return (
    <div className="ContactList">
      <div className="content">
        <p>
          Thank you for reaching out to us! We value your interest and would be delighted to assist you. Below, you will find our contact information:
          <br />
          <br />
          General Inquiries:
          For any general questions or inquiries, please feel free to reach out to our dedicated team. We are here to provide you with the information you need.
          <br />
          <br />
          Email: alymbekov2004@gmail.com
          <br />
          Phone: +996 (707)-707-707
          <br />
          <br />
          Social Media:
          Stay connected with us through our social media channels to receive updates, news, and engage with our community.
          <br />
          <br />
          <a href="/">
            <i className="fa-brands fa-instagram fa-2xl"></i>
          </a>
          <a href="/">
            <i className="fa-brands fa-github fa-2xl"></i>
          </a>
          <a href="/">
            <i class="fa-brands fa-linkedin fa-2xl"></i>
          </a>
          <br />
          <br />
          We appreciate your interest and will respond to your inquiries as promptly as possible. Thank you for choosing us as your trusted source.</p>
      </div>
      <div className="img-block">
        <img src={pikachu} alt="pikachuphone" />
      </div>
    </div>
  )
}