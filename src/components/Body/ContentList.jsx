import { useId } from "react"
import { TitleList, ItemList } from "./"
import { Loader } from "../Base"
import { useLinktreeContext } from "../../context"

export const ContentList = () => {
  const { links, loadingLinks, currentCategory, categories } = useLinktreeContext()
  const titleCategory = categories.find(category => {
    return category.slug === currentCategory
  })
  const idItem = useId()

  return (
    <main className="px-8">
      <TitleList title={titleCategory?.name || 'Todos'} />
      <ul className="min-h-12">
        {loadingLinks ? (
          <LoaderContentList />
        ) : (
          links.map((item, index) => (
            <ItemList key={`${idItem}-${item?.name}`} item={item} index={index + 1} />
          ))
        )}
      </ul>
    </main>
  )
}

function LoaderContentList() {
  return (
    <section className="flex flex-col gap-5">
      <Loader width="w-9/12" />
      <Loader />
      <Loader />
      <Loader />
    </section>
  )
}
