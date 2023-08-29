import "./style.css"
const Contact = () => {
    return (  
        <div id="contact">
            <div className="content-contact">
                <div className="left">
                    <div className="title">MY CONTACT</div>
                    <div className="address-items">
                        <i class="fa-solid fa-location-dot"><div>Ha Noi, Viet Nam</div></i>
                        <i class="fa-solid fa-phone"><div>0981231239123</div></i>
                        <i class="fa-solid fa-envelope"><div>dohoaduy0201@gmail.com</div></i> </div>
                </div>

                <div className="right">
                    <div className="content-right">
                    <div className="title">Send me a message</div>
                    <div className="description">If you have any work from me or any types of quries related to my tutorial, you can send me message from here. It's my pleasure to help you</div>
                    <form>
                    <div className="input">
                        <input placeholder="NAME" type="text"/>

                    </div>
                    <div className="input">
                        <input placeholder="EMAIL" type="text"/>
                    </div>
                    <div className="input"><input placeholder="MESSAGE" type="text"/></div>
                    <button>SEND NOW</button>
                    </form>
                    </div>
                </div>
            </div>

        </div>
    );
}
 
export default Contact;