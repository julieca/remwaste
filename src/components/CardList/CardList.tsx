import { FC } from "react";
import { Card } from "./Card";

import "../../App.css";
import useGetSkipsByLocation from "../../hooks/fetch/skipSize";

export type CardListProps = {};
export const CardList: FC<CardListProps> = () => {
	const { data: skips, isLoading } = useGetSkipsByLocation("NR32", "Lowestoft");

	if (isLoading) {
		return <div className="text-center">Loading...</div>;
	}
	if (skips?.length === 0) {
		return <div className="text-center">No records found</div>;
	}
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4  p-6">
			{skips?.map((skip) => (
				<Card key={`skip-card-${skip.id}`} skip={skip} />
			))}
		</div>
	);
};
