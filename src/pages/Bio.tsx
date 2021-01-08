import React from "react";

export const Bio = (): JSX.Element => {
  return (
    <>
      <div className="flex flex-col md:flex-row w-full p-24 h-5/6 bg-pink-900" />
      <div className="flex flex-col md:flex-row w-full p-12 bg-green">
        <div className="text-lg text-white font-extrabold md:text-left pb-8 md:w-1/5 md:p-12 md:ml-8 sm:w-full sm:text-center sm:pb-8 sm:ml-0">
          Bio
        </div>
        <div className="text-lg h-auto text-white md:w-4/5 md:p-12 sm:w-full">
          <p>
            Soy{" "}
            <span className="font-extrabold">
              Diseñadora de Imagen y Sonido
            </span>
            , estudié en FADU-UBA, realicé de manera paralela cursos de
            capacitación técnica en el área de Dirección de fotografía,
            desarrollando experiencia como asistente de cámara, cámara y DF en
            cortometrajes y registros de eventos culturales (música, danza). Me
            interesa seguir desarrollado experiencia en ésta área, como así
            también adquirirla en gestión cultural y afines. Residiendo
            actualmente en el Alto Valle de Rio Negro.
          </p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row w-full p-24 h-5/6 bg-blue-500" />
    </>
  );
};
