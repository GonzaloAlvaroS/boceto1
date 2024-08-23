import React, { useEffect, useRef } from 'react';
import "./Servicio2.css";

const Servicio2 = () => {
  const refs = {
    linea1: useRef(null),
    linea2: useRef(null),
    linea3: useRef(null),
  };

  useEffect(() => {
    const handleScroll = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };

    const observer = new IntersectionObserver(handleScroll, { threshold: 0.1 });

    Object.values(refs).forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(refs).forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return (
    <div className='servicio2'>
      <div ref={refs.linea1} className='servicio2linea1'>
        <div className="servicio2texto1">
          <h1>To improve the mental health & overall well-being of all practice.</h1>
        </div>
      </div>
      <div ref={refs.linea2} className='servicio2linea2'>
        <div className="servicio2texto2">
          <h1>To improve the mental health & overall well-being of all practice.</h1>
        </div>
      </div>
      <div ref={refs.linea3} className='servicio2linea3'>
        <div className="servicio2texto3">
          <h1>To improve the mental health & overall well-being of all practice.</h1>
        </div>
      </div>
    </div>
  );
}

export default Servicio2;


