import React, { Fragment } from 'react'
import dateTimeInfo from "../../../utilities/DateTimeInfo";

import SocialLinks from "../SocialLinks/default.jsx"

import "./styles.scss"

class Header extends React.Component {
	render() {
		const date = new Date();
		const dateTime = dateTimeInfo(date);
		const logoUrl =
			"https://www.elespectador.com/profiles/ee/modules/features/ft_ee_menus/img/logo-elespectador.png";
		return (
			<Fragment>
				<div className="Header">
					<img src={logoUrl} className="Header-LogoEE" />
					<div className="Header-Date">{dateTime}</div>
					<div className="Header-SocialLinks"><SocialLinks/></div>
					<div className="Header-Buttons">
						<a className="Header-BtnSuscribe" href="">Suscribete</a>
						<a className="Header-BtnLogin" href="">Iniciar Sesión</a>
					</div>
				</div>
			</Fragment>
		)
	}
}

export default Header