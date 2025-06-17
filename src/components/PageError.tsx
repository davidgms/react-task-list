import { TriangleAlertIcon } from "lucide-react";
import { Link } from "react-router-dom";

function PageError() {
    return (
        <div className="flex flex-col items-center justify-center w-full h-[80%]">
            <TriangleAlertIcon size={100} color="#0092B8"/>
            <div className="bg-white p-7 pb-4 flex flex-col items-center justify-center md:w-[500px] w-full rounded-md shadow-lg mt-4">
                <p className="text-lg text-slate-600 mb-6 font-medium">Oops! Something went wrong!</p>
                <h1 className="text-4xl text-slate-900 mb-6 font-bold text-center">
                <p className="text-cyan-600">404</p> Not Found
                </h1>
                <p className="text-base text-slate-500 mb-2">Lets head back and try again:</p>
                <Link 
                    className="flex w-80 justify-center items-center text-base min-h-[48px] text-white bg-cyan-700 rounded-md font-semibold cursor-pointer"
                    to="/">
                    Back to home
                </Link>
            </div>
        </div>
    )
}

export default PageError;