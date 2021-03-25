import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EdiText from 'react-editext'

export default function Comment(props) {

  const { comment, processId } = props

  const onSave = val => {
   
    const url = "http://localhost:8080/CP_Dashboard/process/updateComment";
    const postData = {
      id: processId,
      comments: val
    }
    const header = {
        contentType: "application/json"
    }

    axios.post(url, postData, header)
        .then(response => {
            // console.log("Comment:", response.data)
        })
        .catch(error => {
          console.log(error)
        })
  }
  
  return (
    <EdiText

      type='textarea'
      inputProps={{
        rows: 5
      }}
      value={comment}
      onSave={onSave}
    />
  )
}