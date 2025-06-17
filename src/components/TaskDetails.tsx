import { ChevronLeftIcon } from "lucide-react";
import { Link } from "react-router-dom";


type TaskDetailsProps = {
    title: string,
    description: string
}

function TaskDetails(props: TaskDetailsProps) {
    return (
        <>  
            <div className="flex relative justify-center items-center md:w-[500px] w-full">
                <Link to="/" className="absolute left-0" title="Go to home">
                    <ChevronLeftIcon size={40}/>
                </Link>
                <h1 className='text-black md:text-[34px] text-[20px] font-semibold'>Task Details</h1>
            </div>
            <div className="bg-white p-4 flex flex-col md:w-[500px] w-full rounded-md shadow-lg text-center">
                <h2 className="text-2xl font-medium capitalize mb-6 pb-2 border-b-1 border-b-slate-300">{props.title}</h2>
                <p className="text-base">{props.description}</p>
            </div>
        </>
    )
}

export default TaskDetails;