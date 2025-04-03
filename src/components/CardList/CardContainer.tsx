import { FC } from "react";
import { CardList } from "./CardList";
import { Header } from "./Header";

export type CardContainerProps = {};
export const CardContainer: FC<CardContainerProps> = () => {
	return (
		<div>
			<Header />
			<CardList />
		</div>
	);
};
