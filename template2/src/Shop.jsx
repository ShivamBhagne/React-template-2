const Shop=(props)=>{

    const s1=props.shop1;

    return(
        <>
    <div className="col-12 container mt-5 pt-5 a1" >

        {
            s1.map((x)=>{
                return(
                   <div className="a2 container">
                    <div>

                        <div className="gap-5">
                            <div><img src={x.icon1} alt="" /></div>
                            <div><img src={x.icon2} alt="" /></div>
                            <div><img src={x.icon3} alt="" /></div>
                        </div>
                    <img src={x.img} alt="" className="shop-img"  style={{
                    }}/>

                    </div>

                    <p>{x.name}</p>
                    <p style={{color:"coral",fontWeight:"bold"}}>{x.dol}</p>

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
export default Shop;