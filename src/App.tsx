import "./App.css";
import { CardContainer } from "./components/CardList/CardContainer";
import { SelectorMenu } from "./components/SelectorMenu";
import { Steps } from "./components/Steps";
import { CardListProvider } from "./hooks/useCardList";

function App() {
	return (
		<div className="App bg-[#faf7ea] pt-6">
			{/* <head> */}
			<title>Business Skip Hire</title>
			{/* </head> */}
			<Steps />
			<CardListProvider>
				<CardContainer />
				<SelectorMenu />
			</CardListProvider>
		</div>
	);
}

export default App;
