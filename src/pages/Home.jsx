import { useEffect } from "react"
import { Banner, Navbar, ContentList, AboutMe, Footer } from "../components"

import { useLinktreeContext } from "../context";

// import { getAllCategories } from '../requests/categories'

export const Home = () => {
  const { getAllCategories, getAllLinks } = useLinktreeContext()
  const user = {
    name: "Carlos Córdova",
    position: "Front-end Dev.",
    image: "https://i.postimg.cc/5NLYqYd9/Profile-ccdev.jpg",
  }

  useEffect(() => {
    getAllCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getAllLinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="font-montserrat">
      <Banner user={user} />
      <div className="max-w-[680px] mx-auto mb-10 shadow-custom rounded-b-[40px] pb-10">
        <Navbar />
        <div class="grid gap-16">
          <ContentList />
          <AboutMe />
          <Footer />
        </div>
      </div>
    </div>
  )
}
