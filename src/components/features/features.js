import userEvent from "@testing-library/user-event";
import React from "react";

class Features extends React.Component {
  render() {
    return (
      <div className="container px-4 py-5" id="featured-3">
        <h2 className="pb-2 border-bottom">Columns with icons</h2>
        <div className="row g-4 py-5 row-cols-1 row-cols-lg-3">
          <div className="feature col">
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href={userEvent} className="icon-link">
              Call to action
            </a>
          </div>
          <div className="feature col">
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href={userEvent} className="icon-link">
              Call to action
            </a>
          </div>
          <div className="feature col">
            <h2>Featured title</h2>
            <p>Paragraph of text beneath the heading to explain the heading. We'll add onto it with another sentence and probably just keep going until we run out of words.</p>
            <a href={userEvent} className="icon-link">
              Call to action
            </a>
          </div>
        </div>
      </div>
      )
  }
}

export default Features;
