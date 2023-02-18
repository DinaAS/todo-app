import './App.css';
import Header from '../header';
import NewTaskForm from '../new-task-form';
import TaskList from '../task-list';
import Footer from '../footer';

function App() {
  const todos = [
    { taskName: 'Completed task', status: 'completed', view: 'view', id: 1 },
    { taskName: 'Editing task', status: 'editing', view: 'view', id: 2 },
    { taskName: 'Active task', status: 'created', view: 'view', id: 3 },
  ];

  const completed = todos.reduce((acc, item) => {
    if (item.status === 'completed') {
      acc++;
    }
    return acc;
  }, 0);

  return (
    <div className='todoapp'>
      <Header />
      <NewTaskForm />
      <section className='main'>
        <TaskList todos={todos} />
        <Footer completed={completed} />
      </section>
    </div>
  );
}

export default App;
