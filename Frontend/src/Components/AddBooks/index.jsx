// import { useState } from "react";
// ; // Adjust import path as needed
// import { Link } from "react-router-dom";
// import Navbar from "../Navbar";

import { useState } from "react";

// function AddBooks() {
//     const [showForm, setShowForm] = useState(false);
//     const [title, setTitle] = useState("");
//     const [author, setAuthor] = useState("");
//     const [genre, setGenre] = useState("");
//     const [description, setDescription] = useState("");
//     const [price, setPrice] = useState("");
//     const [image, setImage] = useState("");

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         // Add your book submission logic here
//         console.log({
//             title,
//             author,
//             genre,
//             description,
//             price,
//             image
//         });
//         // Reset form after submission
//         setTitle("");
//         setAuthor("");
//         setGenre("");
//         setDescription("");
//         setPrice("");
//         setImage("");
//         setShowForm(!showForm);
//     };

//     return (
//         <div>
//             <Navbar />
//             <div className="h-[60vh] bg-base-200 py-8">
//                 <div className="container mx-auto px-4 sm:px-6 lg:px-8">
//                     {!showForm ? (
//                         // Initial prompt card
//                         <div className="max-w-md mx-auto">
//                             <div className="card bg-base-100 shadow-xl">
//                                 <div className="card-body text-center">
//                                     <div className="mb-4">
//                                         <div className="text-6xl mb-4">📚</div>
//                                         <h2 className="card-title justify-center text-2xl mb-2">
//                                             Add a New Book
//                                         </h2>
//                                         <p className="text-base-content/70">
//                                             Want to add a book to your collection?
//                                         </p>
//                                     </div>
//                                     <div className="card-actions justify-center">
//                                         <button 
//                                             className="btn btn-primary btn-lg"
//                                             onClick={() => setShowForm(true)}
//                                         >
//                                             📖 Add Book
//                                         </button>
//                                     </div>
//                                 </div>
//                             </div>
//                         </div>
//                     ) : (
//                         // Book form
//                         <div className="max-w-2xl mx-auto">
//                             <div className="card bg-base-100 shadow-xl">
//                                 <div className="card-body">
//                                     <div className="flex items-center justify-between mb-6">
//                                         <h2 className="card-title text-2xl">
//                                             📚 Add New Book
//                                         </h2>
//                                         <button 
//                                             className="btn btn-ghost btn-sm"
//                                             onClick={() => setShowForm(false)}
//                                         >
//                                             ✕
//                                         </button>
//                                     </div>
                                    
//                                     <form onSubmit={handleSubmit} className="space-y-4">
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div className="form-control">
//                                                 <label className="label" htmlFor="title">
//                                                     <span className="label-text font-medium">Book Title</span>
//                                                 </label>
//                                                 <input 
//                                                     type="text" 
//                                                     id="title"
//                                                     placeholder="Enter book title" 
//                                                     className="input input-bordered w-full"
//                                                     required
//                                                     value={title}
//                                                     onChange={(e) => setTitle(e.target.value)}
//                                                 />
//                                             </div>
                                            
//                                             <div className="form-control">
//                                                 <label className="label" htmlFor="author">
//                                                     <span className="label-text font-medium">Author</span>
//                                                 </label>
//                                                 <input 
//                                                     type="text" 
//                                                     id="author"
//                                                     placeholder="Enter author name" 
//                                                     className="input input-bordered w-full"
//                                                     required
//                                                     value={author}
//                                                     onChange={(e) => setAuthor(e.target.value)}
//                                                 />
//                                             </div>
//                                         </div>
                                        
//                                         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                                             <div className="form-control">
//                                                 <label className="label" htmlFor="genre">
//                                                     <span className="label-text font-medium">Genre</span>
//                                                 </label>
//                                                 <select 
//                                                     id="genre"
//                                                     className="select select-bordered w-full"
//                                                     required
//                                                     value={genre}
//                                                     onChange={(e) => setGenre(e.target.value)}
//                                                 >
//                                                     <option value="">Select genre</option>
//                                                     <option value="Fiction">Fiction</option>
//                                                     <option value="Non-Fiction">Non-Fiction</option>
//                                                     <option value="Mystery">Mystery</option>
//                                                     <option value="Romance">Romance</option>
//                                                     <option value="Sci-Fi">Science Fiction</option>
//                                                     <option value="Fantasy">Fantasy</option>
//                                                     <option value="Biography">Biography</option>
//                                                     <option value="History">History</option>
//                                                     <option value="Self-Help">Self-Help</option>
//                                                 </select>
//                                             </div>
                                            
//                                             <div className="form-control">
//                                                 <label className="label" htmlFor="price">
//                                                     <span className="label-text font-medium">Price</span>
//                                                 </label>
//                                                 <input 
//                                                     type="number" 
//                                                     id="price"
//                                                     placeholder="Enter price" 
//                                                     className="input input-bordered w-full"
//                                                     min="0"
//                                                     step="0.01"
//                                                     required
//                                                     value={price}
//                                                     onChange={(e) => setPrice(e.target.value)}
//                                                 />
//                                             </div>
//                                         </div>
                                        
//                                         <div className="form-control">
//                                             <label className="label" htmlFor="image">
//                                                 <span className="label-text font-medium">Book Cover URL</span>
//                                             </label>
//                                             <input 
//                                                 type="url" 
//                                                 id="image"
//                                                 placeholder="Enter image URL (optional)" 
//                                                 className="input input-bordered w-full"
//                                                 value={image}
//                                                 onChange={(e) => setImage(e.target.value)}
//                                             />
//                                         </div>
                                        
//                                         <div className="form-control">
//                                             <label className="label" htmlFor="description">
//                                                 <span className="label-text font-medium">Description</span>
//                                             </label>
//                                             <textarea 
//                                                 id="description"
//                                                 placeholder="Enter book description" 
//                                                 className="textarea textarea-bordered h-24"
//                                                 value={description}
//                                                 onChange={(e) => setDescription(e.target.value)}
//                                             />
//                                         </div>
                                        
//                                         <div className="form-control mt-8">
//                                             <div className="flex gap-3 justify-end">
//                                                 <button 
//                                                     type="button" 
//                                                     className="btn btn-ghost"
//                                                     onClick={() => setShowForm(false)}
//                                                 >
//                                                     Cancel
//                                                 </button>
//                                                 <button 
//                                                     type="submit" 
//                                                     className="btn btn-primary"
//                                                 >
//                                                     📚 Add Book
//                                                 </button>
//                                             </div>
//                                         </div>
//                                     </form>
//                                 </div>
//                             </div>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default AddBooks;





function AddBooks(){
    const [showForm , setShowForm] = useState(false)
    const [name,setName] = useState("")
    const [price , setPrice] = useState(0)
    const [category,setCategory] = useState("")
    const [image , setImage] = useState("")
    const [title,setTitle] = useState("")
    function formHandler(){
        setShowForm(!showForm)
    }
    function handler(data){
        data.preventDefault()
        async function Handle(){
            await axios.post()
        }

    }
    return(
        <div>
            {
                !showForm ? 
                (<div>
                    <p>Want to add a book?</p>
                    <button onClick={formHandler}>Add new book</button>
                </div>) : 
                (<div>
                    <form onSubmit={handler}>
                        <label htmlFor="name">Enter the book's author name</label>
                        <input type="text" name="name" onChange={(e)=>{setName(e.target.value)}}/>
                        <label htmlFor="price">Enter the book Price</label>
                        <input type="number" name="price" onChange={(e)=>{setPrice(e.target.value)}} />
                        <label htmlFor="category">Enter the category of book</label>
                        <input type="text"  name="category" onChange={(e)=>setCategory(e.target.value)}/>
                        <label htmlFor="image">Enter the image url</label>
                        <input type="text" name="image" onChange={(e)=>setImage(e.target.value)} />
                        <label htmlFor="title">Enter the title of book</label>
                        <input type="text" name="title" onChange={(e)=>setTitle(e.target.value)} />
                    </form>
                </div>)
            }
        </div>
    )
}
export default AddBooks;