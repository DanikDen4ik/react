import React, { useState } from 'react';
import { TextField, Button, Box, List, ListItem, ListItemText, IconButton, Typography } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const TodoList = () => {
    const [tasks, setTasks] = useState([]);
    const [task, setTask] = useState('');

    const handleAddTask = () => {
        if (task.trim()) {
            setTasks([...tasks, task]);
            setTask('');
        }
    };

    const handleDeleteTask = (index) => {
        setTasks(tasks.filter((_, i) => i !== index));
    };

    return (
        <Box sx={{ width: '400px', margin: '20px auto', textAlign: 'center' }}>
            <Typography variant="h4" gutterBottom>
                Список дел
            </Typography>
            <Box sx={{ display: 'flex', gap: 1, marginBottom: 2 }}>
                <TextField
                    label="Новая задача"
                    variant="outlined"
                    value={task}
                    onChange={(e) => setTask(e.target.value)}
                    sx={{ flexGrow: 1 }}
                />
                <Button variant="contained" onClick={handleAddTask}>
                    Добавить
                </Button>
            </Box>
            <List>
                {tasks.map((task, index) => (
                    <ListItem
                        key={index}
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            padding: '10px',
                            border: '1px solid #ddd',
                            borderRadius: '5px',
                            marginBottom: '5px',
                        }}
                    >
                        <ListItemText primary={task} />
                        <IconButton onClick={() => handleDeleteTask(index)} edge="end">
                            <DeleteIcon color="error" />
                        </IconButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );
};

export default TodoList;
