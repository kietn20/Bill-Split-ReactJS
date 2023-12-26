import { useState } from "react";
import "./styles/App.css";
import dayjs from "dayjs";
import localizedFormat from "dayjs/plugin/localizedFormat";

export default function App() {
	const [orders, setOrders] = useState([
		{
			quantity: 1,
			name: "Short rib",
			price: 0.0,
		},
	]);

	const [summary, setSummary] = useState({
		subTotal: 0,
		tax: 0,
		tip: 0,
		total: 0,
	});

	// const [mode, setMode] = useState("standard");

	const [party, setParty] = useState([
		{
			name: "Name 1",
			due: 0,
		},
		{
			name: "Name 2",
			due: 0,
		},
	]);

	const date = dayjs().format("MM/DD/YYYY");
	dayjs.extend(localizedFormat);

	function updateTotal() {
		let newTotal = 0;
		orders.forEach((element) => {
			newTotal += element.quantity * element.price;
		});
		console.log(newTotal);
		setSummary({
			...summary,
			subTotal: newTotal,
			total: newTotal + summary.tax + summary.tip,
		});
	}

	function handleChange(event, idx = 0) {
		console.log(event.target.name);
		if (event.target.name === "tax" || event.target.name === "tip") {
			let newSummary = summary;
			newSummary[event.target.name] = parseFloat(event.target.value);
			console.log(newSummary);
			setSummary(newSummary);
			console.log(summary);
		} else {
			let newOrders = [...orders];
			let newOrder = orders[idx];
			newOrder[event.target.name] =
				event.target.name === "name"
					? event.target.value
					: parseFloat(event.target.value);
			newOrders[idx] = newOrder;
			setOrders(newOrders);
			console.log(orders);
		}
		updateTotal();
	}

	function handleClick(event) {
		console.log(event.target);
		if (event.target.name === "add-order") {
			setOrders([
				...orders,
				{
					quantity: 1,
					name: "Name of item",
					price: 0,
				},
			]);
		} else if (event.target.name === "add-party") {
			setParty([
				...party,
				{
					name: `Name ${party.length + 1}`,
					due: 0,
				},
			]);
		}
	}

	return (
		<div className="wrapper">
			<div className="left-side">
				<div className="title">
					<form className="title_form">
						<input
							placeholder="BBQ Chicken"
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
				<br />
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
								disabled
								className="input-large"
								placeholder=""
								type="text"
							/>
							<br />
							<label htmlFor="">Guests:</label>
							<input
								className="input-small input-text-right"
								placeholder={party.length}
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
				<div className="orders">
					<form action="">
						{orders.map((order, idx) => (
							<div key={idx} className="order">
								<div className="left-side-order">
									<input
										name="quantity"
										placeholder={order.quantity}
										type="text"
										className="order-quantity input-small input_center"
										onChange={(event) =>
											handleChange(event, idx)
										}
									/>
									<input
										name="name"
										placeholder={order.name}
										type="text"
										className="order-name input-larger"
										onChange={(event) =>
											handleChange(event, idx)
										}
									/>
								</div>
								<input
									name="price"
									placeholder={order.price.toFixed(2)}
									type="text"
									className="order-price input-medium input-text-right"
									onChange={(event) =>
										handleChange(event, idx)
									}
								/>
							</div>
						))}
					</form>
					{orders.length < 14 ? (
						<button
							name="add-order"
							className="add-order"
							onClick={(event) => handleClick(event)}
						>
							+
						</button>
					) : (
						""
					)}
				</div>
				<footer>
					<h3>
						- - - - - - - - - - - - - - - - - - - - - - - - - - - -
						- - - - - - -
					</h3>
					<div className="summary">
						<form action="">
							<label htmlFor="" className="summary-label">
								Subtotal
							</label>
							<label htmlFor="">
								{summary.subTotal.toFixed(2)}
							</label>
						</form>
						<form action="">
							<label htmlFor="" className="summary-label">
								Tax
							</label>
							<input
								name="tax"
								placeholder={summary.tax.toFixed(2)}
								type="text"
								className="summary-input input-medium input-text-right"
								onChange={(event) => handleChange(event)}
							/>
						</form>
						<form action="">
							<label htmlFor="" className="summary-label">
								Tip
							</label>
							<input
								name="tip"
								placeholder={summary.tip.toFixed(2)}
								type="text"
								className="summary-input input-medium input-text-right"
								onChange={(event) => {
									handleChange(event);
								}}
							/>
						</form>
						<form action="">
							<label htmlFor="" className="summary-label">
								Total
							</label>
							<label htmlFor="">{summary.total.toFixed(2)}</label>
						</form>
					</div>
					<h3>Thank You!</h3>
					<br />
				</footer>
			</div>
			<div className="right-side">
				<h1 className="title">Bill Splitter</h1>
				<h3>
					Went out with your friends and have a bill to split? Modify
					the receipt and add your party to easily divide the costs.
					^_^
				</h3>
				{/* <div className="calculation-option">
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
				</div> */}

				<div className="party">
					{party.map((person, idx) => (
						<div className="person">
							<img
								src={`./cat${idx + 1}.png`}
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
									placeholder={
										"$ " +
										(summary.total / party.length).toFixed(
											2
										)
									}
									className="input-medium"
									type="text"
								/>
							</div>
						</div>
					))}
					{party.length < 12 ? (
						<button
							name="add-party"
							className="add-btn person"
							onClick={(event) => handleClick(event)}
						>
							+
						</button>
					) : (
						""
					)}
				</div>
			</div>
		</div>
	);
}
