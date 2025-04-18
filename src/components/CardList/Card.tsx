import EnergySavingsLeaf from "@mui/icons-material/EnergySavingsLeaf";
import { Alert, Divider } from "@mui/material";
import CardMui from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import { FC } from "react";
import "../../App.css";
import { useCardList } from "../../hooks/useCardList";
import { textColor } from "../../styles";
import { SkipData } from "../../types/skipSize";

const alertStyle = {
	padding: "4px",
	"& .MuiAlert-icon": { marginRight: "8px", padding: "0" },
	"& .MuiAlert-message": { fontSize: "10px", padding: "0" },
	backgroundColor: "#fbded0",
};

export type CardProps = { skip: SkipData };
export const Card: FC<CardProps> = ({ skip }) => {
	const { selectedData, set, clear } = useCardList();
	const totalPrice =
		skip.price_before_vat + (skip.price_before_vat * skip.vat) / 100;

	const onSelected = (skip: SkipData) => {
		if (skip.id === selectedData?.id) {
			clear();
		} else {
			const total =
				totalPrice + (skip.transport_cost ?? 0) + (skip.per_tonne_cost ?? 0);
			set({ ...skip, total });
		}
	};

	return (
		<CardMui
			key={skip.id}
			onClick={() => onSelected(skip)}
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
			{skip.area && (
				<div className="absolute bg-white rounded-[10px] p-[5px] m-[10px] text-[10px]">
					{skip.area}
				</div>
			)}

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
					Price: &nbsp;
					<span className="font-light">£{totalPrice.toFixed(2)}</span>
				</p>
				{skip.transport_cost && skip.transport_cost > 0 && (
					<p className="text-sm font-extralight">
						Transport Cost: £{skip.transport_cost.toFixed(2)}
					</p>
				)}
				{skip.per_tonne_cost && skip.per_tonne_cost > 0 && (
					<p className="text-sm font-extralight">
						Cost per Tonne: £{skip.per_tonne_cost.toFixed(2)}
					</p>
				)}
				{!skip.allowed_on_road && (
					<Alert
						severity="error"
						sx={{
							...alertStyle,
							marginTop: "10px",
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
							...alertStyle,
							marginTop: "4px",
						}}
					>
						<span className="align-sub text-[#b0382c]">
							Heavy waste not permitted
						</span>
					</Alert>
				)}
			</CardContent>
		</CardMui>
	);
};
