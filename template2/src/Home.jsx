const Home=(props)=>{

  let home1=props.h1;
    return(
        <>
        <div id="carouselExampleDark" class="mt-5 carousel carousel-dark slide">
  <div class="carousel-indicators">
    <button className="" style={{width:'10px',borderRadius:'50%',  height:'10px'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button className="rounded-circle" style={{width:'10px', height:'10px'}} type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
    {/* <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
  </div>
  <div class="carousel-inner ">
    <div class="carousel-item   cou1 active" data-bs-interval="10000">
      <div className="container w-75 cou1-d"><h2>Pet Supermarket</h2>
      <p className="d-none d-md-block">
      Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For additional moving tips, check out the rest of their article here.</p>

      <p className="d-block d-md-none w-100">Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’  Advice to Do It Properly”. </p>
      <div className="w-100 d-flex d-md-block">
        <button className="c-btn">SHOP NOW</button>
        <button className="c-btn">VIEW COLLECTION</button>
      </div></div>
      

    </div>
    <div class="carousel-item cou2" data-bs-interval="2000">
    <div className="container w-75 cou1-d"><h2>Handmade By Me</h2>
      <p className="d-none d-md-block">
      Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’ Advice to Do It Properly”. For additional moving tips, check out the rest of their article here.</p>
      <p className="d-block d-md-none w-100">Below is an excerpt of porch.com’s article “Moving With Pets? We Have the Experts’  Advice to Do It Properly”. </p>
      
      <div className="w-100 d-flex d-md-block">
        <button className="c-btn">SHOP NOW</button>
        <button className="c-btn">VIEW COLLECTION</button>
      </div></div>
    </div>
    
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
    <span class="carousel-control-prev-icon p-4" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
    <span class="carousel-control-next-icon p-4" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


<div className="w-100 d-flex gap-3 flex-column flex-md-row container justify-content-between mt-5 pb-5 " >
  {
    home1.map((x)=>{
      return(
        <>
        <div className={x.class} style={{height:'300px', }}>
        <p>{x.p}</p>
        <h3>{x.h3}</h3>
        <a href="#">{x.a}<img src={x.img}></img></a>
        </div>
        </>
      )
    })
  }
  
</div>


<div className="home2 d-md-flex justify-content-evenly w-100 ">
  <div class="mt-md-5 w-md-50 text-center" >
    <h1>
      GET UPDATE
    </h1>
    <div className="" style={{width:'22%',marginLeft:'39%',borderBottom:'3px solid rgb(245, 164, 52)'}}></div>
    <p className="mt-3 pb-4" >Subscribe our newsletter and get <br />discount 30% off</p>
  </div>
  <div className="mt-md-5 w-lg-100 d-none d-lg-block" style={{height:'50px'}}>
    <input  style={{height:'100%',width:'70%', border:'none'}} type="text" placeholder="Your email address"/>
    <button className=" home-btn" style={{}}><img className="" src="./icons8-telegram-48.png" alt="" /></button>
  </div>


</div>

      <div class="d-flex text-center w-100 justify-content-evenly p-2 mb-3" style={{height:'80px'}}>

     

      <div className="my-auto">
       <p class=" mb-0">
        © Copyright 2024 |By EngoTheme.Powered by Shopify.
      </p>
      </div>

      <div className="d-none d-md-block">
      <img  src="//pettini-store-demo.myshopify.com/cdn/shop/files/logo.png?v=1706608801" style={{height:'30px'}}/>
      <p class="mt-2">Sophisticated simplicity for the <br />
      independent mind.</p>

      </div>

      <div className="my-auto d-none d-md-block">
      <img src="./pay_copyright.png" alt="" />
        
      </div>
  </div>
        </>
    )
}
export default Home;