export const Loader = ({
  width = "w-full",
  height = "h-5",
  rounded = "rounded",
  bgColor = 'bg-primary',
  bgOpacity = 'bg-opacity-10'
}) => {
  return (
    <div
      className={`${width} ${height} ${rounded} ${bgColor} ${bgOpacity} animate-pulse`}
    ></div>
  )
}
