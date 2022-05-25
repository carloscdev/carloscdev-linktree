import { BaseIcon } from '..'

export const ItemNav = ({ category, currentCategory, handleCurrentCategory }) => {
  return (
    <li
      className={
        "inline-block mr-3 bg-white shadow-custom rounded-lg px-4 py-3 text-primary cursor-pointer relative "
      }
      onClick={() => handleCurrentCategory(category?.slug)}
    >
      <button
        className={
          "flex items-center text-base gap-3 font-semibold relative " +
          (currentCategory !== category?.slug
            ? "opacity-50"
            : "after:animate-bar after:absolute after:content-[''] after:left-0 after:right-0 after:mx-auto after:bg-secondary after:bottom-[-16px] after:h-[3px] after:rounded-lg")
        }
      >
        <BaseIcon icon={category?.icon} />
        <span>{category?.name}</span>
      </button>
    </li>
  )
}
