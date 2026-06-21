function Bookcard({
    image,
    title,
    author,
    description,
    rating,
    price,
}) {
    return (
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden h-125 flex flex-col 
        ">
            <img src={image}
            alt={title}
            className="w-full h-52 object-contain" />

        <div className="p-5 flex flex-col flex-1">
            <h2 className="text-2xl font-bold">
                {title}
            </h2>

            <p className="text-green-600 font-medium mt-1">
                by {author}
            </p>

            <p className="text-gray-600 mt-3 min-h-17.5">
                {description}
            </p>
        
        <div className="flex justify-between items-center mt-5">
            <span className="text-yellow-500 font-semibold">
              ⭐️  {rating}
            </span>

            <span className="text-green-600 font-bold text-lg">
                ₦{price}
            </span>
        </div>

        <button className="w-full mt-5 bg-green-600 text-white py-3 rounded-xl hover:bg-green-700">
            View Details
        </button>
        </div>
        </div>
    );
}

export default Bookcard;