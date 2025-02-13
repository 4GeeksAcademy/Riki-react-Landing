import React from "react";

const Footer = () => {
    return (
      <footer className="bg-dark text-light text-center py-3 m-0 mt-5">
        <div className="container">
          <p className="mb-1">© 2024 Mi Sitio Web. Todos los derechos reservados.</p>
          <div>
            <a href="#" className="text-light mx-2">Política de Privacidad</a> | 
            <a href="#" className="text-light mx-2">Términos y Condiciones</a>
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;