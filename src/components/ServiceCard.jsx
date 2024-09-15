function ServiceCard({ title, description, price, table, tabledata }) {
    return (
        <div className="card w-full bg-neutral text-primary-content overflow-y-hidden">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>

                <p>{description}</p>
                {table == false && (
                    <div className="card-actions justify-end">
                        <button className="btn">${price}</button>
                    </div>
                )}
                {table == true && (
                    <div className="overflow-x-auto text-primary-content">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th className="text-primary-content">
                                        Duration
                                    </th>
                                    <th className="text-primary-content">
                                        Price
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {tabledata !== null &&
                                    tabledata.map((data, index) => {
                                        return (
                                            <tr
                                                className="hover hover:text-neutral transition-all hover:cursor-pointer"
                                                key={index}
                                            >
                                                <td>
                                                    {data.duration}
                                                    {data.surplus}
                                                </td>
                                                <td>${data.price}</td>
                                            </tr>
                                        );
                                    })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default ServiceCard;
