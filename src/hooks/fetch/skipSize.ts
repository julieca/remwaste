import { useQuery } from "@tanstack/react-query";
import { SkipData } from "../../types/skipSize";

const BASE_URL = "https://app.wewantwaste.co.uk";
export async function getSkipsByLocation({
	postcode,
	area,
	signal,
}: {
	postcode: string;
	area: string;
	signal?: AbortSignal;
}) {
	const url = `${BASE_URL}/api/skips/by-location?postcode=${postcode}&area=${area}`;

	const response = await fetch(url, {
		method: "GET",
		headers: {
			"Content-Type": "application/json",
		},
		signal,
	});

	if (!response.ok) {
		throw new Error("Network response was not ok");
	}

	const data = await response.json();
	return data as SkipData[];
}

function useGetSkipsByLocation(postcode?: string, area?: string) {
	const enabled = !!postcode && !!area;

	const query = useQuery({
		queryKey: ["skips-by-location", postcode, area],
		queryFn: async ({ signal }) => {
			if (!postcode || !area) return [];

			const res = await getSkipsByLocation({ postcode, area, signal });
			return res;
		},
		enabled,
	});

	return query;
}

export default useGetSkipsByLocation;
