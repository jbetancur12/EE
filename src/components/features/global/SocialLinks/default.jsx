import React, { Fragment } from 'react'
import "./styles.scss"

const SocialLinks = () => {
	return (
		<Fragment>
			<ul className="SocialLinks">
				<li className="SocialLinks-Item">
					<a
						href="https://www.facebook.com/elespectadorcom"
						rel="nofollow"
						target="_blank"
					>
						<i className="fa fa-facebook SocialLinks-SocialRed"></i>
					</a>
				</li>
				<li className="SocialLinks-Item">
					<a
						href="https://twitter.com/elespectador"
						rel="nofollow"
						target="_blank"
					>
						<i className="fa fa-twitter SocialLinks-SocialRed"></i>
					</a>
				</li>
				<li className="SocialLinks-Item">
					<a
						href="https://www.youtube.com/user/Elespectadorcom?sub_confirmation=1 "
						rel="nofollow"
						target="_blank"
					>
						<i className="fa fa-youtube-play SocialLinks-SocialRed"></i>
					</a>
				</li>
				<li className="SocialLinks-Item">
					<a href="https://www.instagram.com/elespectador/">
						<i className="fa fa-instagram SocialLinks-SocialRed"></i>
					</a>
				</li>
			</ul>
		</Fragment>
	)
}
export default SocialLinks