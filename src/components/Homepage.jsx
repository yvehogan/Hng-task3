import React from "react";
import { Link } from 'react-router-dom'
import Evelyn from "../images/evelyn.jpg";
import Github from "../images/github.png";
import Slack from "../images/slack.png";


const Homepage = () => {
  return (
    <>
      <section id="profile__img" className="max-w-4xl m-auto">
        <div className="icon"></div>
        <header className="flex flex-col items-center mt-">
        <img className="w-32 h-32 object-contain rounded-full" src={Evelyn} alt="My profile pics" />
        <h2 id="slack" className="font-bold text-xl mt-5">Evelyn Ita</h2>
      </header>
      </section>

      <section id= "links" className="flex flex-col w-full max-w-6xl m-auto mt-3 p-4">
          <a id="twitter" className="buttons" href="https://twitter.com/EveIta_?t=DAKKnqVXaO08InuEsrwfRg&s=09" target="blank" rel="noopener noreferrer">
            Twitter Link
          </a>
        <a id="btn__zuri" className="buttons" href="https://training.zuri.team/" target="blank" rel="noopener noreferrer">
            Zuri Team
          </a>
        <a id="books" className="buttons" href="https://books.zuri.team/" target="blank" rel="noopener noreferrer">
            Zuri Books
          </a>
        <a id="book__python" className="buttons" href="https://books.zuri.team/python-for-beginners?ref_id=eveita" target="blank" rel="noopener noreferrer">
            Python Books
          </a>
        <a id="pitch" className="buttons" href="https://background.zuri/team/" target="blank" rel="noopener noreferrer">
            Background Check for Coders
          </a>
        <a id="book__design" className="buttons" href="https://books.zuri.team/design-rules/" target="blank" rel="noopener noreferrer">
            Design Books
          </a>
          <Link id="contact" className="buttons" to="/contact">Contact Me</Link>
      </section>

      <section id="social-links" className="flex justify-center mt-10 mb-20 gap-7">
        <a id="slack" className="hidden" href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U0490F6JDU0" target="blank" rel="noopener noreferrer">
          <img src={Slack} alt="" />
        </a>
        <a id="github" href="https://github.com/yvehogan" target="blank" rel="noopener noreferrer" >
          <img src={Github} alt="" />
        </a>
      </section>
    </>
  );
};

export default Homepage;
