import { FC, useEffect, useState } from "react";
import fetchData, { SkipData } from "../../Data";
import { Card } from "./Card";

import "../../App.css";

export type CardListProps = {};
export const CardList: FC<CardListProps> = () => {
	const [data, setData] = useState<SkipData[] | undefined>(undefined);

	useEffect(() => {
		const fetchDataAsync = async () => {
			const result = await fetchData();
			setData(result);
		};
		fetchDataAsync();
	}, []);

	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-6">
			{data?.map((skip, index) => (
				<Card key={index} skip={skip} />
			))}
		</div>
	);
};
