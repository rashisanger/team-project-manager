const StatsCard = ({
    title,
    value,
}) => {
    return (
        <div className="card hover:shadow-md">
            <p className="text-sm text-slate-500">
                {title}
            </p>

            <h2 className="text-3xl font-semibold mt-3">
                {value}
            </h2>
        </div>
    );
};

export default StatsCard;