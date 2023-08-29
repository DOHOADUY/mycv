import "./style.css"
const Services = () => {
    return (  
        <section id="price-section">
            <div className="container">
                <div className="row justify-content-center gapsectionsecond">
            <div className="col-lg-7 text-center">
                <div className="title-big pb-3 mb-3">
                    <h3>SERVICE</h3>
                </div>
                <p className="description-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus quas optio reiciendis deleniti voluptatem facere sequi, quia, est sed dicta aliquid quidem facilis culpa iure perferendis? Dolor ad quia deserunt.
                </p>
            </div>
        </div>
        <div className="row pt-5">
            <div className="col-lg-4 pb-5 pb-lg-0">
                <div className="wrap-price">
                    <div className="price-innerdetail text-center">
                        <p className="prices">UI/UX Design</p>
                        <div className="detail-pricing">
                            <span className="float-left"> <i className="bi bi-check2-circle"></i> We provide high-quality design for websites. It's important to have unique and attractive designs so that your audience sticks around with the site.</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 pb-5 pb-lg-0">
                <div className="wrap-price center-wrap">
                    <div className="price-innerdetail text-center">
                        <p className="prices">Web Design</p>
                        <div className="detail-pricing">
                            <span className="float-left"> <i className="bi bi-check2-circle"></i> We create websites that will bring value to your business. Here you can expect your dream website to built.</span>
                        </div>
                       
                    </div>
                </div>
            </div>
            <div className="col-lg-4 pb-5 pb-lg-0">
                <div className="wrap-price">
                    <div className="price-innerdetail text-center">
                        {/* <h5>Web Dev</h5> */}
                        <p className="prices">Web Dev</p>
                        <div className="detail-pricing">
                            <span className="float-left"> <i className="bi bi-check2-circle"></i> Armed with the newest technology, our front and back-end development teams bring your designs to life. We develop for the now and build for the longer</span>
                        </div>    
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>    

);
}
 
export default Services;
