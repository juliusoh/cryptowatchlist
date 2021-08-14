import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import CoinDetailScreen from './screens/CoinDetailScreen'
import CoinSummaryScreen from './screens/CoinSummaryScreen'
import Header from './components/Header'
import "./App.css"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Header />
        <Route exact path="/" component={CoinSummaryScreen} />
      </BrowserRouter>
    </div>
  )
}

export default App
