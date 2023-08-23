import { useState } from "react";
import { useHistory } from "react-router-dom";

const Create = () => {
  const [title,setTitle]=useState('')
  const[body,setBody]=useState('')
  const[author,setAuthor]=useState('')
  const[isAdding,setIsAdding]=useState(false)
  const history= useHistory()

  const handleSubmit=(e)=>{
    //e.preventDefault()
    const blog={title,body,author}
    setIsAdding(true)
    

    fetch('http://localhost:8000/blogs/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
      setIsAdding(false)
      //history.go(-1) //takes you one step backwards to the just previous page
      //history.push("/")//pushes you back to the route path provided in quotes
    })
  }

  const handleClick=()=>{
    history.push('/')
  }


  return (


    <div className="create">
      <h2>Add a new blog</h2>

      <form onSubmit={handleSubmit}>
        <label>Blog Title</label>
        <input 
          type="text"
          required
          value={title}
          onChange={(e)=>setTitle(e.target.value)}
        />

        <label>Blog Content</label>
        <textarea
          required
          value={body}
          onChange={(e)=>setBody(e.target.value)}
        />

        <label>Blog Author</label>
        <input
          required
          value={author}
          onChange={(e)=>setAuthor(e.target.value)}

        />

        {isAdding && <button >Adding Blog....</button>}
        {!isAdding && <button onClick={handleClick}>Add Blog</button>}
      </form>
    </div>
    
    );
}
 
export default Create;