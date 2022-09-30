import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  let linksCounter = 0;

  return <nav>
    {links.map(link => {
      return (
        <a key={linksCounter++} href={`#${link}`}>{link}</a>
      )
    })}

    {/* display an <a> tag for each link here */}</nav>;
}

export default NavBar;
