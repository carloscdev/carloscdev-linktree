
export const ProfileImage = ({ src }) => {
  return (
    <figure className="w-20 h-20 mx-auto rounded-full border-2 border-white relative">
      <span className="absolute bottom-[2px] right-[2px] bg-secondary h-3 w-3 block rounded-full animate-ping"></span>
      <span className="absolute bottom-0 right-0 bg-secondary h-4 w-4 block rounded-full"></span>
      <img src={src} alt="Profile Cover" className="rounded-full" />
    </figure>
  )
}
