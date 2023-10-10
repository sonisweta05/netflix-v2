import React from 'react'
import { useParams } from 'react-router-dom';

const Recommandations = () => {
  const URLId = useParams();

  


  return (
    <div>
        <h1 className='font-bold'>Recommandations for You -</h1>
        <div>
      Recommandations
            
        </div>
    </div>
  )
}

export default Recommandations
