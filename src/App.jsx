import LeftSideLayout from "./layouts/LeftSideBar"
import MainLayout from "./layouts/Main"

function App() {
  return (
    <div className="min-h-screen flex">
      <LeftSideLayout />
      <MainLayout />
    </div>
  )
}

export default App