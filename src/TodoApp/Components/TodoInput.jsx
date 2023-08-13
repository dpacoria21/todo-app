export const TodoInput = () => {
    return (
        <form className="flex items-center w-full h-14 pl-1 bg-blue-700/70 relative rounded-md">
            <input type="text" placeholder="Agrega una tarea..." className="outline-none border-0 h-12 w-full rounded-sm text-lg px-3 py-1 font-roboto font-medium"/>
            <button type="submit" className="group w-16 h-full flex justify-center items-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" fill="#FFFFFF" className="bi bi-plus transition-all duration-300 stroke-slate-50 group-hover:stroke-blue-400 group-hover:scale-110" viewBox="0 0 16 16">
                    <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
                </svg>
            </button>
        </form>
    )
}
