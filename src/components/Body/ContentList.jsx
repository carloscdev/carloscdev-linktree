import { useId } from "react"
import { TitleList } from "./"
import { BaseIcon } from '../Icons'

export const ContentList = ({ itemsList }) => {
  const idItem = useId()
  return (
    <main className="px-8">
      <TitleList title="Todos" />
      <ul className="mt-10">
        {itemsList.map((item) => (
          <li key={`${idItem}-${item?.name}`} className="mb-5 last:mb-0">
            <a
              href={item?.url}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-5 text-lg text-gray-700 font-semibold"
            >
              <span className="text-primary">
                <BaseIcon icon={item?.icon} />
              </span>
              <span>{item?.name}</span>
            </a>
          </li>
        ))}
      </ul>
    </main>
  )
}
