 

 function DiaryEntry () {
    return(
        <div className="register-container">
        <h4>Create a Tale</h4>
        <form action="#" className="register-form">
            <label htmlFor="title">Title:</label>
            <input type="text" name='title'/>
            <label htmlFor="content">Content:</label>
            <input type="text" name='content'/>
            <label htmlFor="img">Upload Image:</label>
            <input type="file" name='img'/>
            <label htmlFor="location">Location:</label>
            <input type="text" name='location'/>
            <button type="submit">Publish</button>
        </form>

        
       </div>
    )
 }




 export default DiaryEntry;