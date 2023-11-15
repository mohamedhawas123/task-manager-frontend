import React, { useState } from "react";
import { Paper, Typography, Checkbox, Button } from "@mui/material";

interface TaskProps {
  task: {
    id: number; 
    title: string;
    description: string;
    dueDate: Date;
    isComplete: boolean;
  };
  onUpdateTaskComplete: (id: number, isComplete: boolean) => void; 
  onDelete:(id:number)=> void;
}

const TaskComponent: React.FC<TaskProps> = ({ task, onUpdateTaskComplete, onDelete }) => {
const formattedDueDate = new Date(task.dueDate).toLocaleDateString();

  const handleTaskCompleteChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onUpdateTaskComplete(task.id, event.target.checked);
  };


  const handleTaskDelete = (event: React.MouseEvent<HTMLButtonElement>) => {
    onDelete(task.id);
  };
  

  return (
    <Paper sx={{ p: 2, mb: 2, width: '850px', backgroundColor: "#F5F5F5", borderRadius: "10px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Checkbox
          checked={task.isComplete}
          onChange={handleTaskCompleteChange}
          color="primary"
        />
        <div style={{ flex: 2 }}>
          <Typography variant="h6" sx={{ mb: 1 }}>
            Task Title: {task.title}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            Task Description: {task.description}
          </Typography>
          <Typography variant="body2" sx={{ fontStyle: "italic" }}>
            Due: {formattedDueDate}
          </Typography>
        </div>
        {/* Delete button */}
        <Button 
          variant="outlined" 
          color="secondary" 
          onClick={handleTaskDelete}
        >
          Delete Task
        </Button>
      </div>
    </Paper>
  );
};

export default TaskComponent;
