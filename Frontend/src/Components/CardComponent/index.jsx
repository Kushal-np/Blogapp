function Card({ name, title, price, category, image }) {
  const isFree = price === "Free" || price === 0;

  return (
    <div
      className="
        bg-white dark:bg-black
        rounded-lg border border-gray-200 dark:border-gray-700
        shadow-sm hover:shadow-md transition-shadow duration-300
        max-w-sm mx-auto w-full
        group
      "
    >
      {/* Image */}
      <figure className="overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={title || name}
          className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-[1.03]"
        />
      </figure>

      {/* Content */}
      <div className="p-5">
        {/* Author */}
        {name && (
          <p className="text-xs text-gray-500 dark:text-gray-400 font-medium mb-1 truncate">
            by {name}
          </p>
        )}

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-2 line-clamp-2">
          {title}
        </h2>

        {/* Category */}
        {category && (
          <span
            className="
              inline-block text-xs font-semibold px-3 py-0.5
              border border-gray-300 dark:border-gray-600
              rounded-full text-gray-600 dark:text-gray-400
              select-none
            "
          >
            {category}
          </span>
        )}

        {/* Price & Buttons */}
        <div className="flex items-center justify-between mt-6">
          <div
            className={`text-lg font-semibold ${
              isFree ? "text-green-600 dark:text-green-400" : "text-gray-900 dark:text-gray-100"
            }`}
          >
            {isFree ? "Free" : `$${price}`}
          </div>

          <div className="flex gap-2">
            {isFree ? (
              <button
                className="
                  px-4 py-1 text-sm font-semibold
                  bg-gray-900 dark:bg-gray-100
                  text-white dark:text-black
                  rounded-md
                  hover:bg-gray-700 dark:hover:bg-gray-300
                  transition-colors duration-200
                "
                aria-label="Read Now"
              >
                Read Now
              </button>
            ) : (
              <>
                <button
                  className="
                    px-4 py-1 text-sm font-semibold
                    bg-transparent border border-gray-300 dark:border-gray-600
                    text-gray-700 dark:text-gray-300
                    rounded-md
                    hover:bg-gray-100 dark:hover:bg-gray-800
                    transition-colors duration-200
                  "
                  aria-label="Preview"
                >
                  Preview
                </button>
                <button
                  className="
                    px-4 py-1 text-sm font-semibold
                    bg-gray-900 dark:bg-gray-100
                    text-white dark:text-black
                    rounded-md
                    hover:bg-gray-700 dark:hover:bg-gray-300
                    transition-colors duration-200
                  "
                  aria-label="Buy Now"
                >
                  Buy Now
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
