import { useRef } from "react";

const Contact = () => {
  const firstNameRef = useRef(null);
  const lastNameRef = useRef(null);
  const emailRef = useRef(null);
  const messageRef = useRef(null);

  const handleSubmit = (e) => {
    alert("Message Sent");
    e.preventDefault();
    e.target.reset();
  };

  return (
    <div className="w-full max-w-4xl m-auto p-5">
      <section className="mt-16">
        <h1 className="text-3xl font-semibold mb-5"> Contact Me</h1>
        <p className="text-darkGrey text-xl mb-5">Hi there, contact me to ask me about anything you have in mind.</p>
      </section>

      <form onSubmit={handleSubmit}>
        <section className="flex lg:flex-row flex-col lg:gap-8">
          <label htmlFor="" className="label lg:w-1/2 w-full">
            First name
            <input type="text" ref={firstNameRef} id="first_name" placeholder="Enter your first name" required/>
          </label>
          <label htmlFor="" className="label lg:w-1/2 w-full">
            Last name
            <input type="text" ref={lastNameRef} name="" id="last_name" placeholder="Enter your last name" required />
          </label>
        </section>

        <section>
          <label className="label">
            Email
            <input type="email" ref={emailRef} id="email" placeholder="yourname@email.com" required />
          </label>
          <label className="label">
            Message
            <textarea name="" id="message" ref={messageRef} cols="30" rows="10" placeholder="Send me a message and i'll reply you as soon as possible..." required></textarea>
          </label>
        </section>

        <div className="my-5">
          <input type="checkbox"  id="" required />
          <label htmlFor="" className="text-darkGrey pl-3">
            You agree to providing your data to Evelyn who may contact you.
          </label>
        </div>
        
        <button type="submit" id="btn_submit" className="w-full bg-[#1570EF] text-white py-3 rounded-lg mb-24">
          Send message
        </button>
      </form>
    </div>
  );
};

export default Contact;
