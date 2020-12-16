import React from "react";
import { Link } from "react-router-dom";
import "./Dashboard.css";

import Btn from "../form/Btn";
import AboutHuman from "./AboutHuman";
import AboutPet from "./AboutPet";
import Agendamentos from "./Agendamentos";

const storedUser = localStorage.getItem("loggedInUser");

const loggedInUser = JSON.parse(storedUser || '""');

function Dashboard() {

	return (
		<div className="dash-container">
			<div className="dashboard">
				<div className="sobre">
					<AboutHuman />
					<Link to={`/cadastro/edit/${loggedInUser.user._id}`}><Btn type="submit" color="laranja" label="Editar" /></Link>
					<Btn targetUrl="/cadastro" color="azul" label="Fazer cadastro" />
					<AboutPet />
					<Btn type="submit" color="laranja" label="Editar" />
					<Btn targetUrl="/novo-pet" color="azul" label="Adicionar Pet" />
				</div>
				<div className="agenda">
					<Agendamentos />
					<Btn targetUrl="/booking" color="azul" label="Agendar estadia" />
				</div>
			</div>
		</div>
	);

}

export default Dashboard;
