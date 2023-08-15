import Header from './Components/Header';
import Input from './Components/Input';
import ToDoItems from './Components/ToDoItems';
import './style.css';

const App = () => (
  <main className="todo-container">
    <Header />
    <Input />
    <ToDoItems />
  </main>
);

export default App;
