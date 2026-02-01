import { px } from "framer-motion";
import familytree from "/src/assets/images/familytree.png";
// import bg from "/src/assets/images/section-tree-bg.png";
// import bg1 from "/src/assets/images/section-tree-bg1.png";
// import bg2 from "/src/assets/images/section-tree-bg2.png";



export default function FamilyTree() {
  return (
    <section className= "family-tree" 
    style={{
        // backgroundImage: `url(${bg1}), url(${bg2}), url(${bg})`,
        // backgroundPosition: "left top, right bottom, center center",
        // backgroundSize: "15%, 20%, cover",
        // backgroundRepeat: "no-repeat, no-repeat, no-repeat",
        borderRadius: "120px",
        boxShadow:"0px 20px 50px #00000038"
      }}
    >
      <div className="">

        

          <img src={familytree} alt="" />

       
      </div>
    </section>
  );
}

