const StructureItem = ({ title, description, icon }) => {
    return (
        <div className="w-full flex flex-col mt-16">
            <div className="flex flex-row items-center mb-5">
                {icon}
                <h3 className="text-2xl ml-2 font-bold">{title}</h3>
            </div>
            
            <p>{description}</p>
        </div>
    );
}

export default StructureItem;
