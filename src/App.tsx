import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./App.css";
import { CardContainer } from "./components/CardList/CardContainer";
import { SelectorMenu } from "./components/SelectorMenu";
import { Steps } from "./components/Steps";
import { CardListProvider } from "./hooks/useCardList";

function App() {
	const queryClient = new QueryClient();

	return (
		<QueryClientProvider client={queryClient}>
			<div className="App bg-[#faf7ea] pt-6 min-h-screen">
				<Steps />
				<CardListProvider>
					<CardContainer />
					<SelectorMenu />
				</CardListProvider>
			</div>
		</QueryClientProvider>
	);
}

export default App;
