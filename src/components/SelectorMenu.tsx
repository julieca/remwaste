import { styled } from "@mui/material";
import Button from "@mui/material/Button";
import { FC } from "react";
import "../App.css";
import { useCardList } from "../hooks/useCardList";
import { bgColor, textColor } from "../styles";

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

export type SelectorMenuProps = {};
export const SelectorMenu: FC<SelectorMenuProps> = () => {
	const { selectedData } = useCardList();

	if (!selectedData) return null;
	return (
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
	);
};
