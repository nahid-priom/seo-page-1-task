import Card from "./components/Card";

function App() {
  return (
    <div className="flex">
      <Card title="Incomplete" color="bg-red-500" />
      <Card title="To Do" color="bg-blue-500" />
      <Card title="Doing" color="bg-yellow-500" />
      <Card title="Under Review" />
      <Card title="Completed" />
      <Card title="Over Date" />
    </div>
  );
}

export default App;
