import React from "react";
import Evelyn from "../images/evelyn.jpg";
import Github from "../images/github.png";
import Slack from "../images/slack.png";
import Zuri from "../images/zuri_logo.png";
import Ingressive from "../images/I4G.png";

import Button from "./Button";

const Homepage = () => {
  return (
    <div className="w-full relative">
      <div className="max-w-4xl m-auto">
        <div className="icon"></div>
      </div>
      <div className="flex flex-col items-center mt-">
        <img className="w-32 h-32 object-contain rounded-full" src={Evelyn} alt="My profile pics" />
        <h2 className="font-bold text-xl mt-5">Evelyn Ita</h2>
      </div>

      <div className="flex flex-col max-w-6xl m-auto mt-8 p-4">
        <Button className=" w-full text-lg text-center">
          <a href="https://twitter.com/EveIta_?t=DAKKnqVXaO08InuEsrwfRg&s=09" target="blank">
            Twitter Link
          </a>
        </Button>
        <Button id="btn_zuri" className=" w-full text-lg text-center">
          <a href="https://training.zuri.team/" target="blank">
            Zuri Team
          </a>
        </Button>
        <Button id="books" className=" w-full text-lg text-center">
          <a href="https://books.zuri.team/" target="blank">
            Zuri Books
          </a>
        </Button>
        <Button id="books_python" className=" w-full text-lg text-center">
          <a href="https://books.zuri.team/python-for-beginners?ref_id=eveita" target="blank">
            Python Books
          </a>
        </Button>
        <Button id="pitch" className=" w-full text-lg text-center">
          <a href="https://background.zuri/team/" target="blank">
            Background Check for Coders
          </a>
        </Button>
        <Button id="book_design" className=" w-full text-lg text-center">
          <a href="https://books.zuri.team/design-rules/" target="blank">
            Design Books
          </a>
        </Button>
      </div>

      <div className="flex justify-center mt-10 mb-20 gap-7">
        <a href="https://app.slack.com/client/T042F7V19Q8/C041JU70S5U/rimeto_profile/U0490F6JDU0" target="blank">
          <img src={Slack} alt="" />
        </a>
        <a href="https://github.com/yvehogan" target="blank">
          <img src={Github} alt="" />
        </a>
      </div>

      <footer className="max-w-7xl flex lg:flex-row flex-col justify-between p-8 m-auto border-t border-primary">
        <img className="lg:w-auto w-32" src={Zuri} alt="" />
        <p className="lg:mt-0 mt-4 lg:mb-0 mb-4">HNG Internship ( Frontend Task</p>
        <img className="lg:w-auto w-32" src={Ingressive} alt="" />
      </footer>
    </div>
  );
};

export default Homepage;
