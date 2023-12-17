function Contact({ updatePhone, updateEmail, updateWebsite }) {
  return (
    <div id="contact" className="mainbubble">
      <div id="contactlabel">Contact: </div>
      <div id="contactinputs">
        <div id="phoneemailinputs">
          <input
            type="text"
            id="phone"
            onChange={updatePhone}
            placeholder="Phone number"
          />
          <input
            type="text"
            id="email"
            onChange={updateEmail}
            placeholder="Email"
          />
        </div>
        <input
          type="text"
          id="website"
          onChange={updateWebsite}
          placeholder="Website url"
        />
      </div>
    </div>
  );
}

export default Contact;
