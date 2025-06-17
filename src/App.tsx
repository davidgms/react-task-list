import { useEffect, useState } from 'react';
import TaskList from './components/TaskList';
import AddTask from './components/AddTask';
import { Route, Routes } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';
import PageError from './components/PageError';

export type Task = {
	id: string;
    title: string;
    description: string;
    completed: boolean;
};

function App() {
	const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
	const [selectedTask, setSelectedTask] = useState<Task | null>(null);
    const [currentTasks, setCurrentTasks] = useState<Task[]>(() => {
        const stored = localStorage.getItem("currentTasks");
        return stored ? JSON.parse(stored) : [];
    });
    const [showTitleWarning, setShowTitleWarning] = useState(false);
    const [showDescriptionWarning, setShowDescriptionWarning] = useState(false);
    
    useEffect(() => {
        localStorage.setItem("currentTasks", JSON.stringify(currentTasks));
    }, [currentTasks])

    function submitTask(title: string, description: string) {
        let hasError = false;
        if (!title) {
            setShowTitleWarning(true);
            hasError = true;
        } else {
            setShowTitleWarning(false);
        }
        if (!description) {
            setShowDescriptionWarning(true);
            hasError = true;
        } else {
            setShowDescriptionWarning(false);
        }
        if (hasError) return;

        const newTask: Task = {
			id: crypto.randomUUID(),
            title,
            description,
            completed: false
        };
        
        if (newTask.title && newTask.description) {
            setCurrentTasks([...currentTasks, newTask]);
            setTitle("");
            setDescription("");
        }
    }
	
    function completeTask(id: string) {
        const updatedTasks = currentTasks.map((task) => {
            if (task.id == id) {
                return {...task, completed: !task.completed}
            }
            return task
        });

        setCurrentTasks(updatedTasks);
    }

    function deleteTask(id: string) {
        const updatedTasks = currentTasks.filter(task => task.id !== id);
        setCurrentTasks(updatedTasks);
        console.log(updatedTasks)
    }

    return (
        <div className='w-screen h-screen bg-slate-200 flex flex-col items-center p-6 gap-5'>
            <Routes>
                <Route
                    path="/"
                    element={
                        <>
                            <AddTask
                                title={title}
                                description={description}
                                setTitle={setTitle}
                                setDescription={setDescription}
                                submitTask={submitTask}
                                showTitleWarning={showTitleWarning}
                                showDescriptionWarning={showDescriptionWarning}
                            />
                            {currentTasks.length > 0 && (
                                <TaskList 
                                    currentTasks={currentTasks} 
                                    completeTask={completeTask} 
                                    deleteTask={deleteTask}
                                    setSelectedTask={setSelectedTask}
                                />
                            )}
                        </>
                    }
                />
                <Route 
                    path="/task-details" 
                    element={
                        selectedTask ? (
                            <TaskDetails
                                title={selectedTask.title} 
                                description={selectedTask.description}
                            />
                        ) : (
                            <div>Nenhuma tarefa selecionada.</div>
                        )
                    } 
                />
                <Route path="*" element={<PageError />} />
            </Routes>
        </div>
    )
}

export default App
