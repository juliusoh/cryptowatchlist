import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CoinDetailScreen from './screens/CoinDetailScreen'
import CoinSummaryScreen from './screens/CoinSummaryScreen'
import Header from './components/Header'
import "./App.css"
import { WatchListContextProvider } from './context/WatchListContext'

const App = () => {
  return (
    <div>
      <WatchListContextProvider>
      <BrowserRouter>
      <Header />
        <Route exact path="/" component={CoinSummaryScreen} />
      </BrowserRouter>
      </WatchListContextProvider>
    </div>
  )
}

export default App
