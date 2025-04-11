
import { useState } from "react";
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  LineChart, 
  Line, 
  BarChart, 
  Bar, 
  PieChart, 
  Pie, 
  Cell, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from "recharts";
import { TrendingUp, PieChart as PieChartIcon, BarChart as BarChartIcon } from "lucide-react";

// Mock data for charts (Creativity)
const monthlyData = [
  { name: "Jan", income: 4000, expenses: 2400, savings: 1600 },
  { name: "Feb", income: 4500, expenses: 2000, savings: 2500 },
  { name: "Mar", income: 5000, expenses: 3200, savings: 1800 },
  { name: "Apr", income: 4800, expenses: 2800, savings: 2000 },
  { name: "May", income: 5200, expenses: 3100, savings: 2100 },
  { name: "Jun", income: 5500, expenses: 3300, savings: 2200 },
  { name: "Jul", income: 5700, expenses: 3500, savings: 2200 },
  { name: "Aug", income: 6000, expenses: 3200, savings: 2800 },
  { name: "Sep", income: 5800, expenses: 3400, savings: 2400 },
  { name: "Oct", income: 6200, expenses: 3600, savings: 2600 },
  { name: "Nov", income: 6500, expenses: 3800, savings: 2700 },
  { name: "Dec", income: 7000, expenses: 4200, savings: 2800 },
];

const expensesData = [
  { name: "Housing", value: 35 },
  { name: "Food", value: 20 },
  { name: "Transportation", value: 15 },
  { name: "Utilities", value: 10 },
  { name: "Entertainment", value: 8 },
  { name: "Healthcare", value: 7 },
  { name: "Other", value: 5 },
];

const investmentsData = [
  { name: "Stocks", value: 45 },
  { name: "Bonds", value: 25 },
  { name: "Real Estate", value: 20 },
  { name: "Cash", value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884d8', '#83a6ed', '#8dd1e1'];

export const FinancialChart = () => {
  const [chartType, setChartType] = useState<string>("income-expense");

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <TrendingUp className="h-5 w-5" />
          Financial Visualization
        </CardTitle>
        <CardDescription>
          Visualize your financial data to gain insights
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="income-expense" onValueChange={setChartType}>
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="income-expense" className="flex items-center gap-1">
              <TrendingUp className="h-4 w-4" />
              <span className="hidden sm:inline">Income & Expenses</span>
            </TabsTrigger>
            <TabsTrigger value="expense-breakdown" className="flex items-center gap-1">
              <PieChartIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Expense Breakdown</span>
            </TabsTrigger>
            <TabsTrigger value="investments" className="flex items-center gap-1">
              <BarChartIcon className="h-4 w-4" />
              <span className="hidden sm:inline">Investments</span>
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="income-expense" className="h-[350px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={monthlyData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip 
                  formatter={(value) => [`$${value}`, undefined]}
                  labelFormatter={(label) => `Month: ${label}`}
                />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="income" 
                  stroke="#22c55e" 
                  strokeWidth={2}
                  activeDot={{ r: 8 }} 
                />
                <Line 
                  type="monotone" 
                  dataKey="expenses" 
                  stroke="#ef4444" 
                  strokeWidth={2}
                />
                <Line 
                  type="monotone" 
                  dataKey="savings" 
                  stroke="#3b82f6" 
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="expense-breakdown" className="h-[350px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={expensesData}
                  cx="50%"
                  cy="50%"
                  labelLine={true}
                  label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}
                  outerRadius={120}
                  fill="#8884d8"
                  dataKey="value"
                >
                  {expensesData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip formatter={(value) => [`${value}%`, "Percentage"]} />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </TabsContent>
          
          <TabsContent value="investments" className="h-[350px] mt-4">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart
                data={investmentsData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={(value) => [`${value}%`, "Allocation"]} />
                <Legend />
                <Bar dataKey="value" fill="#8884d8">
                  {investmentsData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
};
