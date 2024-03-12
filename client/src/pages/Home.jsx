import { useNavigate } from "react-router-dom";
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
import Header from '../components/Header';
import french from '../assets/french-countryside.jpg';
import cherryBlossom from '../assets/cherry-blossom.jpg';
import library from '../assets/cherry-blossom.jpg';

import beachLady from '../assets/beach-lady.jpg';
import frenchWoman from '../assets/french-woman-1.jpg';
import frenchWoman2 from '../assets/french-woman-2.jpg';
import retroWoman from '../assets/futuristic-retro-woman.jpg';
import retroWoman2 from '../assets/futuristic-retro-woman-2.jpg';
import medievalWoman from '../assets/medieval-woman.jpg';
import bedouinWoman from '../assets/woman-bedouin.jpg';
import blueWoman from '../assets/woman-blue.jpg';

import koreanPicnic from '../assets/korean-picnic.jpg';
import seoulStreet from '../assets/seoul-streets.jpg';

const Home = () => {
  let navigate = useNavigate();
  const routeChange = (input) => {
    console.log(input);
    let path = `/${input}`;
    navigate(path);
  };

  return (
    <div className='parallax-group'>
      <Header></Header>
      <Parallax pages={6.1}>
        <ParallaxLayer speed={.1} sticky={{start: .3, end: 5}} factor={1}>
          <h1 className="title splash-title">BHIG Fashion</h1>
          <h2 className="title splash-title">SS23 SUMMER</h2>
        </ParallaxLayer>
        <ParallaxLayer speed={.1}  factor={1}
          style={{
            backgroundImage: `url(${beachLady})`,
            backgroundSize: 'cover',
          }} 
          onClick={() => routeChange("shop")}>
        </ParallaxLayer>
        <ParallaxLayer offset={.999} speed={.3} factor={1}
          style={{
            backgroundImage: `url(${frenchWoman})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}>Shop</span> French</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={1.1} speed={1} factor={1}
          style={{
            backgroundImage: `url(${frenchWoman2})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
        </ParallaxLayer>
        <ParallaxLayer offset={1.999} speed={.3} factor={1}
          style={{
            backgroundImage: `url(${retroWoman})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}>Shop</span> Modern</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2.2} speed={1} factor={1}
          style={{
            backgroundImage: `url(${retroWoman2})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"></h1>
        </ParallaxLayer>
        <ParallaxLayer offset={2.999} speed={.3} factor={1}
          style={{
            backgroundImage: `url(${medievalWoman})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}>Shop</span> Renaissance</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.2} speed={1} factor={1}
          style={{
            backgroundImage: `url(${medievalWoman})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}></span> </h1>
        </ParallaxLayer>
        <ParallaxLayer offset={3.999} speed={.3} factor={1}
          style={{
            backgroundImage: `url(${bedouinWoman})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}>Shop</span> Bedouin</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={4.2} speed={1} factor={1}
          style={{
            backgroundImage: `url(${bedouinWoman})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}></span></h1>
        </ParallaxLayer>
        <ParallaxLayer offset={4.999} speed={.3} factor={1}
          style={{
            backgroundImage: `url(${koreanPicnic})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}>Shop</span> Korean</h1>
        </ParallaxLayer>
        <ParallaxLayer offset={5.2} speed={1} factor={1}
          style={{
            backgroundImage: `url(${seoulStreet})`,
            backgroundSize: 'cover'
          }}
          onClick={() => routeChange("shop")}>
          <h1 className="title home-title"><span style={{color: 'pink'}}></span></h1>
        </ParallaxLayer>
      </Parallax>
    </div>
  )
}

export default Home;
