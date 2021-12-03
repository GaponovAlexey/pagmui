import { Container, Link, Pagination, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'http://hn.algolia.com/api/v1/search?'

export default function App() {
  let size = ['15px', '12pt', '34em', '-3px', '2%']
  console.log(parseInt(size));
  console.log(parseFloat(314e-2));
  // function toNum(arr) {
  //   for(let i = 0; i < arr.length; i++) {
  //     arr[i] = 
  //       }
  // }
  return <div>{size}</div>
}
