import React from 'react';
import { Button, TextField, Container, Typography } from '@mui/material';

interface CreateTaskProps {
  taskTitle: string;
  setTaskTitle: (title: string) => void;
  taskDescription: string;
  setTaskDescription: (description: string) => void;
  dueDate: string;
  setDueDate: (date: string) => void;
  addTask: () => void;
  
}

const CreateTaskComponent: React.FC<CreateTaskProps> = ({
  taskTitle,
  setTaskTitle,
  taskDescription,
  setTaskDescription,
  dueDate,
  setDueDate,
  addTask
}) => {
  return (
    <Container maxWidth="sm" sx={{ textAlign: "center", mt: 5 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Task List
      </Typography>
      <div>
        <TextField
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          label="Task Title"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ m: 2 }}
        />
        <TextField
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          label="Task Description"
          variant="outlined"
          fullWidth
          size="small"
          sx={{ m: 2 }} 
        />
        <TextField
          value={dueDate}
          onChange={(e) => setDueDate(e.target.value)}
          type="date"
          variant="outlined"
          fullWidth
          sx={{m: 2}}
          size="small"
        />
        <Button variant="contained" onClick={addTask} color="primary">
          Add Task
        </Button>
      </div>
    </Container>
  );
};

export default CreateTaskComponent;
