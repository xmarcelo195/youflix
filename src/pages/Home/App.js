import React from 'react';
import Menu from '../../components/Menu'
import styled from 'styled-components'
import dadosIniciais from '../../data/dados_iniciais.json'
import BannerMain from '../../components/BannerMain'
import Carousel from '../../components/Carousel'
import Footer from '../../components/Footer'

const AppWrapper = styled.div`
  background: #141414;
`

function Home() {
  return (
    <AppWrapper>
      <Menu />

      <BannerMain
      videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
      url={dadosIniciais.categorias[0].videos[0].url}
      videoDescription={'Lauana Prado'}
      />

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[0]}
      />

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[1]}
      />
      
      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[2]}
      />

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[3]}
      />

      <Carousel 
      ignoreFirstVideo
      category={dadosIniciais.categorias[4]}
      />

      <Footer />
    </AppWrapper>
  );
}

export default Home;
