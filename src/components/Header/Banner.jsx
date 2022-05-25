import { ProfileImage } from './'
// import { BlueCircle, OrangeCircle } from '../Icons'

export const Banner = ({ user }) => {
  return (
    <header
      className="
        h-banner bg-custom-black text-white flex items-center justify-center
        relative overflow-hidden bg-banner bg-center bg-no-repeat bg-cover bg-fixed
        after:absolute after:content-[''] after:inset-0 after:bg-custom-black after:bg-opacity-90
      "
    >
      {/* <BlueCircle />
      <OrangeCircle /> */}
      <div className="text-center mb-8 relative z-10">
        <ProfileImage src={user.image} />
        <h1 className="font-semibold text-xl mt-3">{user?.name}</h1>
        <p className="font-light text-md opacity-80">{user?.position}</p>
      </div>
    </header>
  )
}
