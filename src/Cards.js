import React from 'react';

const Cards = ({title, imgSrc,textVal, bttnName}) => (
  <div className="col-4">
            <div className="card" style={{width: "18rem"}}>
              <img
                src= {imgSrc}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">
                  {textVal}
                </p>
                <a href="#" className="btn btn-success">{bttnName}</a>
              </div>
            </div>
          </div>
)

export default Cards;