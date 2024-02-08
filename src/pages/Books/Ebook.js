import { useFetch } from "../../hooks/useFetch"
import { BookCard } from "../../components"
import { useTitle } from "../../hooks/useTitle"
import { TableFilter } from "./TableFilter"
import { useState } from "react"

export const Ebook = (title) => {
  const url = "http://localhost:8000/books"
  const {data:books,error } =  useFetch(url)
  useTitle(title)

  const [showFilter,setShowFilter]=useState(false);

  

  return (
    <main >
      <div className="flex justify-between  text-3xl font-bold mb-5 dark:text-white">
        {error?(<p>{error}</p>):(<p>All eBooks ({books?(books.length):""})</p>) }
        <div onClick={()=>setShowFilter(!showFilter)}  className="px-4 py-1 rounded dark:bg-slate-600">
        <i className="fas fa-ellipsis-v"></i>

        </div>
      </div>
      <div className="flex justify-center flex-wrap gap-5">
          { books && books.map((book) =>(
              <BookCard book={book} key={book.id} />
          ))}
      </div>

      <div className={showFilter?"":"hidden"}>
        <TableFilter />        
      </div>

    </main>
  )
}
