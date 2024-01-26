import { decorator } from '@babel/types';
import React, {useState, useRef, useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

function Principal() {
  const navigate = useNavigate();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef(null);

  const images = [
    "images/aloe.jpg",
    "images/anemona.jpg",
    "images/cactus.png",
  ];

  useEffect(() => {
    const carousel = carouselRef.current;

    const showImage = (index) => {
      images.forEach((image, i) => {
        const imgElement = carousel.children[i];
        if (i === index) {
          imgElement.classList.add("active");
        } else {
          imgElement.classList.remove("active");
        }
      });
    };

    const nextImage = () => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
      showImage(currentIndex);
    };

    const intervalId = setInterval(nextImage, 3000);

    return () => clearInterval(intervalId);
  }, [currentIndex, images]);



  return (
    <div>
      <section className="hero">
        <img src="../images/geranio9.jpg" alt="geranio rojo" />
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
            <NavLink to="/Products">
            <div className="carousel-principal" ref={carouselRef}>
            {images.map((src, index) => (
              <img
                key={index}
                src={src}
                alt=""
                className={index === currentIndex ? "active" : ""}
              />
            ))}
          </div></NavLink>
          </article>
        </section>
      </div>
      <div>
        <div className="barrVerde"></div>
        <section className="descuento">
          <div className="porcentaje"><a>50%</a></div>
          <p className="textoPromo__porcentaje">Si traes el geranio que<a className="mataste"> <br />MATASTE!!</a></p>
          <button className='button' onClick={() => navigate('/Login')}>SOY CULPABLE</button>
        </section>
        <div className="barrVerdeBaja"><a className="textoBarra___medio">...y para que no te vuelva a pasar</a></div>
        <NavLink to="/Products" style={{ textDecoration: 'none' }}>
        <div className="botones__cruzada--mobile">
        
        <button className="button" >ABONO <img src="./images/abono.svg" alt="icono abono" /></button>
        <button className="button" >SUSTRATO<img src="./images/sustrato.svg" alt="icono abono" /></button>
        <button className="button" >RIEGO<img src="./images/riego.svg" alt="icono abono" /></button>
       
        </div>
        </NavLink>
      </div>
    </div>
  );
}

export default Principal;