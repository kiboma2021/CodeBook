import { useFetch } from "../hooks/useFetch"
import { BookCard } from "../components"
import { useTitle } from "../hooks/useTitle"


export const Ebook = (title) => {
  const url = "http://localhost:8000/books"
  const {data:books } =  useFetch(url)
  useTitle(title)
  return (
    <main>
      { books && books.map(book =>(
        <div key={book.id}>
          <BookCard book={book} />
        </div>
      ))}
      
      
    </main>
  )
}
