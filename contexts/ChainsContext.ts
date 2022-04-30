import React from "react";

export const defaultChain = 'mainnet'

// make chain as global context, so we can access in both seach and detail pages
export const ChainsContext = React.createContext({
    chain: defaultChain,
    selectChain: (name: string) => { },
});
