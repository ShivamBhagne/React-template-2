const Customer=(props)=>{
   const cust1=props.c1;
    return(
        <>
        <div className="d-flex  gap-4 mt-5 flex-column w-100 review">
                <h1 className="text-left mt-5"> OUR BLOGS
                </h1 >
                {/* <hr  /> */}
                
            {
                cust1.map((x)=>{
                        return(
                            <div className="d-md-flex  w-100 container">
                           
            <div className="col-lg-6 pe-md-3">
                <img src={x.img} className="cust-img" alt="" />
            </div>
            <div className="col-lg-6" >
                <h3 className="mt-2 mt-lg-4"> {x.h3}</h3>
                <p className="mt-md-5 w-100" style={{lineHeight:'30px'}}>{x.p}</p>
                <button className="mb-3 mt-lg-3 mb-lg-0 c-btn1">{x.btn}</button>
            </div>
            </div>
                        )
                })
            }
            
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
export default Customer;