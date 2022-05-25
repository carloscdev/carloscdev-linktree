import { useId } from "react"
import { TitleList } from "./"
import { ItemList } from './'

export const ContentList = ({ itemsList }) => {
  const idItem = useId()
  return (
    <main className="px-8">
      <TitleList title="Todos" />
      <ul className="mt-10">
        {itemsList.map((item) => (
          <ItemList key={`${idItem}-${item?.name}`} item={item} />
        ))}
      </ul>
    </main>
  )
}
