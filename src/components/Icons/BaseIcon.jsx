import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export const BaseIcon = ({ icon }) => {
  return (
    <div className="bg-primary bg-opacity-5 w-[40px] rounded p-3 aspect-square flex items-center justify-center">
      <FontAwesomeIcon icon={icon} />
    </div>
  )
}
