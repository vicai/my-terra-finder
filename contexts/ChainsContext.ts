// import { createContext } from "react";
// import useSWR from "swr";
// import fetcher from "../utils/fetcher";

// interface ChainOption {
//     name: string;
//     chainID: string;
//     lcd: string;
//     mantle: string;
// }

// const { chainsData, chainsError } = useSWR('https://assets.terra.money/chains.json', fetcher)

// if (chainsError) return <div>Failed to load Chains...</div>

// export const [useChains, ChainsProvider] =
//     createContext<ChainOption[]>("Chains");