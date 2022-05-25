import { useId } from "react"
import { ItemNav } from "."
import { useLinktreeContext } from "../../context"
import { Loader } from "../Base"

export const Navbar = () => {
  const { categories, loadingCategories, currentCategory, getLinksByCategory } = useLinktreeContext()
  const idItem = useId()

  return (
    <nav className="relative mt-[-50px] navbar">
      <ul
        className="
          mt-[-60px] whitespace-nowrap overflow-x-auto min-h-[100px] px-8
          relative z-10 snap-none navbar-carousel
        "
      >
        {loadingCategories ? (
          <LoaderNavbar />
        ) : (
          categories.map((category) => (
            <ItemNav
              category={category}
              currentCategory={currentCategory}
              handleCurrentCategory={() => getLinksByCategory(category?.slug)}
              key={`${idItem}-${category?.name}`}
            />
          ))
        )}
      </ul>
    </nav>
  )
}

function LoaderNavbar() {
  return (
    <>
      <li
        className={
          "inline-block mr-3 bg-white shadow-custom rounded-lg px-4 py-3 text-primary cursor-pointer relative "
        }
      >
        <button className="flex items-center text-base gap-3 font-semibold relative h-[40px]">
          <Loader width="w-[70px]" height="h-[24px]" />
        </button>
      </li>
      <li
        className={
          "inline-block mr-3 bg-white shadow-custom rounded-lg px-4 py-3 text-primary cursor-pointer relative "
        }
      >
        <button className="flex items-center text-base gap-3 font-semibold relative h-[40px]">
          <Loader width="w-[70px]" height="h-[24px]" />
        </button>
      </li>
    </>
  )
}
