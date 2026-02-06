import { px } from "framer-motion";
import familytree from "/src/assets/images/familytree.jpg";

// import bg from "/src/assets/images/section-tree-bg.png";
// import bg1 from "/src/assets/images/section-tree-bg1.png";
// import bg2 from "/src/assets/images/section-tree-bg2.png";



export default function FamilyTree() {
  return (
    <section className= "family-tree" >
      <style>
        
      </style>
      <div className="">

        

          <img style={{borderRadius: "120px", boxShadow:"0px 20px 50px #00000038", width:"100%",}} src={familytree} alt="" />

       
      </div>
    </section>
  );
}

