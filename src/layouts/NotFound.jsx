import Imagen from '../assets/img/404.png'

const NotFound = () => {
  

    return (
      <>
      <div className="notFoundContainer">
        <h1>Esta página no existe</h1>
        <div className="image">
            <img src={Imagen} alt="" width={500} height={500}/>
        </div>
        
      </div>
      
       
       
      </>
    )
  }
  
  export default NotFound