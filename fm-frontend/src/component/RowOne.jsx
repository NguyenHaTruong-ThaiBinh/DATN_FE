import React from "react";

function RowOne({ title }) {
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
            <h4 className="page-title">{title}</h4>
            <div className="">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/">HaTruong</a>
                </li>
                <li className="breadcrumb-item active">{title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RowOne;
