import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Form, Button, FormControl, InputGroup } from 'react-bootstrap'
// import Loading from './Loading'
// import Error from './Error'
// import CommentList from './CommentList'

const CommentArea = () => {
  const { movieId } = useParams()
  const [comments, setComments] = useState([])
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [newComment, setNewComment] = useState({
    comment: '',
    rate: 1,
    elementId: movieId,
  })

  useEffect(() => {
    const fetchComments = async () => {
      if (!movieId) return
      setIsLoading(true)
      setIsError(false)

      try {
        const response = await fetch(
          'https://striveschool-api.herokuapp.com/api/comments/' + movieId,
          {
            headers: {
              Authorization:
                'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMzg1NzM4MzRiZjAwMTUwMDA3MTgiLCJpYXQiOjE3NDQyMjE4MzksImV4cCI6MTc0NTQzMTQzOX0.RWTWHy1jpN3wR9ExBLGMhLAXUp9w1GSNy85lxtpIMJ0',
            },
          }
        )
        if (response.ok) {
          let comments = await response.json()
          setComments(comments)
        } else {
          setIsError(true)
        }
      } catch (error) {
        console.error('Errore nel fetch dei commenti:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    fetchComments()
  }, [movieId])

  const handleRadioChange = (rate) => {
    setNewComment({ ...newComment, rate: parseInt(rate) })
  }

  const handleCommentText = (e) => {
    setNewComment({ ...newComment, comment: e.target.value })
  }

  const submitComment = async (e) => {
    e.preventDefault()
    const COMMENTS_URL = 'https://striveschool-api.herokuapp.com/api/comments/'
    try {
      const response = await fetch(COMMENTS_URL, {
        method: 'POST',
        body: JSON.stringify(newComment),
        headers: {
          Authorization:
            'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2N2RkMzg1NzM4MzRiZjAwMTUwMDA3MTgiLCJpYXQiOjE3NDQyMjE4MzksImV4cCI6MTc0NTQzMTQzOX0.RWTWHy1jpN3wR9ExBLGMhLAXUp9w1GSNy85lxtpIMJ0',
          'Content-Type': 'application/json',
        },
      })
      if (response.ok) {
        alert('Comment added')
        setNewComment({
          comment: '',
          rate: 1,
          elementId: movieId,
        })
      } else {
        alert('An error has occurred')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <div className="my-3">
        {isLoading && <Loading />}
        {isError && <Error />}
        <CommentList commentToShow={comments} />
      </div>

      <div className="text-center text-light">
        <Form onSubmit={submitComment}>
          <div className="my-3 text-center">
            {[1, 2, 3, 4, 5].map((num) => (
              <Form.Check
                key={num}
                inline
                label={num}
                value={num}
                type="radio"
                name="rating"
                checked={newComment.rate === num}
                onChange={() => handleRadioChange(num)}
              />
            ))}
          </div>
          <InputGroup className="mb-3">
            <FormControl
              placeholder="Write your comment"
              aria-label="comment"
              onChange={handleCommentText}
              value={newComment.comment}
              required
            />
          </InputGroup>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </>
  )
}

export default CommentArea
