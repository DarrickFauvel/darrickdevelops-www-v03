type ContainerProps = {
  children: React.ReactNode
}

const Container = ({ children }: ContainerProps) => {
  return <div className="container px-6 mx-auto">{children}</div>
}
export default Container
