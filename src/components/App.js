//src/components/App.js

import React from 'react'
import PageNav from './PageNav'
/*
import Info from '../containers/Info'
    <Info />
*/
import Progress from '../containers/Progress'
import Views from '../containers/Views'
import '../App.css';



const App = () => (
  
  <div>
    <Progress />
    <PageNav />
    <Views />
  </div>
)

export default App
