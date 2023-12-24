import { useState } from "react";
import "./styles/App.css";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

export default function App() {
	const [orders, setOrders] = useState([
		{
			quantity: 1,
			name: "Short rib",
			price: 14.99,
		},
		{
			quantity: 2,
			name: "Thinly sliced pork belly",
			price: 29.99,
		},
	]);

	const [party, setParty] = useState([
		{
			name: "person 1",
			due: 100.0,
		},
		{
			name: "person 2",
			due: 100.0,
		},
		{
			name: "person 1",
			due: 100.0,
		},
		{
			name: "person 2",
			due: 100.0,
		},
		{
			name: "person 1",
			due: 100.0,
		},
		{
			name: "person 2",
			due: 100.0,
		},
		{
			name: "person 1",
			due: 100.0,
		},
	]);

	// setOrders([
	// 	...orders,
	// 	{
	// 		quantity: 1,
	// 		name: "Short rib",
	// 		price: 14.99,
	// 	},
	// ]);

	const date = dayjs().format("MM/DD/YYYY");
	dayjs.extend(localizedFormat);

	return (
		<div className="wrapper">
			<div className="left-side">
				<div className="title">
					<form className="title_form">
						<input
							placeholder="Red Castle Korean BBQ"
							type="text"
							className="title_input input_center"
						/>
						<input
							placeholder="8303 W"
							type="text"
							className="title_address input_center"
						/>
						<input
							placeholder="Garden Grove Blvd"
							type="text"
							className="title_address input_center"
						/>
						<input
							placeholder="Garden Grove, CA 92844"
							type="text"
							className="title_address input_center"
						/>
					</form>
				</div>
				<div className="info">
					<div className="info_left">
						<form>
							<label htmlFor="">Order Number #: </label>
							<input
								className="input-large"
								placeholder="7008"
								type="text"
							/>
							<br />
							<label htmlFor="">Cashier: </label>
							<input
								className="input-large"
								placeholder="Bob"
								type="text"
							/>
							<br />
							<input
								className="input-large"
								placeholder={date}
								type="text"
							/>
						</form>
					</div>
					<div className="info_right">
						<form>
							<input
								className="input-large"
								placeholder=""
								type="text"
							/>
							<br />
							<label htmlFor="">Guests:</label>
							<input
								className="input-small input-text-right"
								placeholder="7"
								type="text"
							/>
							<br />
							<input
								className="input-large"
								placeholder={dayjs().format("LT")}
								type="text"
							/>
						</form>
					</div>
				</div>
				<h3>
					- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
					- - - - -
				</h3>
				<br />
				<div className="orders">
					<form action="">
						{orders.map((order, idx) => (
							<div key={idx} className="order">
								<div className="left-side-order">
									<input
										placeholder={order.quantity}
										type="text"
										className="order-quantity input-small input_center"
									/>
									<input
										placeholder={order.name}
										type="text"
										className="order-name input-larger"
									/>
								</div>
								<input
									placeholder={order.price}
									type="text"
									className="order-price input-medium input-text-right"
								/>
							</div>
						))}
					</form>
					<button className="add-button">+</button>
				</div>
				<br />
				<h3>
					- - - - - - - - - - - - - - - - - - - - - - - - - - - - - -
					- - - - -
				</h3>
				<br />
				<div className="summary">
					<form action="">
						<label htmlFor="" className="summary-label">
							Subtotal
						</label>
						<label htmlFor="">999.00</label>
					</form>
					<form action="">
						<label htmlFor="" className="summary-label">
							Tax
						</label>
						<input
							placeholder="30.56"
							type="text"
							className="summary-input input-medium input-text-right"
						/>
					</form>
					<form action="">
						<label htmlFor="" className="summary-label">
							Tip
						</label>
						<input
							placeholder="20.00"
							type="text"
							className="summary-input input-medium input-text-right"
						/>
					</form>
					<form action="">
						<label htmlFor="" className="summary-label">
							Total
						</label>
						<label htmlFor="">250.56</label>
					</form>
				</div>

				<footer>
					<br />
					<h3>
						- - - - - - - - - - - - - - - - - - - - - - - - - - - -
						- - - - - - -
					</h3>
					<h3>
						- - - - - - - - - - - - - - - - - - - - - - - - - - - -
						- - - - - - -
					</h3>
					<h1>Thank You!</h1>
				</footer>
			</div>
			<div className="right-side">
				<h1 className="title">Bill Splitter</h1>
				<h3>
					Went out with your friends and have a bill to split? Modify
					the receipt and add your party to easily divide the costs.
					^-^
				</h3>
				<div className="calculation-option">
					<div id="btn"></div>
					<button
						onClick={() => {
							let btn = document.getElementById("btn");
							btn.style.left = "0px";
						}}
						className="toggle-btn"
					>
						Standard
					</button>
					<button
						onClick={() => {
							let btn = document.getElementById("btn");
							btn.style.left = "250px";
						}}
						className="toggle-btn"
					>
						Customize
					</button>
				</div>
				<button className="btn-add"><br />+</button>

				<div className="party">
					{party.map((person, idx) => (
						<div className="person">
							<img
								src={`./src/assets/cat${idx + 1}.png`}
								alt={`cat${idx + 1}`}
								className="person-cat"
							/>
							<div className="person-summary">
								<input
									placeholder={person.name}
									className="input-large"
									type="text"
								/>
								<input
									placeholder={"$" + person.due.toFixed(2)}
									className="input-medium"
									type="text"
								/>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
