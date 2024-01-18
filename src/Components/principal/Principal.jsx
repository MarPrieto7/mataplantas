import React from 'react'


function Principal() {
    return (
        <div>
        <section className="hero">
            <img src="../images/geranio9.jpg" alt="" />
            <div className="heroGeranium">
                
                <a className="gigante">GE<br />RA <br />NIUM</a>
                <p className="descripcionGeranio__hero">El género Geranium, comúnmente llamado geranio, agrupa 422 especies de plantas anuales, bienales y perennes frecuentemente utilizadas en jardinería por sus atractivas flores y su aroma característico</p>
            </div>
        </section>
        
        <div>
        <div className="barrRosa"></div>
        {/* zona secundaria sección fotos */}
        <section className="infoGeranio">
          <article className="descripcionGeranio">
            <p className="descripcionGeranio__p1">
              Según su uso paisajístico se las clasifica como herbáceas, respecto de arbustivas y arbóreas.
            </p>
            <div className="intercambio">
              <button id="geran" className="button" onClick={() => { /* Lógica para el botón SIGUIENTE */ }}>SIGUIENTE</button>
              <button id="geranio" className="button" onClick={() => { /* Lógica para el botón ANTERIOR */ }}>ANTERIOR</button>
            </div>
          </article>
          <picture id="cambioSlide" className="slide">
            <img src="images/geranio7.jpg" alt="geranio rojo" className="slideGeranio" />
            {/* <img src="images/geranios8.jpg" alt="geranio blanco" className="slideGeranio" /> */}
            <p className="descripcionGeranio__p2 slideGeranio">
              Muchas especies aquí agrupadas, poseen fitotoxinas, lo cual hace que otras herbáceas encuentren dificultades en penetrar plantaciones ya establecidas de una especie determinada de este género. Por ello se las reconoce como confiables tapizantes.
            </p>
            {/* <img src="images/geranios7.jpg" alt="pelargonio blanco" className="slideGeranio" /> */}
          </picture>
        </section>
      </div>
      </div>  
        

    );
}

export default Principal;