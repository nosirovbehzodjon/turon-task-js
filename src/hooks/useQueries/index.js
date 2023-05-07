import { useQuery } from "react-query";

useQuery;

const useQueries = (config) => {
    return useQuery(
        [config.main_key, config.url],
        async () =>
            await fetch(`${process.env.NEXT_PUBLIC_MAIN_URL}${config.url}`, {
                method: "GET",
                headers: {
                    "secret-token": process.env.NEXT_PUBLIC_MAIN_TOKEN,
                    "Content-Type": "application/json",
                },
            }).then((result) => result.json()),
        {
            keepPreviousData: true,
            refetchOnMount: false,
            refetchOnWindowFocus: false,
        }
    );
};

export default useQueries;
