const CircleLoader = () => {
    return (
        <div className="fixed bottom-0 top-0 left-0 right-0 flex justify-center items-center z-10">
            <div className="absolute h-full w-full bg-dark-dark opacity-30" />
            <div className="bg-slate-800 w-96 flex justify-center gap-3 rounded-lg p-2 items-center z-10 bg-dark-dark text-white-light">
                Waiting...
                <svg xmlns="http://www.w3.org/2000/svg" className="animate-spin text-white-light" width="16" height="16" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M3 12a9 9 0 0 0 9 9a9 9 0 0 0 9 -9a9 9 0 0 0 -9 -9"></path>
                    <path d="M17 12a5 5 0 1 0 -5 5"></path>
                </svg>
            </div>
        </div>
    );
}

export default CircleLoader;