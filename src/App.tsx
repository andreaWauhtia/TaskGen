import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dish from './assets/saveImg.jpg';
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
import cc from './assets/aiderepas.jpg';
import poubelle from './assets/viderpoubelle.jpg';
import repas from './assets/aiderepas.jpg';
import rangercourge from './assets/rangercourse.jpg';
import viteLogo from '/vite.svg'
import './App.scss'

export interface CardContent{
  link: string;
  title: string;
}
function App() {
  const images: CardContent[] = [
    {link: dish, title: 'Mettre la table'  },
    {link: dish, title: 'Débarrasser la table'  },
    {link: fairelit, title: 'Retirer ses draps'  },
    {link: homework, title: 'Faire ses devoirs'  },
    {link: netChaussure, title: 'Nettoyer ses chaussures'  },
    {link: rmanteau, title: 'Ranger les manteaux'  },
    {link: selaver, title: 'Se laver seule'  },
    {link: voiture, title: 'Ranger la voiture'  },
    {link: prepcollation, title: 'Préparer ses collations'  },
    {link: vidercollation, title: 'Vider le sac de collation  '  },
    {link: jouet, title: 'Ranger ses jouets'  },
    {link: rangerchambre, title: 'Ranger sa chambre'  },
    {link: dust, title: 'Faire les poussières'  },
    {link: livre, title: 'Ramasser ses livres'  },
    {link: lingesale, title: 'Mettre son linge dans le panier'  },
    {link: rangercourge, title: 'Ranger les courses'  },
    {link: chaussure, title: 'Ranger ses chaussures'  },
    {link: habille, title: 's\'habiller'  },
    {link: papiertoilette, title: 'Aller chercher du papier toilette'  },
    {link: lingepropre, title: 'Ranger son linge propre'  },
    {link: aspi, title: 'Passer l\'aspirateur'  },
    {link: apple, title: 'Nourir Apple'  },
    {link: chaussettes, title: 'Plier les chaussettes'  },
    {link: lavevaisselle, title: 'Vider le lave vaisselle'  },
    {link: poubelle, title: 'Descendre les poubelles'  },
    {link: repas, title: 'Aider pour le repas'  },
    {link: cc, title: 'Aider à pendre le linge'  },
  ];
  const renderedImages: JSX.Element[] = [];

  images.forEach((it, index) => {
    if ((index+1 )%4 === 0){
      renderedImages.push(<><br/><div className='row separator'></div><br/></>)
    }
    renderedImages.push(
      <div className={`col-3 justify-content-center bord`} key={index}>
        <img className='image' src={it.link} alt={it.title} />
        <p className='label'>{it.title}</p>
      </div>
    );
  });
  return (
    <div className='container'>
      <div className='col-11'>
        <div className="row">
          {renderedImages}
        </div>
      </div>
    </div>
  )
}

export default App
