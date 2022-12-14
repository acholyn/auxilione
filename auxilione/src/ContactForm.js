import Card from "./Card";
import "./ContactForm.css";

export default function ContactForm() {
  return (
    <Card
      title={<small>Contact Us</small>}
      hasTitleDecoration={true}
      content={
        <>
          <span>
            We'd love to hear from you. Send a message using the form below
            we’ll get back to you as soon as we can.
          </span>
          <form className="contact-form">
            <div>
              <label htmlFor="Name">Name</label>
              <input type="text" name="Name" />
            </div>
            <div>
              <label htmlFor="Phone">Phone</label>
              <input type="tel" name="Phone" />
            </div>
            <div className="email-wrapper">
              <label htmlFor="Email">Email</label>
              <input type="email" name="Email" />
            </div>
            <div className="message-wrapper">
              <label htmlFor="Message">Message</label>
              <textarea type="text" name="Message" id="Message" />
            </div>
          </form>
        </>
      }
    />
  );
}
