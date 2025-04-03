"use client";

import { createContext, PropsWithChildren, useContext, useState } from "react";
import { SkipDataAccum } from "../Data";

type CardListContextProps = {
	selectedData: SkipDataAccum | undefined;
	set: (data: SkipDataAccum) => void;
	clear: () => void;
};

const CardListContext = createContext<CardListContextProps | undefined>(
	undefined
);

export const CardListProvider = ({ children }: PropsWithChildren) => {
	const [selectedData, setSelectedData] = useState<SkipDataAccum | undefined>();

	const set = (data: SkipDataAccum) => {
		setSelectedData(data);
	};

	const clear = () => {
		setSelectedData(undefined);
	};

	return (
		<CardListContext.Provider value={{ selectedData, set, clear }}>
			{children}
		</CardListContext.Provider>
	);
};

export const useCardList = (): CardListContextProps => {
	const context = useContext(CardListContext);
	if (!context) {
		throw new Error("useCardList must be used within a CardListProvider");
	}
	return context;
};
