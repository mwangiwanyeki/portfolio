import Link from "next/link";

//  icons
import {
  RiGithubLine,
  RiLinkedinLine, 
  RiInstagramLine, 
  RiFacebookLine,  
  RiTwitterLine,
} from 'react-icons/ri'
import {BiSolidPhoneCall} from 'react-icons/bi';

const Socials = () => {
  return (
  <div className="flex items-center gap-x-5 text-lg ">
   <Link href={'https://github.com/mwangiwanyeki'} className="hover:text-accent transition-all duration-300 rounded-full p-1 border border-r-1 hover:border-accent" target="_blank">
   <RiGithubLine />
   </Link>
   <Link href={'https://www.linkedin.com/in/mwangi-wanyeki-0a607012a'} className="hover:text-accent transition-all duration-300 rounded-full p-1 border border-r-1 hover:border-accent" target="_blank">
   <RiLinkedinLine />
   </Link>
   <Link href={'https://www.facebook.com/wanyeki.mwangi.7?mibextid=ZbWKwL'} className="hover:text-accent transition-all duration-300 rounded-full p-1 border border-r-1 hover:border-accent" target="_blank">
   <RiFacebookLine />
   </Link>
   <Link href={'https://twitter.com/mwangiwanyeki'} className="hover:text-accent transition-all duration-300 rounded-full p-1 border border-r-1 hover:border-accent" target="_blank">
   <RiTwitterLine />
   </Link>
   <Link href={'tel:+254700010886p000'} className="hover:text-accent transition-all duration-300 rounded-full p-1 border border-r-1 hover:border-accent">
   <BiSolidPhoneCall />
   </Link>
  </div>
  );
};

export default Socials;
