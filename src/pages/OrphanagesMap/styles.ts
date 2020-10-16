import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;

  position: relative;
  display: flex;

  aside {
    width: 400px;
    background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);
    padding: 80px;

    display: flex;
    flex-direction: column;
    justify-content: space-between;

    h2 {
      font-size: 40px;
      font-weight: 800;
      line-height: 42px;
      margin-top: 64px;
    }

    p {
      line-height: 28px;
      margin-top: 42px;
    }

    footer {
      display: flex;
      flex-direction: column;

      line-height: 24px;
    }

  }

  .leaflet-container {
    z-index: 5;
  }

  .create-orphanate {
    position: absolute;
    right: 40px;
    bottom: 40px;
    z-index: 10;

    width: 64px;
    height: 64px;

    background-color: #15c3d6;
    border-radius: 20px;
    
    display: grid;
    place-items: center;
    transition: .2s;

    :hover {
      background-color: #17d6eb;
    }
  }

  


`;
