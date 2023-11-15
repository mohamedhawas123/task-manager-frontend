import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getAllTask, createTask, updateTask, deleteTask } from '../store/action/task';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';
import { State, TaskState, Task } from '../models/task';
import {
  Button,
  CircularProgress,
  Container,
  List,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import TaskComponent from '../components/taskComponent';
import CreateTaskComponent from '../components/createTaskComponent';

interface TaskScreenProps extends RouteComponentProps {}

const HomePage: React.FC<TaskScreenProps> = ({ location, history }) => {
  type DispatchType = ThunkDispatch<TaskState, unknown, AnyAction>;
  const dispatch = useDispatch<DispatchType>();

  const state = useSelector((state: State) => state.tasks);

  const tasks = state.tasks;
  const loading = state.loading;
  const error = state.error;
  const [taskTitle, setTaskTitle] = useState<string>('');
  const [dueDate, setDueDate] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const addTask = async () => {
    if (taskTitle.trim() !== '' && taskDescription.trim() !== '') {
      dispatch(createTask(taskTitle, taskDescription, new Date(dueDate)));
    }
  };

  const updateTaskComplete = async (id: number, isComplete: boolean) => {
    const updatedTask: Task = {
      id,
      title: taskTitle, 
      description: taskDescription,
      dueDate: new Date(dueDate),
      isComplete,
    };

    dispatch(updateTask(id, updatedTask));
  };

  const handledeleteTask = async (id: number) => {
    dispatch(deleteTask(id));
  };



  useEffect(() => {
    dispatch(getAllTask());
  }, [dispatch]);

  console.log(tasks)
  return (
    <>
      {loading && <CircularProgress />}
      {error && <h1>Error</h1>}

      <CreateTaskComponent
        taskTitle={taskTitle}
        setTaskTitle={setTaskTitle}
        taskDescription={taskDescription}
        setTaskDescription={setTaskDescription}
        dueDate={dueDate}
        setDueDate={setDueDate}
        addTask={addTask}
      />

      {tasks.length === 0 ? (
        <h1>No Tasks yet</h1>
      ) : (
        <List sx={{ mt: 4, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          {tasks.map((task) => (
            
            <TaskComponent
              key={task.id}
              task={task}
              onUpdateTaskComplete={updateTaskComplete}
              onDelete={handledeleteTask}
            />
          ))}
        </List>
      )}
    </>
  );
};

export default HomePage;
