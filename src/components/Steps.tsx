import CalendarToday from "@mui/icons-material/CalendarToday";
import Delete from "@mui/icons-material/Delete";
import LocalShipping from "@mui/icons-material/LocalShipping";
import LocationOn from "@mui/icons-material/LocationOn";
import Payment from "@mui/icons-material/Payment";
import Shield from "@mui/icons-material/Shield";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Stepper from "@mui/material/Stepper";
import { FC } from "react";
import { textColor } from "../styles";

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

export type StepsProps = {};
export const Steps: FC<StepsProps> = () => {
	return (
		<nav>
			<Stepper activeStep={2} alternativeLabel className={textColor.darkGreen}>
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
	);
};
