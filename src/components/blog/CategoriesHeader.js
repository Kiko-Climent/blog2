import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";

function CategoriesHeader({ categories }) { // Desestructurar correctamente las props
    
    const location = useLocation()
    const navigate = useNavigate()

    // SEARCH
    const [term, setTerm] = useState("");
    const handleChange = (e) => {
        setTerm(e.target.value);
    };
    const onSubmit = (e) => {
        e.preventDefault();
        setTimeout(() => navigate("/s=" + term), 0.2);
        setTerm("");
    };


    return (
        <div className="w-full bg-gray-100 py-8">
            <div className="grid grid-cols-12">
                <div className="col-span-10">
                    <div className="space x-8 px-6">
                        <div className="relative">
                            <div className="relative -mb-6 w-full overflow-x-auto pb-6">
                                <ul
                                    role="list"
                                    className="mx-4 inline-flex space-x-8 sm:mx-6"
                                >
                                    <Link
                                        to="/blog"
                                        className={`${location.pathname === '/blog' ? "text-indigo-button" : "text-gray-900"} inline-flex flex-col text-center lg:w-auto font-semibold`}
                                    >
                                        All
                                    </Link>
                                    {categories && categories.map(category => (
                                        <Link
                                            key={category.slug} // Añadir una key única
                                            to={`/category/${category.slug}`}
                                            className={`${location.pathname === `/category/${category.slug}` ? "text-indigo-button" : "text-gray-900"} inline-flex flex-col text-center lg:w-auto font-semibold`}
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <form onSubmit={(e) => onSubmit(e)} className="relative col-span-2 mr-12">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                        <i className="bx bx-search-alt text-xl text-gray-800"></i>
                    </div>
                    <input
                        id="search"
                        name="search"
                        value={term}
                        onChange={(e)=>handleChange(e)}
                        type="search"
                        className={`
                            pl-10 pr-3
                            block w-full rounded-md
                            border border-gray-200
                            focus:border-gray-200 focus:ring-gray-200
                            focus:outline-none focus:ring
                            placeholder-gray-600 focus:plceholder-gray-500
                        `}
                    />
                </form>
            </div>
        </div>
    );
}

export default CategoriesHeader;
