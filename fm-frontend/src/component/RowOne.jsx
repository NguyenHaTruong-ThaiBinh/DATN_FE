import React from 'react';
import { useSelector } from 'react-redux';

function RowOne() {
  const titleHeader = useSelector((state) => state.titleHeader);
  return (
    <>
      <div className="row">
        <div className="col-sm-12">
          <div className="page-title-box d-md-flex justify-content-md-between align-items-center">
            <h4 className="page-title">{titleHeader.title}</h4>
            <div className="">
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item">
                  <a href="/home">HaTruong</a>
                </li>
                <li className="breadcrumb-item active">{titleHeader.title}</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RowOne;
