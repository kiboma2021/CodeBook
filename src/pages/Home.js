import { useTitle } from "../hooks/useTitle"
import { Banner,StudentReview } from "../components"
import { FAQ } from "./FAQ"


export const Home = (title) => {
  useTitle(title)
  return (
    <main>
      <Banner />

      <div className="flex justify-center underline decoration-2 underline-offset-8 my-10 text-2xl dark:text-white">
         <p>Featured Books</p>
      </div>
      

      <div className="flex justify-center underline decoration-2 underline-offset-8 my-10 text-2xl dark:text-white">
         <p>Student About CodeBook</p>
      </div>
      
      <StudentReview />

      <div className="flex justify-center underline decoration-2 underline-offset-8 my-10 text-2xl dark:text-white">
         <p>Question in mind?</p>
      </div>

      <FAQ />
        


      
    </main>
  )
}
