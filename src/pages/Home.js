import { useTitle } from "../hooks/useTitle"

export const Home = (title) => {
  useTitle(title)
  return (
    <main>
        <p>Home Page</p>
      
    </main>
  )
}
