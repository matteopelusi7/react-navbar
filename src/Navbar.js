import React, { useState, useEffect, useRef } from "react";
// import logo from "./logo.svg";
import { FaBars } from "react-icons/fa";
import { links, SocialBar } from "./links";

const Navbar = () => {

    const [show, setShow] = useState(false)

    const linkContainerRef = useRef(null)

    const linkListRef = useRef(null)

    useEffect(() => {
        const linkListHeight = linkListRef.current.getBoundingClientRect().height;
        if (show) {
          linkContainerRef.current.style.height = `${linkListHeight}px`;
        } else {
          linkContainerRef.current.style.height = "0px";
        }
    }, [show]);

    return (
        <nav className="nav">
            <header className="nav-header">
                <div className="nav-brand">
                    <img src="https://raw.githubusercontent.com/omardeangelis/react-tutorial-base/06973ab64aa310d7dd2ff8c8496dbc09ecc33aa7/navbar/inizio/src/logo.svg" className="nav-logo" alt="logo" />
                    <h4>DevBar</h4>
                </div>
                <button className="btn nav-toggler" onClick={() => setShow(!show)}>
                    <FaBars className="nav-icon" />
                </button>
            </header>
            <div className={`${show ? 'links-container show' : 'links-container'}`} ref={linkContainerRef}>
                <ul className="nav-links" ref={linkListRef}>
                    {links.map((el) => {
                        return (
                            <li key={el.id}>
                                <a href={el.url} alt={el.text}>
                                    {el.text}
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
            <div className="social-links">
                <SocialBar />
            </div>
        </nav>
    );
};

export default Navbar;