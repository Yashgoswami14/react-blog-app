import './App.css'
import conf from "./conf/conf.js"

function App() {
  // console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(conf.appwriteUrl);
  return (
    <>
      <h1>hello world!</h1>
    </>
  )
}

export default App
