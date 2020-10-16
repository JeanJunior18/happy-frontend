import styled from 'styled-components';
import asd from '../../images/landing.svg';

export const LandingContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

  display: flex;
  align-items: center;
  justify-content: center;

  .content-wrapper {
    position: relative; 
    // Para que os elementos de nome e cidade fiquem relativos a ele quando estiver absolutos

    width: 100%;
    max-width: 1100px;
    height: 100%;
    max-height: 580px;
    background: url(${asd}) no-repeat 80% center;
    background-size: contain;

    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

    main {
      max-width: 350px;
    }

    main h1 {
      font-size: 5rem;
      font-weight: 900;
      line-height: 70px;
    }

    main p {
      margin-top: 3rem;
      font-size: 24px;
      line-height: 34px;
    }

    .location {
      position: absolute;
      right: 0;
      top: 0;

      font-size: 24px;
      line-height: 34px;

      display: flex;
      flex-direction: column;
      text-align: right;
    }

    .enter-app {
      position: absolute;
      right: 0;
      bottom: 0;

      width: 80px;
      height: 80px;
      background: #ffd665;
      border-radius: 30px;

      display: flex;
      align-items: center;
      justify-content: center;

      cursor: pointer;
      transition: .2s;
    }

    .enter-app:hover {
      background: #96feff;
    }
  }
`;
