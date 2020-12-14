import React from "react";
import { Link } from "react-router-dom";
import "./Homepage.css";

import Navbar from "./Navbar";
import SignIn from "./SignIn";

import alceu from "../../images/alceu (2).jpeg";
import lummy from "../../images/lummy.jpeg";
import zoe from "../../images/zoe.jpeg";
import earl from "../../images/earl.jpeg";
import amora from "../../images/amora.jpeg";
import christoff from "../../images/cristoff.jpeg";
import buzz from "../../images/buzz.jpg";
import logo from "../../images/logo.png";
import missaoImg from "../../images/missaoImg.jpg";
import visaoImg from "../../images/visaoImg.jpg";
import valoresImg from "../../images/valoresImg.jpg";

function Homepage() {
  return (
    <div className="home">
      <Navbar />
      <div className="home-container">
        <img className="logo" src={logo} alt="logo" />
        <SignIn />
      </div>
      <div className="about">
        <h2>O hotel</h2>

        <p>
          Um lugar para deixar seu pet com toda tranquilidade e segurança.
          <br></br>
          Profissionais capacitados com anos de experiência em comportamento
          animal.
        </p>
      </div>
      <div className="mvv">
        <div className="dinossauro">
          <img src={missaoImg} alt="Missão" />
          <div className="text">
          <h3>Missão</h3>
          <p>Nosso propósito é ser um local seguro, feliz e saudável, que proporciona uma experiência com muita diversão, amor, carinho, dedicação e atenção para os pets. Amamos cada animalzinho como se fosse nosso!</p>      
          </div>          
        </div>
        <div className="dinossauro">
          <div className="text">
          <h3>Visão</h3>
          <p>Queremos ser referência e primeira lembrança e escolha de lugar para deixar o seu pet, através de um trabalho confiável e de excelência. Ser segunda casa e segunda família para o seu bichinho na sua ausência, com muita dedicação e amor.</p>       
          </div>
          <img src={visaoImg} alt="Visão" />
        </div>
        <div className="dinossauro">
          <img src={valoresImg} alt="Valores" />
          <div className="text">
          <h3>Valores</h3>
          <p>Comprometimento, respeito, credibilidade, ética, transparência, confiança, segurança, conforto, dedicação, cuidado, amor e carinho. Isso nos garante satisfação plena de todos os nossos clientes e hóspedes!</p> 
          </div> 
        </div>
      </div>           
      <div className="structure">
        <h2>Estrutura</h2>

        <div className="structure-imgs">
          <img
            src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-cachorros-e-gatos-1-768x432.jpg"
            alt=""
          />
          <img
            src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-para-chorros-gatos.png"
            alt=""
          />
          <img
            src="https://petshopcontrol.blob.core.windows.net/blog/blog/wp-content/uploads/hotel-cachorros-e-gatos.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="clients">
        <h2>Clientes VIP</h2>

        <div className="client-pets">
          <div className="client-pet">
            <img className="pet-img" src={amora} alt="amora" />
            <p>Amora</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={lummy} alt="lummy" />
            <p>Lummy</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={alceu} alt="alceu" />
            <p>Alceu</p>
          </div>
          <div className="client-pet">
            <img className="pet-img" src={buzz} alt="buzz" />
            <p>Buzz</p>
          </div>
        </div>
        <div className="client-pets">
          <div className="client-pet">
            <img className="pet-img" src={zoe} alt="zoe" />
            <p>Zoe</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={buzz} alt="buzz" />
            <p>Buzz</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={christoff} alt="christoff" />
            <p>Christoff</p>
          </div>

          <div className="client-pet">
            <img className="pet-img" src={earl} alt="earl" />
            <p>Earl</p>
          </div>
        </div>
      </div>
      <div className="footer">
        <footer>
          <p>
            Projeto desenvolvido para o bootcamp de Web Development da IRONHACK.
          </p>
          <div className="footer-links">
            <Link className="footer-link" to="/">
              Rodrigo Matos | GitHub
            </Link>
            <Link className="footer-link" to="/">
              Laura Ferraz | GitHub
            </Link>
            <Link className="footer-link" to="/">
              Thalía Berger | GitHub
            </Link>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default Homepage;
