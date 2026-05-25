import { Link, NavLink } from "react-router-dom";

export const MenuComponent = () => {
    const setActiveLink = ({ isActive }: { isActive: boolean }) =>
        isActive ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-500 transition-colors";

    return (
        <header className="bg-white border-b border-gray-100 sticky top-0 z-50 shadow-sm">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">

                <Link to="/" className="text-xl font-bold text-gray-900 tracking-tight">
                    Slice<span className="text-blue-600">Lab</span>
                </Link>

                <nav className="flex items-center gap-6 text-sm font-medium">
                    <NavLink to="/users" className={setActiveLink}>Users</NavLink>
                    <NavLink to="/posts" className={setActiveLink}>Posts</NavLink>
                    <NavLink to="/comments" className={setActiveLink}>Comments</NavLink>
                    <NavLink to="/complex" className={setActiveLink}>
                        <span className="px-2.5 py-1 bg-indigo-50 text-indigo-600 rounded-md border border-indigo-100 hover:bg-indigo-100 transition-colors">
                            Complex 🔮
                        </span>
                    </NavLink>
                </nav>

            </div>
        </header>
    );
};