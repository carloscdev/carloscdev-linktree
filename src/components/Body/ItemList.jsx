import { useEffect } from 'react'
import { BaseIcon } from '../Icons'

export const ItemList = ({ item, index }) => {
  const addAnimationDelay = () => {
    const item = document.querySelector(`.item-delay:nth-child(${index})`)
    item.style.animationDelay = `${1 * index / 10}s`
  }

  useEffect(() => {
    addAnimationDelay()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return (
    <li className="mb-5 last:mb-0 animate-fadeUp translate-y-4 item-delay opacity-0">
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
