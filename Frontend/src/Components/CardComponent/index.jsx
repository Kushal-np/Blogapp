function Card({ name, title, price, category, image }) {
  return (
    <div className="card bg-base-100 shadow-xl hover:shadow-2xl transition-all duration-300 w-full max-w-sm mx-auto group">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt={title || name}
          className="rounded-xl w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </figure>
      <div className="card-body">
        {/* Author/Name */}
        {name && (
          <div className="text-sm text-base-content/60 font-medium mb-1">
            by {name}
          </div>
        )}
        
        {/* Title */}
        <h2 className="card-title text-lg font-bold line-clamp-2">
          {title}
        </h2>
        
        {/* Category Badge */}
        {category && (
          <div className="badge badge-outline badge-sm mt-2">{category}</div>
        )}
        
        {/* Price */}
        <div className="flex items-center justify-between mt-4">
          <div className="text-2xl font-bold text-primary">
            {price === "Free" || price === 0 ? (
              <span className="text-success">Free</span>
            ) : (
              `$${price}`
            )}
          </div>
          
          {/* Action Buttons */}
          <div className="card-actions">
            {price === "Free" || price === 0 ? (
              <button className="btn btn-primary btn-sm">
                Read Now
              </button>
            ) : (
              <>
                <button className="btn btn-ghost btn-sm">
                  Preview
                </button>
                <button className="btn btn-primary btn-sm">
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