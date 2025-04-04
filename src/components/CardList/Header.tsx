import { FC } from "react";

import Typography from "@mui/material/Typography";
import "../../App.css";

export type HeaderProps = {};
export const Header: FC<HeaderProps> = () => {
	return (
		<div className="text-center mt-8">
			<Typography variant="h4" color="#32533a" className="font-semibold">
				Choose Your Skip Size for Garden Waste
			</Typography>
			<p className="text-[#32533a] font-light">
				Select the skip size that best suits your needs
			</p>
		</div>
	);
};
