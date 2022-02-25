import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Created By Manoj Kumar @ {year}</p>
    </footer>
  );
}

export default Footer;
