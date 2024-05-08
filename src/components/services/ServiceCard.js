function ServiceCard(data){

    return(
        <div className="w-full relative p-8 lg:h-[200pm] bg-white shadow-1 hover:-translate-y-1 transition duration-300 ease-in-out">
            <div className="w-full h-auto bg-white">
                <div className="w-full">
                    <img src={data.img} className="w-10 h-10" alt=""/>
                    <h2 className="text-xl font-semibold text-gray-900 pt-10">{data.title}</h2>
                    <p className="text-lg font-medium text-gray-500 pt-8">{data.title}</p>
                </div>
                <div className="absolute bottom-0 left-0 p-8">
                    <h2 className="items-end text-xl font-semibold text-gray-900 pt-10">Learn More</h2>
                </div>
            </div>
        </div>
    )
}

export default ServiceCard