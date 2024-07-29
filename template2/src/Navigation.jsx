import { Link } from "react-router-dom";
// import Home from "./Home";


const Navigation=(props)=>{
    const nav1=props.n1;
    
    return(
     
             <>
        <nav className=" d-md-flex position-fixed  navbar w-100 ">
            <div className="col-1">
            <img className="my-auto mx-4 " src="./logo (1).png"  style={{width:'',height:'30px'}} />

            </div>
            <ul className="d-none d-md-flex col-8 mt-3 justify-content-around"  style={{listStyle:'none'}}>

                {/* <li></li> */}
                <li className=""><Link className=" text-decoration-none text-dark fs-5" to={"/"}>Home</Link></li>
                <li className=""><Link className=" text-decoration-none text-dark fs-5" to={"./About"}>About</Link></li>
                <li className=""><Link className=" text-decoration-none text-dark fs-5" to={"./Shop"}>Shop</Link></li>
                <li className=""><Link className=" text-decoration-none text-dark fs-5" to={"./Customer"}>Blogs</Link></li>
                <li className=""><Link className=" text-decoration-none text-dark fs-5" to={"./Contact"}>Contact</Link></li>
            </ul>
            <div className="d-none d-md-flex col-2 my-auto justify-content-evenly">

                {
                    nav1.map((x)=>{
                        return(
                            <>
                              <img src={x}  style={{width:'30px',height:'30px'}} alt="" />
                            </>
                        )
                    })
                }
              
                
            </div>
            

            <button class="m-2 d-md-none " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasRight" aria-controls="offcanvasRight">  <img className="my-md-auto mx-md-4 d-md-none" src="./icons8-hamburger-menu-50.png"  style={{width:'',height:'30px',backgroundColor:'transparent',border:'none'}} />
            </button>
        </nav>

       

<div class="offcanvas d-md-none offcanvas-end" tabindex="-1" id="offcanvasRight" aria-labelledby="offcanvasRightLabel">
  <div class="offcanvas-header">
  <img className="my-auto mx-4 " src="./logo (1).png"  style={{width:'',height:'30px'}} />
    
    {/* <h5 class="offcanvas-title" id="offcanvasRightLabel">Offcanvas right</h5> */}
    <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">
        
    </button>
  </div>
  <div class="offcanvas-body text-center">

  <ul className="  mt-3 justify-content-around"  style={{listStyle:'none'}}>

{/* <li></li> */}

<li className="" data-bs-dismiss="offcanvas"><Link  className=" text-decoration-none text-dark fs-5" to={"/"}>Home</Link></li>
<li className="" data-bs-dismiss="offcanvas"><Link  className=" text-decoration-none text-dark fs-5" to={"./About"}>About</Link></li>
<li className="" data-bs-dismiss="offcanvas"><Link  className=" text-decoration-none text-dark fs-5" to={"./Shop"}>Shop</Link></li>
<li className="" data-bs-dismiss="offcanvas"><Link  className=" text-decoration-none text-dark fs-5" to={"./Customer"}>Blogs</Link></li>
<li className="" data-bs-dismiss="offcanvas"><Link  className=" text-decoration-none text-dark fs-5" to={"./Contact"}>Contact</Link></li>
</ul>
  </div>
</div>
        </>
      
       
    )
}
export default Navigation;


