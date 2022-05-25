import { BaseIcon } from '../Icons'

export const ItemList = ({ item }) => {
  return (
    <li className="mb-5 last:mb-0 animate-fadeUp">
      <a
        href={item?.url}
        target="_blank"
        rel="noreferrer noopener"
        className="flex items-center gap-5 text-lg text-custom-black hover:text-secondary group"
      >
        <span className="text-primary group-hover:text-secondary">
          <BaseIcon icon={item?.icon} />
        </span>
        <span>{item?.name}</span>
      </a>
    </li>
  )
}
