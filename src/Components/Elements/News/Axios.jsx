import React from 'react';   
import axios from 'axios';  
    
export class NewsList extends React.Component {  
  state = {  
    posts: []  
  }  
    //Kaldes umiddelbart efter at component er monteret. Indstilling af tilstand her vil udløse re-rendering..
  componentDidMount() {  
    axios.get(`https://jsonplaceholder.typicode.com/posts`)  
      .then(result => {  
        const posts = result.data;  
        this.setState({ posts });  
      })  
     
  }  
    
  deleteRow(id, e){  
    axios.delete(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(result => {
      const posts = this.state.posts.filter(item => item.id !== id);
      this.setState({ posts})
    })  
  }  
    
  render() {  
    return (  
      <>
      <form>
        
      </form>

        <table >  
            <thead>  
              <tr>  
                  <th>ID</th>  
                  <th>Title</th>  
                  <th>Text</th>  
                  <th>Delete</th>  
              </tr>  
            </thead>  
    
            <tbody>  
              {this.state.posts.map((data) => (  
                <tr>  
                  <td>{data.id}</td>  
                  <td>{data.title}</td>  
                  <td>{data.body}</td>  
                  <td>  
                    <button onClick={(e) => this.deleteRow(data.id, e)}>Delete</button>  
                  </td>  
                </tr>  
              ))}  
            </tbody>  
    
        </table> 
       
      </>
    )  
  }  
}  