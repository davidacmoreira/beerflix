import React from 'react';
import Menu from './components/Menu';
import initData from './data/init_data.json';
import BannerMain from './components/BannerMain';
import Carousel from './components/Carousel';
import Footer from './components/Footer';

function App() {
  return (
    <div style={{ background: "#141414" }}>
      <Menu />

      <BannerMain 
        //videoTitle={initData.categories[0].videos[0].title}
        url={initData.categories[0].videos[0].url}
        //videoDescription={""}
      />

      <Carousel 
        ignoreFirstVideo
        category={initData.categories[0]}
      />

      <Carousel 
        category={initData.categories[1]}
      />

      <Carousel 
        category={initData.categories[2]}
      />

      <Carousel 
        category={initData.categories[3]}
      />

      <Carousel 
        category={initData.categories[4]}
      />

      <Carousel 
        category={initData.categories[5]}
      />

      <Footer />

    </div>
  );
}

export default App;
