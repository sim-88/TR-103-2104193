import Card from "./components/Card"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import './App.css'
function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card img='https://www.hindustantimes.com/ht-img/img/2024/10/13/550x309/mva_presser_1728808423497_1728808435045.jpeg' title="Hindustan Times" description="Baba Siddique News Live: CM Shinde instructs state funeral for NCP leader"/>
        <Card img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/gn-saibaba-131237506-16x9_0.jpg?VersionId=xgVFK5q8j67CWEuJolc5PY64CGLsujFi&size=690:388" title="India Today" description="Ex-Delhi University professor GN Saibaba, acquitted in Maoist link case, dies"/>
        <Card img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/gn-saibaba-131237506-16x9_0.jpg?VersionId=xgVFK5q8j67CWEuJolc5PY64CGLsujFi&size=690:388" title="India Today" description="Ex-Delhi University professor GN Saibaba, acquitted in Maoist link case, dies"/>
        <Card img="https://akm-img-a-in.tosshub.com/indiatoday/images/story/202410/gn-saibaba-131237506-16x9_0.jpg?VersionId=xgVFK5q8j67CWEuJolc5PY64CGLsujFi&size=690:388" title="The Hindu" description="Tamil Nadu train accident: Railways orders high-level inquiry into collision at Kavaraipettai; sabotage angle under lens"/>
      </div>
      <Footer />
    </>
  )
}

export default App
