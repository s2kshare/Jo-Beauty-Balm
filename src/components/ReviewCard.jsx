function ReviewCard({ user, description, rating }) {
    return (
        <div className="card bg-neutral h-full text-white w-full shadow-xl cursor-pointer overflow-y-hidden my-2 md:my-10 mx-1">
            <div className="card-body">
                <h2 className="card-title">{user}</h2>
                <div className="rating">
                    {[...Array(5)].map((_, index) => (
                        <input
                            key={index}
                            type="radio"
                            name="rating-10"
                            className="mask mask-star-2 bg-orange-400"
                            // defaultChecked={index < rating}
                            disabled
                        />
                    ))}
                </div>
                <p>{description}</p>
                {/* <div className="card-actions justify-end">
                    <button className="btn btn-primary">Buy Now</button>
                </div> */}
            </div>
        </div>
    );
}

export default ReviewCard;
