import React from 'react'

const ProtectedRoute = ({ allowedSlug, element }) => {

  if (allowedSlug) {
    return element;
  }else{
    return <h1>Unauthorized</h1>;
  }
  
}

export default ProtectedRoute