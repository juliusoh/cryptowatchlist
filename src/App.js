import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CoinDetailScreen from './screens/CoinDetailScreen'
import CoinSummaryScreen from './screens/CoinSummaryScreen'
import Header from './components/Header'
import "./App.css"
import { WatchListContextProvider } from './context/WatchListContext'

const App = () => {
  return (
    <div className="container">
      <WatchListContextProvider>
      <BrowserRouter>
        <Header />
        <Route exact path="/" component={CoinSummaryScreen} />
        <Route path="/coins/:id" component={CoinDetailScreen} />
      </BrowserRouter>
      </WatchListContextProvider>
    </div>
  )
}

export default App
