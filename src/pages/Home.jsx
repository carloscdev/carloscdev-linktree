import { useEffect } from "react"
import { Banner, Navbar, ContentList, AboutMe, Footer } from "../components"

import { useLinktreeContext } from "../context";

// import { getAllCategories } from '../requests/categories'

export const Home = () => {
  const { getAllCategories, getAllLinks, getProfile } = useLinktreeContext()

  useEffect(() => {
    getAllCategories()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getAllLinks()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    getProfile()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="font-montserrat pb-10">
      <Banner />
      <div className="max-w-[680px] mx-auto mb-10 shadow-custom rounded-b-[40px] pb-10">
        <Navbar />
        <div className="grid gap-16">
          <ContentList />
          <AboutMe />
        </div>
      </div>
      <Footer />
    </div>
  )
}
