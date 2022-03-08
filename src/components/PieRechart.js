import React, { useContext } from 'react'
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from 'recharts';
import FormContext from '../context/FormContext';

function PieRechart() {
  const { form } = useContext(FormContext);
  const data = [
    { name: 'Str', value: form.str },
    { name: 'Mov', value: form.mov },
    { name: 'Int', value: form.int },
    { name: 'Aim', value: form.aim },
    { name: 'Eqp', value: form.eqp },
  ];
  const COLORS = ['#0088FE', '#00C49F', '#F76E11', '#6E17FA', '#58E427'];

    return(
      <ResponsiveContainer width={130} height={130}>
        <PieChart width={100} height={100}>
          <Pie
            data={data}
            cx={60}
            cy={60}
            innerRadius={45}
            outerRadius={60}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            // pieSize={15} 
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    )
  }

  export default PieRechart;
