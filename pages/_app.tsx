import '../styles/globals.css'
import type { AppProps } from 'next/app'
import React, { useState } from 'react';
import { ChainsContext, defaultChain } from '../contexts/ChainsContext'

function MyApp({ Component, pageProps }: AppProps) {
  const [currentChain, setCurrentChain] = useState(defaultChain)

  const selectChain = (name: string) => {
    setCurrentChain(name)
  }

  return (
    <ChainsContext.Provider value={{
      chain: currentChain,
      selectChain: selectChain
    }}>
      <Component {...pageProps} />
    </ChainsContext.Provider>
  );
}

export default MyApp
