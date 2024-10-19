import React, { useEffect, useState } from "react";
import CardPath from "../sub_components/CardPath";
import SearchBar from "../sub_components/Searchbar";
import VerticleLine from "../sub_components/VerticleLine";
import imgsvg from "../sub_components/ImagesSvgs";
// import './Learning_path.css'

function Learning_path() {
  return (
    <>
      <SearchBar style={{ position: "absolute" }} />
      <div className="main-container">
        <div
          className="path-title"
          style={{
            fontSize: "40px",
            fontWeight: "600",
            marginLeft: "2vw",
            marginTop: "10vh",
          }}
        >
          Start Your Learning Today 🎯
        </div>
        <img src={imgsvg.elips} style={{}} alt="" />
        <VerticleLine
          style={{
            top: "61%",
            left: "45%",
            rotate: "90deg",
            transitionDuration: "0s",
          }}
          ScrollPosition={10}
          growStyle={{ height: "20%" }}
        />
        <VerticleLine
          style={{ top: "70%" }}
          ScrollPosition={20}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-1"
          number="01"
          title="Introduction"
          description="Overview of what doping is and its impact on athletes and sports."
        />
        <VerticleLine
          style={{ top: "105%", left: "55.5%", rotate: "90deg" }}
          ScrollPosition={20}
          growStyle={{ height: "24.5%" }}
        />
        <VerticleLine
          style={{ top: "112%" }}
          ScrollPosition={580}
          growStyle={{ height: "50%" }}
        />
        <CardPath
          className="card-2"
          number="02"
          title="Prohibited Substances"
          description="Detailed explanation of substances banned by the World Anti-Doping Agency (WADA)."
        />
        <VerticleLine
          style={{
            top: "155%",
            left: "45%",
            rotate: "90deg",
            
          }}
          ScrollPosition={580}
          growStyle={{ height: "20%" }}
        />
        <VerticleLine
          style={{ top: "163%" }}
          ScrollPosition={1070}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-3"
          number="03"
          title="Testing Procedures"
          description="How doping control works, including sample collection, testing, and the rights of athletes."
        />

        <VerticleLine
          style={{ top: "200%", left: "55.5%", rotate: "90deg" }}
          ScrollPosition={1070}
          growStyle={{ height: "24.5%" }}
        />
        <VerticleLine
          style={{ top: "210%" }}
          ScrollPosition={1480}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-4"
          number="04"
          title="Consequences of Doping"
          description="Legal, health, and career consequences of doping violations."
        />
        <VerticleLine
          style={{
            top: "248%",
            left: "45%",
            rotate: "90deg",
            
          }}
          ScrollPosition={1480}
          growStyle={{ height: "20%" }}
        />
        <VerticleLine
          style={{ top: "255%" }}
          ScrollPosition={1800}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-5"
          number="05"
          title="Therapeutic Use Exemptions"
          description="Understanding TUEs and how athletes can apply for permission to use prohibited substances."
        />

        <VerticleLine
          style={{ top: "290%", left: "55.5%", rotate: "90deg" }}
          ScrollPosition={1800}
          growStyle={{ height: "24.5%" }}
        />
        <VerticleLine
          style={{ top: "300%" }}
          ScrollPosition={2100}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-6"
          number="06"
          title="Athlete’s Rights & Responsibilities"
          description="Overview of an athlete’s responsibilities regarding anti-doping."
        />

        <VerticleLine
          style={{
            top: "340%",
            left: "45%",
            rotate: "90deg",
            
          }}
          ScrollPosition={2100}
          growStyle={{ height: "20%" }}
        />
        <VerticleLine
          style={{ top: "348%" }}
          ScrollPosition={2400}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-7"
          number="07"
          title="Importance of Nutrition "
          description="Information on proper nutrition for performance. How to choose safe and approved supplements."
        />

        <VerticleLine
          style={{ top: "382%", left: "55.5%", rotate: "90deg" }}
          ScrollPosition={2400}
          growStyle={{ height: "24.5%" }}
        />
        <VerticleLine
          style={{ top: "395%" }}
          ScrollPosition={2700}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-8"
          number="08"
          title="Real-Life Case Studies"
          description="Interactive modules featuring real-life doping cases."
        />

        <VerticleLine
          style={{
            top: "430%",
            left: "45%",
            rotate: "90deg",
            
          }}
          ScrollPosition={2700}
          growStyle={{ height: "20%" }}
        />
        <VerticleLine
          style={{ top: "440%" }}
          ScrollPosition={3000}
          growStyle={{ height: "45%" }}
        />
        <CardPath
          className="card-9"
          number="09"
          title="Updated Anti-Doping Rules"
          description="How to stay informed about changes in anti-doping rules and regulations."
        />
        <VerticleLine
          style={{ top: "475%", left: "55.5%", rotate: "90deg" }}
          ScrollPosition={3000}
          growStyle={{ height: "24.5%" }}
        />
        <CardPath
          className="card-10"
          number="10"
          title="Ethical Dilemmas "
          description="Scenarios that challenge athletes’ values and integrity. How to make the right decisions."
        />
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos
        officiis repellendus explicabo sint molestiae temporibus tempora
        doloribus, sapiente at, harum culpa tempore! Dicta suscipit nulla ipsam
        sequi quibusdam necessitatibus, quos provident non sed consectetur ab
        omnis sapiente sunt, iste inventore nesciunt porro quisquam et a odit
        delectus, similique modi quia. Odit, unde eius quis excepturi ullam
        magnam reiciendis nesciunt sed rem velit illo adipisci ad officia.
        Dolorum quidem alias eveniet ut cum explicabo saepe totam incidunt?
        Perspiciatis ut expedita assumenda minus illo autem porro similique
        aperiam quisquam, iure sit. Accusamus repudiandae laboriosam debitis
        ipsa officia itaque harum alias quisquam ducimus numquam, explicabo,
        nemo autem assumenda totam maiores, magnam beatae. Velit delectus culpa
        fugiat neque praesentium harum rem labore optio porro ab. Vero autem,
        facilis fugit rerum fuga similique eum optio fugiat animi delectus
        impedit debitis quo molestiae sint ut placeat ea, laboriosam illum
        recusandae sunt quis. Nobis veritatis atque odio fugit nulla quam
        perspiciatis nisi reprehenderit tenetur magnam fuga, cupiditate animi
        quisquam harum asperiores est temporibus ab repudiandae, vitae
        recusandae, blanditiis officiis impedit. Vel sequi labore earum
        provident quas, adipisci ex eum nulla odit ea similique eius quam
        tenetur illum eaque nihil, dicta, architecto harum placeat itaque at
        ratione. Fuga aspernatur praesentium ducimus dolores! Odio adipisci eos
        sint, vero molestias ullam deserunt aperiam excepturi magni fugit,
        exercitationem error soluta sapiente ducimus labore quibusdam iusto, ut
        molestiae dicta earum voluptates laboriosam quos incidunt. Vero
        incidunt, veniam a cumque illum fuga aliquam quis sunt. Minima similique
        voluptate nihil, eum explicabo distinctio odio tempore error totam,
        officiis, perferendis sed placeat eius dolor doloremque harum.
        Inventore, excepturi vitae illum velit ullam eveniet cum iure? Eum harum
        quia, odit quidem obcaecati fugit quis, dolores eaque, labore nisi ea
        dolorum. Suscipit, excepturi? Tempore impedit eius delectus? Quisquam
        dicta, facilis incidunt distinctio tempora doloremque voluptas in
        quaerat, nobis, adipisci vel totam laudantium iste tempore molestias
        veniam. Ullam suscipit, dignissimos quo facilis consequatur, nesciunt,
        quis quisquam recusandae laborum perferendis explicabo architecto a
        sapiente. Veniam corrupti quos, dolorem nihil quis architecto, incidunt
        voluptate nostrum repudiandae natus exercitationem id reprehenderit
        minima saepe, aut totam voluptatem temporibus eius! Maiores voluptatem
        doloremque quo odit soluta labore obcaecati amet, dolor consectetur
        ullam, veritatis explicabo ab voluptatibus nam optio recusandae quis
        fugiat exercitationem deserunt perferendis culpa nobis animi aliquid
        atque? Id quibusdam accusantium, quo excepturi eius repellendus!
        Explicabo quidem quos accusantium eum quas labore omnis, ratione quae,
        saepe doloremque commodi tempora ipsam provident rem eius aperiam
        officiis nesciunt cum, ullam a velit totam animi sint! Numquam nam
        nihil, quisquam dolores dolore facere vitae quo cum voluptate deleniti
        beatae omnis consequuntur suscipit expedita voluptatum reprehenderit
        ratione voluptatibus ea perspiciatis nemo. At recusandae laudantium
        perspiciatis dicta, libero officiis. Rem esse et quia dolorum porro
        provident possimus nobis, distinctio commodi excepturi! Maxime, quisquam
        at! Nesciunt veniam in at tempora fugit fuga sit amet, tempore possimus
        consequuntur culpa eum odit provident temporibus. Odit iste sit iusto
        aliquam, voluptate saepe dolores aperiam, consequatur eos dicta ut ipsa
        consequuntur harum quae enim, quisquam accusamus dolorem officiis ab
        provident excepturi ducimus?
      </div>
    </>
  );
}

export default Learning_path;
