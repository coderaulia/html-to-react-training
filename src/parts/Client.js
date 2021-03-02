import React from 'react'

import Section from 'elements/Section';

import Fade from 'react-reveal/Fade';

import Client1 from 'assets/images/clients-01.svg';
import Client2 from 'assets/images/clients-02.svg';
import Client3 from 'assets/images/clients-03.svg';
import Client4 from 'assets/images/clients-04.svg';
import Client5 from 'assets/images/clients-05.svg';

export default function Client() {
  return (
    <Section className="clients">
      <Fade bottom delay={500}>
      <div className="container">
						<div
							className="clients-inner section-inner has-top-divider has-bottom-divider"
						>
							<ul className="list-reset">
								<li>
									<img
										src={Client1}
										alt="Clients 01"
									/>
								</li>
								<li>
									<img
										src={Client2}
										alt="Clients 02"
									/>
								</li>
								<li>
									<img
										src={Client3}
										alt="Clients 03"
									/>
								</li>
								<li>
									<img
										src={Client4}
										alt="Clients 04"
									/>
								</li>
								<li>
									<img
										src={Client5}
										alt="Clients 05"
									/>
								</li>
							</ul>
						</div>
					</div>
          </Fade>
    </Section>
  )
}
