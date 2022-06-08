import { ProfileImage } from "./"
import { useLinktreeContext } from "../../context"
import { Loader } from "../Base"
// import { BlueCircle, OrangeCircle } from '../Icons'

export const Banner = () => {
  const { profile, loadingProfile } = useLinktreeContext()
  return (
    <header
      className="
        h-banner bg-custom-black text-white flex items-center justify-center
        relative overflow-hidden bg-banner bg-center bg-cover
        after:absolute after:content-[''] after:inset-0 after:bg-custom-black after:bg-opacity-80
      "
    >
      {/* <BlueCircle />
      <OrangeCircle /> */}
      <div className="text-center mb-8 relative z-10">
        {loadingProfile ? (
          <LoaderBanner />
        ) : (
          <>
            <ProfileImage src={profile[0]?.image} />
            <h1 className="font-semibold text-xl mt-3">{profile[0]?.name}</h1>
            <p className="font-light text-md opacity-80">
              {profile[0]?.position}
            </p>
          </>
        )}
      </div>
    </header>
  )
}

function LoaderBanner() {
  return (
    <>
      <Loader
        width="w-20 mx-auto"
        height="h-20"
        rounded="rounded-full"
        bgColor="bg-white"
        bgOpacity="bg-opacity-30"
      />
      <Loader
        width="my-2"
        height="h-[20px]"
        bgColor="bg-white"
        bgOpacity="bg-opacity-30"
      />
      <Loader
        width="mx-auto w-9/12"
        height="h-[10px]"
        bgColor="bg-white"
        bgOpacity="bg-opacity-30"
      />
    </>
  )
}
