import FavoriteSite from "./component/FavoriteSite"
import Profile from"./component/Profile"
import Gallery from "./component/Gallery"
import "./styles/App.css"
import StateAssignment from "./component/StateAssignmentOne"
import StateAssignmentTwo from "./component/StateAssignmentTwo"
function App() {

  return (
   <div className="App">
      <FavoriteSite/>
      <Profile/>
      <Gallery/>
      <StateAssignment/>
      <StateAssignmentTwo/>
   </div>
  )
}

export default App
