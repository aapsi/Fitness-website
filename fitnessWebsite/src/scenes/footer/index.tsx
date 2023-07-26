import Logo from "@/assets/Logo.png";

const Footer = () => {
  return (
    <footer className="bg-primary-100 py-16">
        <div className="justify-content mx-auto w-5/6 gap-16 md:flex">
            <div className="mt-16 basis-1/2 md:mt-0">
                <img alt="logo" src={Logo} className="" />
                <p className="my-5">
                Join our fitness community and stay updated with the 
                latest news, events, and exclusive offers. 
                Subscribe to our newsletter and follow us on social media 
                to never miss a beat!</p>
                <p className="font-bold">
                    © evogym.in All RIghts Reserved.
                </p>
            </div>    
        
            <div className="mt-16 basis-1/4 md:mt-0">
                <h4 className="font-bold">Links</h4>
                <p className="my-5">Instagram</p>
                <p className="my-5">Twitter</p>
                <p className="my-5">Facebook</p>
            </div>
            <div>
                <h4 className="font-bold">Opening Hours</h4>
                <p className="my-5">Monday-Friday: 5am - 11pm</p>
                <p className="my-5">Saturday: 7am - 6pm</p>
                <p className="my-5">Sunday: 7am - 12pm</p>
            </div>
        </div>
    </footer>
  );
}

export default Footer;