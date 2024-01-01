import React from 'react';

const MiComponente = () => {
  return (
    <div>
      {/* Asegúrate de que el CSS de Bootstrap Icons esté importado en tu proyecto */}
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.18.0/font/bootstrap-icons.css"
        integrity="sha384-GLhlTQ8iK5i5q+OAe5/7kWu25QzABZlauL/MJLGdSFIlO2gPizoXu5CUEUMP5I2F5"
        crossOrigin="anonymous"
      />

      {/* Implementa el icono de la papelera */}
      <i className="bi bi-trash"></i>
    </div>
  );
};

export default MiComponente;
