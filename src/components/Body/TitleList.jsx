
export const TitleList = ({ title }) => {
  return (
    <h2 className="mb-10 text-xl font-bold text-primary flex items-center gap-5 justify-between">
      {/* <span className="block h-[1px] w-full bg-gray-200"></span> */}
      <span className="block whitespace-nowrap">{title}</span>
      <span className="block h-[1px] w-full bg-gray-200"></span>
    </h2>
  )
}
