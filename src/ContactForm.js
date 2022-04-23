import React, { useState } from "react";

const ContactForm = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <form onSubmit={handleSubmit}>
      <script src="https://unpkg.com/ionicons@5.2.3/dist/ionicons.js"></script>
     <div className="container">
    <div className="content">
      <div className="left-side">
        <div className="address details">
          <ion-icon name="location"></ion-icon>
          <div className="topic">Address</div>
          <div className="text-one">Bandra, Mumbai</div>
          
        </div>
        <div className="phone details">
          <ion-icon name="call"></ion-icon>
          <div className="topic">Phone</div>
          <div className="text-one">+91 9528670242</div>
          
        </div>
        <div className="email details">
          <ion-icon name="mail"></ion-icon>
          <div className="topic">Email</div>
          <div className="text-one">roommate@techmihirnaik.in</div>
         
        </div>
      </div>
      <div className="right-side">
        <div className="topic-text">CONTACT US</div>

        <form action="#">
          <div className="input-box">
            <input type="text" placeholder="Enter your name"/>
          </div>
          <div className="input-box">
            <input type="text" placeholder="Enter your email"/>
          </div>
          <div className="input-box message-box">
            <input type="text" placeholder="Message"/>
          </div>
          <div className="button">
            <input type="button" value="Send Now"/>
          </div>
        </form>
      </div>
    </div>
  </div>
    </form>
  );
};


export default ContactForm;

