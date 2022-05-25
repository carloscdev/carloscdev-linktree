import { useState, useId } from 'react'
import { ItemNav } from '.'

export const Navbar = ({ categories }) => {
  const idItem = useId()
  const [currentCategory, setCurrentCategory] = useState('all')

  const handleCurrentCategory = (category) => {
    setCurrentCategory(category)
  }
  return (
    <nav className="relative mt-[-50px] navbar">
      <ul
        className="
          mt-[-60px] whitespace-nowrap overflow-x-auto min-h-[100px] px-8
          relative z-10 snap-none navbar-carousel
        "
      >
        {categories.map((category) => (
          <ItemNav
            category={category}
            currentCategory={currentCategory}
            handleCurrentCategory={handleCurrentCategory}
            key={`${idItem}-${category?.name}`}
          />
        ))}
      </ul>
    </nav>
  )
}
