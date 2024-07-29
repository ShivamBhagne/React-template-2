const About=(props)=>{
    const ab=props.a1;
    
    return(
        <>

        <div className="review1  ">
            <div className=" w-100 mt-5 pt-5 text-light h-100  ">
            <p className=" p-5 ms-5 mt-5 display-3 fw-bolder">ABOUT US</p>
            </div>
            
        </div>
 <div className=" d-lg-flex   container">
           
            <div className="col-lg-6 mt-5">
                <img src="./public/bg_page.jpg" style={{width:'90%'}} className="cust-img1" />
            </div>
            <div className="col-lg-6  mt-5">
                <h3>Our Story</h3>
                <p class="">Cenean imperdiet. Fusce vel dui Praesent adipiscing.</p>
                <p> Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
        </div>


        <div className="review2 col-lg-12 mt-lg-5  d-lg-flex text-light">
            <div className="col-lg-6 p-5">
                <h1 className="display-3 fw-bold">Behind the Brand</h1>
                <p></p>
                <p>We are a female-founded, 100% woman-led team of collaborative dreamers who value innovation, curiosity and free-thinking fearlessness in everything that we do.</p>
                <p>We take immeasurable pride in our work, intentionally stitching love into the very fiber and fabric of our designs. We are small, but we are a mighty group of talented individuals dedicated to bringing you otherworldly designs with imagery to match.</p>
                
            </div>

<div className="col-lg-6 p-5 gap-3 d-flex justify-content-evenly">
            <div className="" >

                <div>
                    <img style={{width:"100%"}} src="./public/ourteam-1-1.jpg" alt="" />
                </div>
                <div className="p-4 bg-light text-dark">
                <h3>Karen Rayn</h3>
                <p>Designer</p>
                </div>
            </div>
            <div className="">

                <div>
                    <img style={{width:"100%"}} src="./public/ourteam-1-3.jpg" alt="" />
                </div>
                <div className="p-4 bg-light text-dark">
                <h3>Fergusson</h3>
                <p>Designer</p>
                </div>
            </div>
</div>
            

        </div>


<div className="container text-center">
    <img src="./public/daimond.jpg" style={{
        width:'15%'
    }}/>
    <h2>We’re committing to create the change
    <br />We want to see in the world</h2>
    <div className="d-flex flex-column flex-md-row w-100 justify-content-evenly gap-3 mt-5 pb-5">
        {
           ab.map((x)=>{
                return(
                    <>
                    <div className="col-lg-3 p-3 ab-card" style={{border:'1px solid grey'}}>
                        <img src={x.img} alt="" />
                        <p className="fs-5">{x.p1}</p>
                        <p>{x.p2}</p>
                    </div>
                    </>
                )
           })
        }
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
<img src="public\pay_copyright.png" alt="" />
  
</div>
</div>
        </>
    )
}
export default About;