import { type ChangeEventHandler } from "react";

type InputProps = {
    value: string;
    onChange: ChangeEventHandler<HTMLInputElement> | undefined;
    placeholder?: string;
    warningText?: string;
};

function Input(props: InputProps) {
    return (
        <>
            <input 
                type="text" 
                className="min-h-[42px] w-full outline outline-solid outline-slate-300 placeholder-slate-500 px-2.5 rounded-md" 
                value={props.value}
                onChange={props.onChange}
                placeholder={props.placeholder} 
                required
            />
            {props.warningText && (
                <span className="w-full min-h-[20px] bg-red-400 text-white rounded-md px-2 mt-[-13px]">{props.warningText}</span>
            )}
        </>
    )
}

export default Input