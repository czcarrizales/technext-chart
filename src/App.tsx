import { useEffect, useState } from 'react'
import './App.css'
import { Bar, CartesianGrid, ComposedChart, Legend, Line, Tooltip, XAxis, YAxis } from 'recharts'
import axios from 'axios'
import config from './config'
function App() {

  const [data, setData] = useState()
  const [loading, setLoading] = useState(true)



  useEffect(() => {
    axios.get(`${config.backendUrl}`)
      .then((res) => {
        setData(res.data)
        setLoading(false)
      })
  }, [])

  console.log(data)


  return (
    <>
      {
        loading
          ?
          <h2 className='text-animation'>Loading data...</h2>
          :
          <div>
            <h1>TechNext Bar/Line Chart</h1>
            <ComposedChart width={400} height={300} data={data}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="phase" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="entries" fill="#8884d8" />
              <Line type="monotone" dataKey="entries" stroke="black" />
            </ComposedChart>
          </div>

      }

    </>
  )
}

export default App
