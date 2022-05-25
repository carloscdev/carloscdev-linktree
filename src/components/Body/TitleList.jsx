
export const TitleList = ({ title }) => {
  return (
    <h2 className="text-xl font-bold text-primary flex items-center gap-5 justify-between">
      {/* <span className="block h-[1px] w-full bg-gray-200"></span> */}
      <span className="block">{title}</span>
      <span className="block h-[1px] w-9/12 bg-gray-200"></span>
    </h2>
  )
}
