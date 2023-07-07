import React  from 'react';
// import styledAnimals from './Animals.module.css'



 class Animals extends React.Component {
  constructor(props) {
    super(props);
  
    
  }


  render() {

    return(
      
      <div>


            {
                                                 
                  this.props.zoo?.map((animals,k) => {
                    animals.key = k ; 
                
                  return ( 
                    
                  <div key = {animals.key}>
                  <h5>{animals.name}</h5>
                  <img src={animals.image} width="300px" alt={animals.name}/>
                  <p>{animals.specie}</p>
                  
                  </div>
                
                )


                  })

            } 
            
             
        </div>
   

    );  

   
  }

  

}

export default Animals;