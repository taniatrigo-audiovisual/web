import React from "react";

export const Bio = (): JSX.Element => {
  return (
    <div className="flex w-full flex-wrap h-screen">
      <div className="flex flex-col md:flex-row w-full p-24 bg-pink-900 h-auto" />
      <div className="flex flex-col items-center justify-around md:flex-row w-full py-12 bg-green px-10 h-auto">
        <div className="text-lg text-white font-extrabold md:text-left pb-8 md:w-1/5 md:p-12 sm:w-full sm:text-center sm:pb-8 sm:ml-0">
          Bio
        </div>
        <div className="text-lg h-auto max-w-5xl text-white md:w-4/5 md:p-12 sm:w-full">
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
      <div className="flex flex-col md:flex-row w-full p-24 bg-blue-500 h-auto" />
    </div>
  );
};
