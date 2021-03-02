import React from 'react';

import Logo from 'assets/images/logo.svg';

import { Link } from 'react-router-dom';

import Button from 'elements/Button';


export default function Header(props) {
  return (
    <header className="site-header">
				<div className="container">
					<div className="site-header-inner">
						<div className="brand">
							<h1 className="m-0">
								<Link to="/">
                  
									<img
										src={Logo}
										alt="Cube"
										width="32"
										height="32"
                    />
                    </Link>
							</h1>
						</div>
						<button
							id="header-nav-toggle"
							className="header-nav-toggle"
							aria-controls="primary-menu"
							aria-expanded="false"
						>
							<span className="screen-reader">Menu</span>{" "}
							<span className="hamburger"
								><span class="hamburger-inner"></span
							></span>
						</button>
						<nav id="header-nav" className="header-nav">
							<div className="header-nav-inner">
								<ul
									className="list-reset text-xxs header-nav-right"
								>
									<li><Link to="#">Home</Link></li>
									<li><Link to="#">Featurest</Link></li>
									<li><Link to="#">Pricing</Link></li>
									<li><Link to="#">Showcase</Link></li>
								</ul>
								<ul className="list-reset header-nav-right">
									<li>
										<Button isPrimary isSmall isWideMobile>Sign Up</Button>
									</li>
								</ul>
							</div>
						</nav>
					</div>
				</div>
			</header>
  )
}
