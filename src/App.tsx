import { useState } from 'react'
import reactLogo from './assets/react.svg'
import dish from './assets/saveImg.jpg';
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
    {link: dish, title: 'Mettre la table'  },
    {link: dish, title: 'Mettre la table'  },
    {link: dish, title: 'Mettre la table'  }];
  return (
    <>
      <div className="card w-100" style={{display:'flex'}}>
        {images.map(it => <div className='bord'><img className='image' src={it.link}></img>
        <p>{it.title}</p></div>)}
      </div>
    
    </>
  )
}

export default App
