import { TitleList } from "./"
import { Loader } from "../Base"
import { useLinktreeContext } from "../../context"

export const AboutMe = () => {
  const { profile, loadingProfile } = useLinktreeContext()
  return (
    <section className="px-8">
      <TitleList title="Sobre Mi" />
      {loadingProfile ? (
        <LoaderAboutMe />
      ) : (
        <p className="font-base text-custom-black">
          {profile[0]?.description}
        </p>
      )}
    </section>
  )
}

function LoaderAboutMe() {
  return (
    <div className="flex flex-col gap-1">
      <Loader width="w-9/12" />
      <Loader />
      <Loader />
    </div>
  )
}
