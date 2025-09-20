import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, ResponsiveContainer, Legend } from 'recharts';

const data = [
  { subject: 'Desktop', A: 120, B: 110 },
  { subject: 'Mobile', A: 98, B: 130 },
  { subject: 'Tablet', A: 86, B: 130 },
  { subject: 'Smart TV', A: 99, B: 100 },
  { subject: 'Others', A: 65, B: 85 },
];

const RadarChartComponent = () => (
  <ResponsiveContainer width="100%" height="100%">
    <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
      <PolarGrid />
      <PolarAngleAxis dataKey="subject" />
      <PolarRadiusAxis angle={30} domain={[0, 150]} />
      <Radar name="This Month" dataKey="A" stroke="#3f51b5" fill="#3f51b5" fillOpacity={0.6} />
      <Radar name="Last Month" dataKey="B" stroke="#ff9800" fill="#ff9800" fillOpacity={0.6} />
      <Legend />
    </RadarChart>
  </ResponsiveContainer>
);

export default RadarChartComponent;