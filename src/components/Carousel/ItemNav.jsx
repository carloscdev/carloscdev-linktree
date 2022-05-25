import { BaseIcon } from '..'

export const ItemNav = ({ category, currentCategory, handleCurrentCategory }) => {
  return (
    <li
      className={
        "inline-block mr-3 bg-white shadow-custom rounded-lg px-4 py-3 text-primary cursor-pointer relative " +
        (currentCategory === category?.slug
          ? 'after:absolute after:content-[""] after:bg-secondary after:bottom-[-3px] after:h-[3px] after:w-9/12 after:rounded-lg'
          : "")
      }
      onClick={() => handleCurrentCategory(category?.slug)}
    >
      <button
        className={
          "flex items-center text-base gap-5 font-semibold " +
          (currentCategory !== category?.slug ? "opacity-50" : "")
        }
      >
        <BaseIcon icon={category?.icon} />
        <span>{category?.name}</span>
      </button>
    </li>
  )
}
