import React from "react";
import "./Saved.css"

const Saved = () => (
   <div className="row">
   <div className="col-sm-1"></div>
      <div className="col-sm-10">
        <br />
        <div className="card">

          <div className="card-header">
            <strong>
              <i className="fa fa-table"></i> Saved Articles</strong>
          </div>

          <div className="card-body" id="article-section">
          </div>
        </div>
      </div>
      <div className="col-sm-1"></div>
    </div>
);

export default Saved;