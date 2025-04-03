import CalendarToday from "@mui/icons-material/CalendarToday";
import Delete from "@mui/icons-material/Delete";
import EnergySavingsLeaf from "@mui/icons-material/EnergySavingsLeaf";
import LocalShipping from "@mui/icons-material/LocalShipping";
import LocationOn from "@mui/icons-material/LocationOn";
import Payment from "@mui/icons-material/Payment";
import Shield from "@mui/icons-material/Shield";

import { Alert, Divider, styled } from "@mui/material";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import "./App.css";
import fetchData, { SkipData, SkipDataAccum } from "./Data";
const NextPrevButton = styled(Button)({
	boxShadow: "none",
	textTransform: "none",
	fontSize: 16,
	padding: "6px 12px",
	backgroundColor: "white",
	border: "none",
	borderRadius: "10px",
	"&:focus": {
		boxShadow: "0 0 0 0.2rem rgba(0,123,255,.5)",
	},
	color: "#32533a",
});
const textColor = {
	darkGreen: "text-[#32533a]",
	green: "text-[#4c8f52]",
	lightGreen: "text-[#f9f6ea]",
};
const bgColor = {
	darkGreen: "bg-[#32533a]",
	green: "bg-[#4c8f52]",
};
const steps = [
	{ title: "Postcode", icon: <LocationOn className={textColor.darkGreen} /> },
	{ title: "Waste Type", icon: <Delete className={textColor.darkGreen} /> },
	{
		title: "Select Skip",
		icon: <LocalShipping className={textColor.darkGreen} />,
	},
	{ title: "Permit Check", icon: <Shield className={textColor.darkGreen} /> },
	{
		title: "Choose Date",
		icon: <CalendarToday className={textColor.darkGreen} />,
	},
	{ title: "Payment", icon: <Payment className={textColor.darkGreen} /> },
];
function App() {
	const [data, setData] = useState<SkipData[] | undefined>(undefined);
	const [selectedData, setSelectedData] = useState<SkipDataAccum | undefined>(
		undefined
	);

	useEffect(() => {
		const fetchDataAsync = async () => {
			const result = await fetchData();
			setData(result);
		};
		fetchDataAsync();
	}, []);

	return (
		<div className="App bg-[#faf7ea] pt-6">
			{/* <head> */}
			<title>Business Skip Hire</title>
			{/* </head> */}
			<nav>
				<Stepper
					activeStep={2}
					alternativeLabel
					className={textColor.darkGreen}
				>
					{steps.map((label, index) => (
						<Step
							key={index}
							className={textColor.darkGreen}
							sx={{
								"& .MuiStepIcon-root.Mui-completed": { color: "#32533a" },
								"& .MuiStepIcon-root.Mui-active": { color: "#4c8f52" },
							}}
						>
							<StepLabel>
								<div className="flex gap-1 m-auto w-fit flex-col sm:flex-row">
									<div className="text-xs">{label.icon}</div>
									<div className="text-sm text-center sm:text-left">
										{label.title}
									</div>
								</div>
							</StepLabel>
						</Step>
					))}
				</Stepper>
			</nav>
			<div className="text-center mt-4">
				<Typography variant="h4" color="#32533a" className="font-semibold">
					Choose Your Skip Size for Garden Waste
				</Typography>
				<p className="text-[#32533a] font-light">
					Select the skip size that best suits your needs
				</p>
			</div>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-6">
				{data?.map((skip, index) => {
					const totalPrice =
						skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;
					return (
						<Card
							key={skip.id}
							onClick={() => {
								if (skip.id === selectedData?.id) setSelectedData(undefined);
								else
									setSelectedData({
										...skip,
										total:
											totalPrice +
											(skip.transport_cost ?? 0) +
											(skip.per_tonne_cost ?? 0),
									});
							}}
							sx={{
								border:
									selectedData && selectedData?.id === skip.id
										? "2px solid #2E7D32"
										: "1px solid #ccc",
								backgroundColor: "#eef5dd",
								cursor: "pointer",
								transition: "all 0.3s",
								borderRadius: "12px",
								boxShadow: "none",
							}}
						>
							<CardMedia
								component="img"
								height="140"
								image="https://images.unsplash.com/photo-1590496793929-36417d3117de?q=80&w=800"
								alt={`${skip.size}`}
							/>
							<CardHeader
								title={
									<>
										<EnergySavingsLeaf className={textColor.darkGreen} />
										<span className="ml-1">{skip.size} Yard Skip</span>
									</>
								}
								sx={{ padding: "8px" }}
								className={`${textColor.darkGreen} p-0 pb-0 mb-0`}
							></CardHeader>
							<Divider className="w-[80%]" sx={{ margin: "auto" }} />
							<CardContent
								sx={{ padding: "8px 5% 8px 5%", textAlign: "left" }}
								className={`${textColor.darkGreen} leading-4`}
							>
								<p className="text-sm font-extralight">
									Hire Duration: {skip.hire_period_days} days
								</p>
								<p className="text-sm font-extralight">
									Total Price:{" "}
									<span className="font-light">£{totalPrice.toFixed(2)}</span>
								</p>
								{skip.transport_cost && skip.transport_cost > 0 && (
									<p className="text-sm font-extralight">
										Transport Cost: £{skip.transport_cost}
									</p>
								)}
								{skip.per_tonne_cost && skip.per_tonne_cost > 0 && (
									<p className="text-sm font-extralight">
										Cost per Tonne: £{skip.per_tonne_cost}
									</p>
								)}
								{!skip.allowed_on_road && (
									<Alert
										severity="error"
										sx={{
											padding: "4px",
											marginTop: "10px",
											"& .MuiAlert-icon": { marginRight: "8px", padding: "0" },
											"& .MuiAlert-message": { fontSize: "10px", padding: "0" },
											backgroundColor: "#fbded0",
										}}
									>
										<span className="align-sub text-[#b0382c]">
											Placement on roads not allowed
										</span>
									</Alert>
								)}
								{!skip.allows_heavy_waste && (
									<Alert
										severity="error"
										sx={{
											padding: "4px",
											marginTop: "4px",
											"& .MuiAlert-icon": { marginRight: "8px", padding: "0" },
											"& .MuiAlert-message": { fontSize: "10px", padding: "0" },
											backgroundColor: "#fbded0",
										}}
									>
										<span className="align-sub text-[#b0382c]">
											Heavy waste not permitted
										</span>
									</Alert>
								)}
							</CardContent>
						</Card>
					);
				})}
			</div>
			{selectedData ? (
				<div
					className={`sticky bottom-0 border-t border-[#2E7D32] p-4 ${bgColor.darkGreen} ${textColor.lightGreen}`}
				>
					<div className="flex justify-between mt-4">
						<NextPrevButton size="small" color="success" variant="outlined">
							Back
						</NextPrevButton>

						<div className="flex gap-2 items-center">
							<h2 className="inline">{selectedData.size} Yard Skip</h2> |
							<span>Hire period: {selectedData.hire_period_days} days</span> |
							<span>Price: £{selectedData.total}</span>
						</div>
						<NextPrevButton size="small" color="success">
							Continue
						</NextPrevButton>
					</div>
				</div>
			) : (
				""
			)}
		</div>
	);
}

export default App;
