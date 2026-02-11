import familytree from "/src/assets/images/familytree.jpg";




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

