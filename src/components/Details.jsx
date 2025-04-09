import { Col, Container, Row, Card, Badge, ListGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const API_KEY = 'ab2f0f30'

const MovieDetails = () => {
  const { movieId } = useParams()
  const [movie, setMovie] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const res = await fetch(`https://www.omdbapi.com/?apikey=${API_KEY}&i=${movieId}`)
        const data = await res.json()
        if (data.Response === 'True') {
          setMovie(data)
        } else {
          console.error('Errore nel recupero film:', data.Error)
        }
      } catch (err) {
        console.error('Errore di rete:', err)
      }
    }

    const fetchComments = async () => {
      try {
        const res = await fetch(`https://tuo-backend.it/api/comments/${movieId}`)
        const data = await res.json()
        setComments(data)
      } catch (err) {
        console.error('Errore nel recupero commenti:', err)
      }
    }

    fetchMovieDetails()
    fetchComments()
  }, [movieId])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col xs={12} md={8}>
          {movie && (
            <Card className="my-4 shadow">
              <Card.Img variant="top" src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600'} />
              <Card.Body>
                <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{movie.Genre}</Card.Subtitle>
                <Card.Text>{movie.Plot}</Card.Text>
                <Badge bg="info" className="me-2">Rated: {movie.Rated}</Badge>
                <Badge bg="warning">IMDB: {movie.imdbRating}</Badge>
              </Card.Body>
            </Card>
          )}

          <h4>Commenti</h4>
          <ListGroup>
            {comments.length > 0 ? (
              comments.map((comment, idx) => (
                <ListGroup.Item key={idx}>
                  <strong>{comment.author}</strong>: {comment.text}
                </ListGroup.Item>
              ))
            ) : (
              <p>Nessun commento disponibile.</p>
            )}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  )
}

export default MovieDetails
