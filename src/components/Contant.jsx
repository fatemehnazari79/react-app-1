import styles from "./Contant.module.css";
function Contant({activeTab}) {
  return (
    <div>
        <div className={styles.containerContant}>
            {activeTab === "Tab1" && (
             <section>
             <h1>Contant1</h1>
             <p>Lorem ips consectetur adipisicing elit. Hic quasi incidunt doloremque, debitis aspernatur odit distinctio. Ea fugit modi quis alias explicabo ducimus similique nulla deserunt saepe accusamus nostrum, voluptatum et cupiditate totam architecto autem numquam laboriosam corrupti veniam dolores?
             </p>
             </section>
             )}
            {activeTab === "Tab2" && (
            <section>
            <h1>Contant2</h1>
            <p>Lorem doloremque, debitis aspernatur odit distinctio. Ea fugit modi quis alias explicabo ducimus similique nulla deserunt saepe accusamus nostrum, voluptatum et cupiditate totam architecto autem numquam laboriosam corrupti veniam dolores?
            </p>
            </section>
            )}
            {activeTab === "Tab3" && (
            <section>
            <h1>Contant3</h1>
            <p>Lorem ipsum consectetur adipisicing elit. Hic quasi incidunt doloremque, debitis aspernatur odit distinctio. Ea fugit modi quis alias explicabo ducimus similique nulla deserunt saepe accusamus nostrum, voluptatum et cupiditate totam architecto autem numquam laboriosam corrupti veniam dolores?
            </p>
            </section>
            )}
            {activeTab === "Tab4" && (
            <section>
            <h1>Contant4</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Hic quasi incidunt doloremque, debitis aspernatur odit distinctio. Ea fugit modi quis alias explicabo ducimus similique nulla deserunt saepe accusamus nostrum, voluptatum et cupiditate totam architecto autem numquam laboriosam corrupti veniam dolores?
            </p>
            </section>
            )}
        </div>
    </div>
  )}export default Contant;