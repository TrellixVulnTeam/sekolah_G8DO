import React from 'react';
import { Link } from 'react-router-dom';
import { AppSettings } from './../../config/app-settings.js';
import Countdown, { doubleDigit } from "react-downcount";

class ExtraComingSoon extends React.Component {
	static contextType = AppSettings;

	constructor(props) {
		super(props);
		this.endDate = Date.now() + 1000 * 60 * 60 * 240;
	}

	componentDidMount() {
		this.context.handleSetAppSidebarNone(true);
		this.context.handleSetAppHeaderNone(true);
		this.context.handleSetAppContentClass('p-0');
	}

	componentWillUnmount() {
		this.context.handleSetAppSidebarNone(false);
		this.context.handleSetAppHeaderNone(false);
		this.context.handleSetAppContentClass('');
	}
	
	render() {
		return (
			<div className="coming-soon">
				<div className="coming-soon-header">
					<div className="bg-cover"></div>
					<div className="brand">
						<span className="logo"></span> <b>Color</b> Admin
					</div>
					<div className="desc">
						Our website is almost there and it’s rebuilt from scratch! A lot of great new features <br />and improvements are coming.
					</div>
					<div className="timer">
						<div id="timer" className="is-countdown">
							<Countdown className="custom-counter" endDate={this.endDate}>
								{({ days, hrs, mins, secs, isCompleted }) => {
									return isCompleted	? 
									'Done'
										: 
									<React.Fragment>
										<span className="countdown-row countdown-show4">
											<span className="d-flex flex-grow-1">
												<span className="countdown-section">
													<span className="countdown-amount">{days > 0 && `${days}`}</span>
													<span className="countdown-period">Days</span>
												</span>
												<span className="countdown-section">
													<span className="countdown-amount">{hrs}</span>
													<span className="countdown-period">Hours</span>
												</span>
												<span className="countdown-section">
													<span className="countdown-amount">{doubleDigit(mins)}</span>
													<span className="countdown-period">Minutes</span>
												</span>
												<span className="countdown-section">
													<span className="countdown-amount">{doubleDigit(secs)}</span>
													<span className="countdown-period">Seconds</span>
												</span>
											</span>
										</span>
									</React.Fragment>
								}}
							</Countdown>
						</div>
					</div>
				</div>
				<div className="coming-soon-content">
					<div className="desc">
						We are launching a closed <b>beta</b> soon!<br /> Sign up to try it before others and be the first to know when we <b>launch</b>.
					</div>
					<div className="input-group input-group-lg mx-auto mb-2">
						<span className="input-group-text border-0  bg-gray-200"><i className="fa fa-envelope"></i></span>
						<input type="text" className="form-control fs-13px border-0 shadow-none ps-0 bg-gray-200" placeholder="Email Address" />
						<button type="button" className="btn fs-13px btn-inverse">Notify Me</button>
					</div>
					<p className="text-gray-500 mb-5">We don't spam. Your email address is secure with us.</p>
					<p>
						<span className="me-2">Follow us on</span>
						<Link to="/extra/coming-soon" className="mx-1 text-decoration-none text-inverse">
							<i className="fab fa-twitter fa-lg fa-fw text-info"></i> Twitter
						</Link> 
						<Link to="/extra/coming-soon" className="mx-1 text-decoration-none text-inverse">
							<i className="fab fa-facebook-square fa-lg fa-fw text-blue"></i> Facebook
						</Link>
					</p>
				</div>
			</div>
		)
	}
}

export default ExtraComingSoon;