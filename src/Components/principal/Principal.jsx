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
            
          </article>
          
        </section>
      </div>
      </div>  
        

    );
}

export default Principal;

