import { Container, Link, Pagination, Stack, TextField } from '@mui/material'
import axios from 'axios'
import { useEffect, useState } from 'react'

const BASE_URL = 'http://hn.algolia.com/api/v1/search?'

export default function App() {
  const [pages, setPages] = useState([])
  const [query, setQuery] = useState('react')
  const [page, setPage] = useState(1)
  const [quntity, setQuntity] = useState(0)

  useEffect(() => {
    axios.get(BASE_URL + `page=${page - 1}&query=${query}`).then(({ data }) => {
      setPages(data.hits)
      setQuntity(data.nbPages)
    })
  }, [page, query])

  return (
    <div>
      <Container>
        <TextField
          fullWidth  
          label='Search'
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Pagination
          page={page}
          count={quntity}
          onChange={(_, max) => setPage(max)}
        />
        <Stack>
          {pages.map((el) => {
            return (
              <Link key={el.objectID} href={el.url}>
                {el.title || el.story_text}
              </Link>
            )
          })}
        </Stack>
      </Container>
    </div>
  )
}
