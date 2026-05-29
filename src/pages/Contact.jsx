export default function Contact() {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>

      <p>📞 Mobile: 8053440252</p>
      <p>📧 Email: rohillaaditya50@gmail.com</p>

      <form className="contact">
        <input type="text" placeholder="Your Name" />
        <input type="text" placeholder="Mobile Number" />
        <button type="submit">Send Inquiry</button>
      </form>
    </div>
  );
}