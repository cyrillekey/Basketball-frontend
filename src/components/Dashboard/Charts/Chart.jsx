
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

  
const Chart=({title,data,dataKey})=>{
      return(
        <div className="chart">
            <h3 className="chartTitle">
                {title}
            </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
        <LineChart
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <XAxis dataKey="name" stroke="#5550bd"/>
          <CartesianGrid strokeDasharray="6 6"/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey={dataKey} stroke="#8884d8" />
        </LineChart>
      </ResponsiveContainer>

        </div>
        );

}
export default Chart;