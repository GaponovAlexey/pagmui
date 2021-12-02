import { Container, Link, Pagination, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'http://hn.algolia.com/api/v1/search?'

export default function App() {
  const [posts, setPosts] = useState([])
  const [query, setQury] = useState('react')
  const [page, setPage] = useState(1)
  const [pageQty, setPageQty] = useState(0)

  useEffect(() => {
    axios.get(BASE_URL + `page=${page - 1}&query=${query}`).then(({ data }) => {
      console.log(data)
      setPosts(data.hits)
      setPageQty(data.nbPages)
      if(data.nbPages < page) {
        setPage(1)
        
      }
    })
  }, [page, query])

  return (
    <Container sx={{ marginTop: 1 }}>
      <Stack spacing={1}>
        <TextField
          fullWidth
          label='query'
          value={query}
          onChange={(e) => setQury(e.target.value)}
        />
        <Pagination
          hideNextButton
          hidePrevButton
          page={page}
          count={pageQty}
          onChange={(_, str) => setPage(str)}
        />
        {posts.map((el) => (
          <Link key={el.objectID} href={el.url}>
            {el.title || el.story_title}
          </Link>
        ))}
      </Stack>
    </Container>
  )
}
