import React from "react";

function Links({ gitHub, linkedIn }) {
  return (
    <div>
      <h3>Links</h3>
      <a href={gitHub}>{gitHub}</a>
      <a href={linkedIn}>{linkedIn}</a>
    </div>
  );
}
export default Links;
