import { useState } from 'react'
import './App.css'
import "bootstrap/dist/css/bootstrap.min.css"

const post = {
  author: "autore",
  title: "title",
  body: "messaggio",
  public: false,

}




function App() {
  const [postArray, setPostArray] = useState([post])

  function submitControl(event) {
      event.preeventDefault();
      

  }



  return (
    <>
      <div className='container'>
        <h1 className='text-center'>Blog Boolean</h1>

        <form className='my-3' onSubmit={function(event) {
          submitControl(event)
        }}>
          <div>
            <label htmlFor="author" className='form-label'>Nome Autore</label>
            <input type="text" className='form-control' name='author' placeholder='Nome Autore' id='author'/>
          </div>
          <div className='my-2'>
            <label htmlFor="" className='form-label'>Titolo Post</label>
            <input type="text" className='form-control' name='title' placeholder='Titolo Autore' />
          </div>
          <div className='my-2'>
            <label htmlFor="body">Messaggio:</label>
            <textarea name="body" id="body" className='form-control'></textarea>
          </div>
          <button className='btn btn-success' type='submit'>Send</button>

        </form>












        <div className='row'>
          {postArray.map(function (curPost, index) {
            return (
              <div className='col-4' key={index}>
                <div className="card">
                  <h2 className='card-title text-center'>{curPost.author}</h2>
                  <div className="card-body">
                    <h3>{curPost.title}</h3>
                    <p>{curPost.body}</p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>






      </div >
    </>
  )
}

export default App
