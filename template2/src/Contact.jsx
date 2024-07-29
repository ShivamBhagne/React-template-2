const Contact=()=>{
    return(
        <>
        <div className="Contact1  ">
            <div className=" w-100 mt-5 pt-5 text-light h-100  ">
            <p className=" p-5 ms-5 mt-5 display-3 fw-bolder">Contact</p>
            </div>
            
        </div>


        <div className="d-flex flex-column flex-md-row col-12 container text-left mt-5">
            <div className="col-md-6">
                <h4>
                    CONTACT INFORMATION
                </h4>
                <p>
                We do not sell product from our corporate headquarters in New York City. If you want to visit, please reach out to our customer service team first.
                </p>
                <p>
                1201 Broadway
                <br />Suite 600
                </p>
                <h2>
                    <a className="text-dark" href="">help@example.com</a>
                </h2>

                <h6 className="mt-5">
                    FOLLOW US:
                </h6>
                <div className="d-flex mt-3 mb-3 gap-3">
                    <img className="foll" src="./icons8-facebook-50.png" alt="" />
                    <img className="foll" src="./icons8-instagram-50.png" alt="" />
                    <img className="foll" src="./icons8-youtube-50.png" alt="" />
                    {/* <img src="../" alt="" /> */}
                </div>
                
            </div>
            <div className="col-md-6">
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2099836804086!2d73.85787938060753!3d18.47414533777261!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2eaa3aa61852f%3A0x459248b131d8b6c8!2sEnvision%20Computer%20Training%20Institute%20Private%20Limited%20Pune!5e0!3m2!1sen!2snl!4v1721409834323!5m2!1sen!2snl" height="450" style={{border:'0',width:'100%'}}allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
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
export default Contact;