import React from 'react'
import Zuri from "../../images/zuri_logo.png";
import Ingressive from "../../images/I4G.png";


const Footer = () => {
    return (
        <>
            <section id="footer" className="max-w-7xl flex lg:flex-row flex-col justify-between p-8 m-auto border-t border-primary">
                <img className="lg:w-auto w-32" src={Zuri} alt="" />
                <p className="lg:mt-0 mt-4 lg:mb-0 mb-4">HNG Internship ( Frontend Task</p>
                <img className="lg:w-auto w-32" src={Ingressive} alt="" />
            </section>
        </>
    )
}

export default Footer