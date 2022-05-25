
export const ProfileImage = ({ src }) => {
  return (
    <figure className="w-20 h-20 mx-auto rounded-full overflow-hidden border-2 p-1 border-white">
      <img src={src} alt="Profile Cover" className="rounded-full" />
    </figure>
  )
}
