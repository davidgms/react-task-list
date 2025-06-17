import Input from "./Input";

type AddTaskProps = {
    title: string,
    description: string,
    setTitle: (value: string) => void,
    setDescription: (value: string) => void,
    submitTask: (title: string, description: string) => void,
    showTitleWarning: boolean,
    showDescriptionWarning: boolean,
}

function AddTask(props: AddTaskProps) {

    return (
        <>
            <h1 className='text-black md:text-[34px] text-[20px] font-semibold'>Task List</h1>
            <div className="bg-white p-4 flex flex-col md:w-[500px] w-full gap-4 rounded-md shadow-lg">
                <Input 
                    placeholder="Add task title"
                    value={props.title}
                    warningText={props.showTitleWarning ? "Please add a task title" : ""}
                    onChange={(event) => props.setTitle(event.target.value)}
                />
                <Input
                    placeholder="Add task description"
                    value={props.description}
                    warningText={props.showDescriptionWarning ? "Please add a task description" : ""}
                    onChange={(event) => props.setDescription(event.target.value)}
                />
                <button 
                    className="flex justify-center items-center text-base min-h-[48px] text-white bg-cyan-700 rounded-md font-semibold cursor-pointer"
                    onClick={() => props.submitTask(props.title, props.description)}
                    title="Add new task"
                    >
                    Add new task
                </button>
            </div>
        </>
    )
}

export default AddTask;