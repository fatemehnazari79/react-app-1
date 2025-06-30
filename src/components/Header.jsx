
import styles from  "./Header.module.css";
function Header({activeTab,setActiveTab}) {
  return (
    <div className={styles.container}>
      <h1>Tabs Component With React </h1>
      <ul>
        <li onClick={()=> setActiveTab("Tab1")}>Tab1</li>
        <li onClick={()=> setActiveTab("Tab2")}>Tab2</li>
        <li onClick={()=> setActiveTab("Tab3")}>Tab3</li>
        <li onClick={()=> setActiveTab("Tab4")}>Tab4</li>
      </ul>
    
    </div>
  )
}

export default Header;