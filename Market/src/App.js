import Expenses from "./components/Expenses/Expenses";

const App = () => {
  const expenses = [
    {
      id: "e1",
      title: "Washing Machine",
      amount: 324.12,
      date: new Date(2020, 7, 14),
    },
    { id: "e2", title: "TV", amount: 599.49, date: new Date(2019, 2, 12) },
    {
      id: "e3",
      title: "Dishwasher",
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: "e4",
      title: "Desk (Wooden)",
      amount: 70.99,
      date: new Date(2022, 5, 12),
    },
  ];

  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
