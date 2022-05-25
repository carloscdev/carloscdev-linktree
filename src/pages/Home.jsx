import { useEffect, useState } from "react"
import { Banner, Navbar, ContentList, AboutMe } from "../components"

import { getAllCategories } from '../requests/categories'
import { getAllLinks } from '../requests/links'

export const Home = () => {
  const [categories, setCategories] = useState([])
  const [links, setLinks] = useState([])
  const user = {
    name: "Carlos Córdova",
    position: "Front-end Dev.",
    image: "https://i.postimg.cc/5NLYqYd9/Profile-ccdev.jpg",
  }

  // const categories = [
  //   {
  //     name: 'All',
  //     icon: 'fa-solid fa-link',
  //     slug: 'all'
  //   },
  //   {
  //     name: 'Social',
  //     icon: 'fa-regular fa-address-card',
  //     slug: 'social'
  //   },
  //   {
  //     name: 'Tutorials',
  //     icon: 'fa-solid fa-chalkboard',
  //     slug: 'tutorials'
  //   },
  //   {
  //     name: 'Courses',
  //     icon: 'fa-solid fa-chalkboard-user',
  //     slug: 'courses'
  //   }
  // ]

  useEffect(() => {
    setCategories(getAllCategories())
  }, [])

  useEffect(() => {
    setLinks(getAllLinks())
  }, [])

  // const itemsList = [
  //   {
  //     name: "Github | @carloscdev",
  //     category: "social",
  //     icon: "fa-brands fa-github",
  //     url: "https://www.linkedin.com/in/carloscdev/",
  //   },
  //   {
  //     name: "Linkedin | @carloscdev",
  //     category: "social",
  //     icon: "fa-brands fa-linkedin",
  //     url: "https://www.linkedin.com/in/carloscdev/",
  //   },
  //   {
  //     name: "Facebook | @carloscdev",
  //     category: "social",
  //     icon: "fa-brands fa-facebook",
  //     url: "https://www.facebook.com/carloscdev/",
  //   },
  //   {
  //     name: "Instagram | @carlosc.dev",
  //     category: "social",
  //     icon: "fa-brands fa-instagram",
  //     url: "https://www.instagram.com/carlosc.dev/",
  //   },
  //   {
  //     name: "Twitter | @carloscdev",
  //     category: "social",
  //     icon: "fa-brands fa-twitter",
  //     url: "https://twitter.com/carloscdev",
  //   },
  // ]

  return (
    <div className="font-montserrat">
      <Banner user={user} />
      <div className="max-w-[680px] mx-auto mb-10">
        <Navbar categories={categories} />
        <ContentList itemsList={links} />
        <AboutMe />
      </div>
    </div>
  )
}
