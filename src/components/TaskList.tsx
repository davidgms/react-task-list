import { CheckIcon, ChevronRightIcon, CircleX } from "lucide-react";
import { useNavigate } from 'react-router-dom';
import type { Task } from "../App";

type TaskListProps = {
    currentTasks: Task[];
    completeTask: (id: string) => void;
    deleteTask: (id: string) => void;
    setSelectedTask: (task: Task) => void;
}

function TaskList(props: TaskListProps) {
    const navigate = useNavigate();
    return (
        <div className="bg-white p-4 flex flex-col md:w-[500px] w-full rounded-md shadow-lg">
            <ul className="space-y-3">
                {props.currentTasks.map((task) => (
                    <li 
                        key={task.id}
                        className={`flex z-10 relative justify-between items-center rounded-md bg-slate-500 p-3 overflow-hidden font-medium text-white capitalize cursor-pointer ${task.completed && 'line-through'}`}
                        onClick={() => props.completeTask(task.id)}
                        >
                        <div className="flex w-full">
                            {task.completed && <CheckIcon />}
                            <span className="overflow-hidden whitespace-nowrap text-ellipsis max-w-[80%]">{task.title}</span>
                        </div>

                        <div className="flex space-x-3 absolute z-50 right-[12px]">
                            <button 
                                name="Task details" 
                                title="Task details" 
                                type="button" 
                                className="bg-white text-slate-500 p-1 rounded-md cursor-pointer"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    props.setSelectedTask(task);
                                    navigate('/task-details');  
                                }}>
                                <ChevronRightIcon/>
                            </button>
                            <button
                                name="Delete task" 
                                title="Delete task" 
                                type="button" 
                                className="bg-white text-slate-500 p-1 rounded-md cursor-pointer"
                                onClick={() => props.deleteTask(task.id)}>
                                <CircleX/>
                            </button>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;