import React from "react";
import SideMenu from "../sidemenu/Menu";
import "./Dashboard.css";
import profileimg from "../../assets/sample.jpg";
import SearchBar from "../sub_components/Searchbar";
import useSideMenu from '../sub_components/useSideMenu';

function Dashboard() {
  const { isOpen, toggleMenu } = useSideMenu();
  return (
    <>
      <SideMenu isOpen={isOpen} toggleMenu={toggleMenu}/>
      <SearchBar style={{position: 'fixed'}}/>
      <div className="main-container">
        <div className="middle-container">
          <div className="dashboard">
            <div className="greeting">
              <h1>Hello! MD 👋</h1>
            </div>

            <div className="stats-cards">
              <div className="card">
                <h2>10</h2>
                <p>Total Modules</p>
              </div>
              <div className="card">
                <h2>0</h2>
                <p>Completed</p>
              </div>
              <div className="card">
                <h2>0</h2>
                <p>Badges</p>
              </div>
              <div className="card">
                <h2>0</h2>
                <p>Points</p>
              </div>
            </div>

            <div className="analytics">
              <h2>Analytics 📈</h2>
              <div className="analytics-cards">
                <div className="analytics-card"></div>
                <div className="analytics-card anc2"></div>
              </div>
            </div>
          </div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
          provident deserunt ex accusantium pariatur facere dolore nihil quaerat
          consequatur placeat eaque, sapiente voluptates. Alias perferendis
          blanditiis nulla aspernatur quo ratione ipsum assumenda modi laborum
          quod vitae quis maxime quisquam ullam, error quos nostrum adipisci ad
          iure. Voluptatem ullam iusto, vel deserunt dicta iure ipsam nesciunt
          quam fugit alias, sit impedit, quidem provident perspiciatis
          temporibus libero cum aperiam! Laudantium porro pariatur harum debitis
          aliquam nostrum magnam, exercitationem culpa aperiam sapiente ea a
          minus veritatis, consectetur nisi dolorum similique cumque
          perspiciatis reiciendis corrupti minima, quisquam fugit voluptas
          beatae. Magni reiciendis praesentium labore, molestiae repellat
          quibusdam esse et ea, quam atque aperiam ducimus dolor quaerat tenetur
          pariatur quasi cum nesciunt sequi! Rem doloremque nisi cum et autem
          dignissimos nihil odio, corrupti ad sunt laboriosam ab recusandae
          aspernatur ea vitae voluptates quas, amet praesentium nam sequi.
          Dolores, totam. Sint, ut reprehenderit exercitationem aliquid rerum
          sapiente, et cumque doloremque, odit delectus necessitatibus. Quia
          ratione, ullam porro error sed atque laborum, reiciendis fugiat est
          non maxime cum quod impedit iste minima necessitatibus soluta? Rem
          mollitia quae maiores culpa! Iste mollitia nemo maxime aut itaque!
          Dolor dolore nemo alias facere odit explicabo eaque, maxime ipsam hic
          fugit modi sequi architecto in unde labore facilis nulla quam nisi
          mollitia at sapiente cum pariatur. Quisquam illo, sunt cupiditate
          expedita nulla quae earum repellendus reprehenderit! Reprehenderit
          autem id ipsum nulla? Maxime repellat laudantium optio illum
          perspiciatis reiciendis totam, ullam nesciunt provident reprehenderit
          tempora, sapiente incidunt debitis qui dolorem? Ipsum natus obcaecati
          maxime facilis iste doloribus nesciunt, expedita fuga reiciendis ex
          quis harum eos inventore magnam officiis delectus soluta deserunt
          architecto tenetur vero repudiandae molestiae a? Quos, tenetur fugiat
          eaque velit minima labore vero impedit nisi facilis nobis sequi fuga
          quaerat itaque non harum iste beatae, nostrum accusamus a delectus ex
          ipsum aliquam at optio. Dolor vel repudiandae error similique
          explicabo eveniet in rerum hic, aspernatur praesentium quae suscipit
          sequi minus laboriosam quo ipsum consequuntur eaque? Natus iste
          aspernatur nostrum facere labore rerum dignissimos eveniet, nesciunt
          explicabo eum eos enim nobis voluptas sed repellat, ab, quaerat ex
          nisi temporibus illo. Esse maxime molestias dignissimos veniam
          provident delectus illo qui, officiis alias? Culpa cum aliquid nemo
          dolore id! Odio rerum repellendus, corrupti sapiente incidunt velit
          blanditiis earum, doloremque quae magnam reprehenderit non explicabo,
          voluptate commodi. Quaerat illo similique id reiciendis maxime sequi
          voluptatum rem inventore vel dolores iure laboriosam amet, quae
          blanditiis esse fuga. Possimus velit provident sunt suscipit.
          Excepturi, itaque recusandae, earum molestias eligendi cum temporibus
          maxime provident possimus, voluptas quae in dignissimos ipsum
          blanditiis voluptates magni corporis rem eius odio aliquam tempore at
          soluta. Minus, rem enim ut maiores ea obcaecati quos sunt, quasi, modi
          repellat unde expedita. Magnam amet minus earum eveniet suscipit? Est
          ut, quos obcaecati, dicta illo, delectus qui eos ipsam rerum in
          voluptatem voluptate nam voluptas. Amet eveniet totam sint molestias
          praesentium veniam dolorem ipsum nam possimus perferendis. Harum
          tempora tempore asperiores quae nihil mollitia nostrum non recusandae
          doloribus, sed quisquam nemo distinctio? Magni magnam consequatur
          accusamus facilis. Quaerat quas delectus ipsam commodi dolorum maiores
          dolorem magnam sit qui, hic neque. Rerum nostrum distinctio
          dignissimos adipisci tempore minima natus nisi voluptas qui tenetur.
          Deserunt consequatur quaerat aspernatur harum. Rem eaque totam,
          mollitia nesciunt eveniet tempore facere eligendi consequuntur culpa
          odio deserunt tenetur cupiditate, enim quibusdam, nemo vitae id velit
          aspernatur sint sapiente a nulla accusamus iusto voluptatibus! Alias
          quam enim perspiciatis, consectetur, illum libero quis qui facilis
          mollitia sit eaque maiores dolor sint quos tenetur quae architecto
          ullam veritatis molestiae incidunt! Dolores expedita veniam repellat.
          Eius vel velit a? Pariatur, explicabo! Voluptates temporibus
          voluptatem autem atque illo quas excepturi necessitatibus earum,
          blanditiis quibusdam explicabo quidem iste corrupti sequi! Nobis
          recusandae similique dolorem quidem, praesentium officia molestias
          labore beatae possimus ad sint, ipsa natus, qui maiores nam? Adipisci
          atque fugiat, voluptatem doloremque corporis harum porro debitis earum
          necessitatibus ab quisquam voluptates eveniet eos. Facilis libero,
          earum sint quos error vitae ducimus inventore ipsam saepe nesciunt
          dolore impedit id non voluptate, iste sunt voluptatem totam,
          exercitationem aperiam asperiores tempora incidunt officiis. Magni
          natus ex deserunt tenetur provident ad doloribus consequuntur
          repellendus quas eaque soluta voluptates velit enim ea ducimus
          possimus illum aliquam repellat est ratione iure quis, voluptatibus
          sint. Nemo magni tempore tempora nam, laborum suscipit blanditiis
          delectus sequi cum provident totam reiciendis at. Veniam in nesciunt
          natus perspiciatis tempore ratione ut consequuntur quia? Autem
          voluptatem animi facere mollitia nemo dolor quo ab asperiores ex,
          harum vel nam, velit placeat sit perferendis sed totam quia maxime
          minus. Inventore, dolorem fugit optio est alias expedita hic. Quae
          enim accusamus laudantium autem nesciunt. Non eum a rem voluptates
          temporibus libero repellendus quia velit numquam voluptatum. Similique
          magnam voluptatem placeat quasi eligendi maiores voluptates, fugit
          quidem, dolorum impedit doloremque, quam vitae obcaecati. Sunt vero
          ad, accusantium mollitia, quos voluptates earum laborum animi ipsam,
          ipsa facere omnis corrupti nam nulla. Omnis eius voluptatum quisquam
          porro, dolorum hic quidem quaerat? Voluptates, molestias repellendus!
          Atque mollitia nobis totam, porro explicabo recusandae eius? Iusto
          illum laudantium vel voluptate? Ea temporibus aliquam non. Nihil
          consequatur delectus corporis sunt architecto ut quos doloribus quis
          autem ducimus, aspernatur velit praesentium eligendi voluptatibus,
          atque perspiciatis odio magni nobis obcaecati reiciendis distinctio.
          Ratione laboriosam explicabo qui fugiat, dicta nisi quaerat temporibus
          aperiam laborum tempora error quibusdam. Deserunt nihil a mollitia
          libero ratione quibusdam ex impedit voluptas at dolorem? Ipsa
          perspiciatis consequatur id harum ad quasi ducimus dolore, rerum
          doloremque dicta. Exercitationem, facere eum? Laborum consequuntur,
          eos doloribus incidunt ut labore facilis ad dolores veniam fugiat
          error vero reprehenderit corporis eius temporibus perspiciatis sed
          minus odit perferendis adipisci autem? Numquam provident quis
          dignissimos quo similique quae ea illo veritatis praesentium. Quod
          nesciunt perferendis dignissimos explicabo quaerat laboriosam, dicta
          veritatis ab at, quasi blanditiis porro, exercitationem in a. Pariatur
          dignissimos quod voluptate excepturi, earum, natus consequatur veniam
          blanditiis nam vero doloribus necessitatibus sit explicabo? Dolorem
          necessitatibus totam dolorum, quasi nisi, numquam qui quod officia
          nam, provident dignissimos nostrum! Eius et adipisci labore nostrum
          blanditiis quos, unde quaerat eaque, omnis magnam cumque assumenda?
        </div>
      </div>

      <div className="profile-card">
        <div className="profile-picture">
          <img src={profileimg} alt="Profile" />
        </div>

        <h2>Mohammad Ahmad</h2>

        <div className="tags">
          <span className="tag">Cricket</span>
          <span className="tag">India</span>
        </div>

        <h3>Badges</h3>
        <div className="badges">
          <span>💎</span>
          <span>🎯</span>
          <span>🏅</span>
          <span>⭐</span>
          <span>🏆</span>
          <span>🧩</span>
          <span>🌟</span>
          <span>🔥</span>
          <span>💯</span>
        </div>
      </div>
    </>
  );
}

export default Dashboard;
