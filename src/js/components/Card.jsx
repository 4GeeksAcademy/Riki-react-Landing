import React from "react";

const Card = () => {
    return (
          <div className="col">
            <div className="card h-100">
              <img src="https://placehold.co/600x400" className="card-img-top" alt="Imagen 1" />
              <div className="card-body">
                <h5 className="card-title">Card 1</h5>
                <p className="card-text">Descripción de la tarjeta 1.</p>
                <a href="#" className="btn btn-primary">Ver más</a>
              </div>
            </div>
          </div>
    );
  };
  
  export default Card;