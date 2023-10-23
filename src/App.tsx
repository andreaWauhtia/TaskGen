import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dish from './assets/saveImg.jpg';
import deba from './assets/debarasser.png';
import fairelit from './assets/fairelit.jpg';
import aspi from './assets/aspirateur.jpg';
import dust from './assets/fairepoussiere.jpg';
import lingesale from './assets/lingesalepanier.jpg';
import chaussure from './assets/rangerchaussures.jpg';
import jouet from './assets/rangerjouet.jpg';
import livre from './assets/rangerlivre.jpg';
import habille from './assets/shabiller.jpg';
import apple from './assets/nourirlechien.webp';
import homework from './assets/homework.webp';
import netChaussure from './assets/chaussure.jpg';
import rmanteau from './assets/manteau.jpg';
import selaver from './assets/selaver.jpg';
import voiture from './assets/vidervoiture.jpg';
import vidercollation from './assets/vidercollation.jpg';
import prepcollation from './assets/preparercollation.jpg';
import rangerchambre from './assets/rangerchambre.jpg';
import lingepropre from './assets/rangerlingepropre.jpg';
import papiertoilette from './assets/papiertoilette.jpg';
import chaussettes from './assets/chaussettes.jpg';
import lavevaisselle from './assets/lavevaisselle.jpg';
import cc from './assets/pendrelinge.jpg';
import poubelle from './assets/viderpoubelle.jpg';
import repas from './assets/aiderepas.jpg';
import rangercourge from './assets/rangercourse.jpg';
import tirer from './assets/tirerlachasse.jpg';
import lampe from './assets/eteindrelampe.jpg';
import chausson from './assets/mettrechaussons.jpg';
import viteLogo from '/vite.svg'
import './App.scss'

export interface CardContent {
  link: string;
  title: string;
}
function App() {
  const images: CardContent[] = [
    { link: dish, title: 'Mettre la table' },
    { link: deba, title: 'Débarrasser la table' },
    { link: fairelit, title: 'Retirer ses draps' },
    { link: homework, title: 'Faire ses devoirs' },
    { link: netChaussure, title: 'Nettoyer ses chaussures' },
    { link: rmanteau, title: 'Ranger les manteaux' },
    { link: selaver, title: 'Se laver seule' },
    { link: voiture, title: 'Ranger la voiture' },
    { link: prepcollation, title: 'Préparer ses collations' },
    { link: vidercollation, title: 'Vider le sac de collation  ' },
    { link: jouet, title: 'Ranger ses jouets' },
    { link: rangerchambre, title: 'Ranger sa chambre' },
    { link: dust, title: 'Faire les poussières' },
    { link: livre, title: 'Ramasser ses livres' },
    { link: lingesale, title: 'Mettre son linge dans le panier' },
    { link: rangercourge, title: 'Ranger les courses' },
    { link: chaussure, title: 'Ranger ses chaussures' },
    { link: habille, title: 'S\'habiller' },
    { link: papiertoilette, title: 'Aller chercher du papier toilette' },
    { link: lingepropre, title: 'Ranger son linge propre' },
    { link: aspi, title: 'Passer l\'aspirateur' },
    { link: apple, title: 'Nourir Apple' },
    { link: chaussettes, title: 'Plier les chaussettes' },
    { link: lavevaisselle, title: 'Vider le lave vaisselle' },
    { link: poubelle, title: 'Descendre les poubelles' },
    { link: repas, title: 'Aider pour le repas' },
    { link: cc, title: 'Aider à pendre le linge' },
    { link: tirer, title: 'Tirer sa chasse' },
    { link: lampe, title: 'Éteindre la lumière' },
    { link: chausson, title: 'Mettre ses chaussons' },

  ];
  const renderedImages: JSX.Element[] = [];
  const renderedTitles: JSX.Element[] = [];

  const rows = Math.ceil(images.length / 4);
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < 4; j++) {
      const index = i * 4 + j;
      const it = images[index];
      if (it !== undefined) {
        renderedImages.push(
          <>
            <div className={`col-3 align-items-center bord`} key={index}>
              <img className='image'  src={it.link} alt={it.title} />
            </div>
          </>
        );
      }
      else {
        // renderedImages.push(
        //   <div className={`col-3 align-items-center bord`} key={index}></div>
        // );
      }
      //<p className='label'>{it.title}</p>
    }
    for (let j = 3; j >= 0; j--) {
      const index = i * 4 + j;
      const it = images[index];
      if (it !== undefined) {
        renderedTitles.push(
          <>
            <div className={`col-3 align-items-center bord`} key={index} style={{height:'95px'}}>
              <span className='label image'>{it.title}</span>
            </div>
          </>
        );
      }
      else {
        // renderedImages.push(
        //   <div className={`col-3 align-items-center bord`} key={index}></div>
        // );
      }

    }
  }
  return (
    <>
      <div className='container pagebreak' style={{ marginTop: '20px', marginLeft: '-5px' }}>
        <div className='col-11 '>
          <div className="row justify-content-center">
            {renderedImages}
          </div>
        </div>
      </div>
      <div className='container pagebreak' style={{ marginTop: '25px' }}>
        <div className='col-11 '>
          <div className="row justify-content-center">
            {renderedTitles}
          </div>
        </div>
      </div>
    </>
  )
}

export default App
