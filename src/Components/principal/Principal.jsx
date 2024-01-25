// import React from 'react'


// function Principal() {
//     return (
//         <div>
//         <section className="hero">
//             <img src="../images/geranio9.jpg" alt="" />
//             <div className="heroGeranium">

//                 <a className="gigante">GE<br />RA <br />NIUM</a>
//                 <p className="descripcionGeranio__hero">El género Geranium, comúnmente llamado geranio, agrupa 422 especies de plantas anuales, bienales y perennes frecuentemente utilizadas en jardinería por sus atractivas flores y su aroma característico</p>
//             </div>
//         </section>

//         <div>
//         <div className="barrRosa"></div>
//         {/* zona secundaria sección fotos */}
//         <section className="infoGeranio">
//           <article className="descripcionGeranio">
//             <p className="descripcionGeranio__p1">
//               Según su uso paisajístico se las clasifica como herbáceas, respecto de arbustivas y arbóreas.
//             </p>

//           </article>

//         </section>
//       </div>
//       </div>  


//     );
// }

// export default Principal;

import React from 'react';
import { SliderComponent } from './Slider';
import { useNavigate } from 'react-router-dom';

function Principal() {
  const navigate = useNavigate();

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
     {/* zona secundaria de fotos */}
        <section className="infoGeranio">
          <article className="descripcionGeranio">
            <p className="descripcionGeranio__p1">
              Según su uso paisajístico se las clasifica como herbáceas, respecto de arbustivas y arbóreas.
            </p>
            <div> <SliderComponent /></div>
          </article>
        </section>
      </div>

      <div>
        <div className="barrVerde"></div>
        <section className="descuento">
          <div className="porcentaje"><a>50%</a></div>
          <p className="textoPromo__porcentaje">Si traes el geranio que<a className="mataste"> <br />MATASTE!!</a></p>
          <button onClick={() => navigate('/Login')}>SOY CULPABLE</button>
        </section>
        <div className="barrVerdeBaja"><a className="textoBarra___medio">...y para que no te vuelva a pasar</a></div>
        <div class="botones__cruzada--mobile">
          <button class="button" >ABONO <img src="./images/abono.svg" alt="icono abono" /></button>
          <button class="button" >SUSTRATO<img src="./images/sustrato.svg" alt="icono abono" /></button>
          <button class="button" >RIEGO<img src="./images/riego.svg" alt="icono abono" /></button>

        </div>
      </div>
    </div>

  );
}

export default Principal;