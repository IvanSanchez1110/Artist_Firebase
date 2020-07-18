import React, { PureComponent } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const data = [
  {
    name: 'January', Streams: 1890, Revenue: 4800, amt: 2181,
  },
  {
    name: 'February', Streams: 2390, Revenue: 3800, amt: 2500,
  },
  {
    name: 'March', Streams: 3490, Revenue: 4300, amt: 2100,
  },
];

export default class AChart extends PureComponent {

  render() {
    return (
      <div>
        <h5>Your Secret Streams</h5>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Streams" stroke="#8884d8" fill="#8884d8" />
        </AreaChart>
        <h5 style={{marginTop:"3%"}}>Your Revenue ($0.01s USD)</h5>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 30, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="Revenue" stroke="#82ca9d" fill="#82ca9d" />
        </AreaChart>
      </div>
    );
  }
}
