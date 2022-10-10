import React, { useEffect, useState } from "react";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll",null);
    };
  }, []);

  return (
    //   Always use nav css, except when scrolling 100px down we want the black__navbar class
    <div className={`nav ${show && "nav__black"}`}>
      {/* big main logo */}
      <img
        className="nav__logo"
        src="https://scontent.fhkg12-1.fna.fbcdn.net/v/t1.6435-9/118468074_2614972712100351_4627506227124803822_n.png?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=UQTeNDCzIJ0AX-qokCd&_nc_ht=scontent.fhkg12-1.fna&oh=00_AT-HsupTYZUJMkAVNk_XhAoqaynuUjYpwhX4lydK27zQ3w&oe=6364891F"
        alt=""
      />

    </div>
  );
}

export default Nav;
