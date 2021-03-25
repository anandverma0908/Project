import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EdiText from 'react-editext'

export default function Description(props) {

  const { description, processId } = props

  const onSave = val => {
   
    const url = "http://localhost:8080/CP_Dashboard/process/updateDescription";
    const postData = {
      id: processId,
      description: val
    }
    const header = {
        contentType: "application/json"
    }

    axios.post(url, postData, header)
        .then(response => {
            // console.log("description:", response.data)
        })
        .catch(error => {
          console.log(error)
        })
  }
  
  return (
    <EdiText

      type='text'
      inputProps={{
        style: {
            width: 500
        }
    }}
      value={description}
      onSave={onSave}
    />
  )
}