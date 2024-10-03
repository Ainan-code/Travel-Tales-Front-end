 import axios from "axios";
 import { useNavigate } from "react-router-dom";
 import { useState } from "react";
 import MainLayout from "../components/MainLayout";
 function DiaryEntry () {
    const navigate = useNavigate();
    const [blog, setBlog] = useState({
        title: '',
        content: '',
        location: '',
        author: '',
      });

      const token = localStorage.getItem('token');
      const handleInput = (e) => {
        const { name, value } = e.target;
        setBlog({
          ...blog,
          [name]: value,
        });
      };

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        try {
          const response = await axios.post('http://localhost:5000/diaries/diary', blog, {headers: {
            "Authorization": `Bearer ${token}`, 
            "Content-Type": "application/json"
          }});
          console.log('Tale data submitted successfully:', response.data);
          // You can add additional logic here, such as displaying a success message
         
          
          navigate('/');
        } catch (error) {
          console.error('Error submitting form data:', error);
          // You can add error handling logic here, such as displaying an error message
         
        }
      };
    return(
      <MainLayout>
        <div className="register-container">
        <h4>Create a Tale</h4>
        <form action="#" className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="title">Title:</label>
            <input type="text" name='title' onChange={handleInput} value={blog.title}/>
            <label htmlFor="content">Content:</label>
            <input type="text" name='content'onChange={handleInput} value={blog.content}/>
          
            <label htmlFor="location">Location:</label>
            <input type="text" name='location'onChange={handleInput} value={blog.location}/>
            <label htmlFor="author">Author:</label>
            <input type="text" name='author'onChange={handleInput} value={blog.author}/>
            <button type="submit">Publish</button>
        </form>

        
       </div>
       </MainLayout>
    )
 }




 export default DiaryEntry;