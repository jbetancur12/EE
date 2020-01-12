import React, { Component, Fragment } from 'react'

import { sections } from './sections.js';

import "./styles.scss"

export class Navbar extends Component {
	state = { menuNoticias: false }
	render() {
		//console.log(Object.values(sections.Noticias))
		const Noticias = (
			<div className="SubMenuNoticias">
				<ul  className="SubMenuNoticias-Container">
					{Object.values(sections.Noticias).map(section => (
						<a href="" className="SubMenuNoticias-Container-items"key={section}>{section}</a>
					))}
				</ul>
			</div>
		)
		return (
			<Fragment>
				<div className="Navbar">
					<ul className="Navbar-Menu w-100 d-flex justify-content-around">
						<li className="Navbar-Item"
							onMouseEnter={() => this.setState({ menuNoticias: true })}
							onMouseLeave={() => this.setState({ menuNoticias: false })}>
							<a href="" className="Navbar-Item-link">
								<span>Noticias</span>
								<i className="fa fa-chevron-down"></i>
							</a>
							{this.state.menuNoticias && Noticias}
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">Opinión</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">Economía</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">
								<span>Deportes</span>
								<i className="fa fa-chevron-down"></i>
							</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">
								<span>Entretenimiento</span>
								<i className="fa fa-chevron-down"></i>
							</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">Cultura</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">
								<span>Cromos</span>
								<i className="fa fa-chevron-down"></i>
							</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">Tecnología</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">Blogs</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">
								<span>Colombia 2020</span>
								<i className="fa fa-chevron-down"></i>
							</a>
						</li>
						<li className="Navbar-Item">
							<a href="" className="Navbar-Item-link">
								<span>Especiales</span>
								<i className="fa fa-chevron-down"></i>
							</a>
						</li>
					</ul>
				</div>
			</Fragment>
		)
	}
}

export default Navbar
