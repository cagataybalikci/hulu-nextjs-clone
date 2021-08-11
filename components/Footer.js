import footerLinks from "../utils/footerHeadings";
import FooterItem from "./FooterItem";
import FacebookIcon from "@material-ui/icons/Facebook";
import YouTubeIcon from "@material-ui/icons/YouTube";
import TwitterIcon from "@material-ui/icons/Twitter";
import InstagramIcon from "@material-ui/icons/Instagram";
function Footer() {
  return (
    <div className="my-10">
      <hr className="text-gray-500 my-5 opacity-50 mx-10" />
      <div className="flex-col  md:grid grid-cols-2 justify-between m-10">
        <div>
          <FooterItem
            title={footerLinks.browse.title}
            items={footerLinks.browse.data}
          />
        </div>
        <div className="md:flex">
          <FooterItem
            title={footerLinks.middle.title}
            items={footerLinks.middle.data}
          />
          <FooterItem
            title={footerLinks.help.title}
            items={footerLinks.help.data}
          />
          <FooterItem
            title={footerLinks.about.title}
            items={footerLinks.about.data}
          />
        </div>
      </div>
      <hr className="text-gray-500 my-5 opacity-50 mx-10" />
      <div className="m-10 flex">
        <a className="mr-5 cursor-pointer">
          <FacebookIcon />
        </a>
        <a className="mr-5 cursor-pointer">
          <TwitterIcon />
        </a>
        <a className="mr-5 cursor-pointer">
          <YouTubeIcon />
        </a>
        <a className="mr-5 cursor-pointer">
          <InstagramIcon />
        </a>
      </div>
      <div className="mx-10 text-xs font-light text-gray-500">
        <a className="mr-5 cursor-pointer hover:text-white">
          &copy; 2021 Hulu, LLC
        </a>
        <a className="mr-5 cursor-pointer hover:text-white">About Ads</a>
        <a className="mr-5 cursor-pointer hover:text-white">Terms of Use</a>
        <a className="mr-5 cursor-pointer hover:text-white">Privacy Policy</a>
        <a className="mr-5 cursor-pointer hover:text-white">
          Do Not Sell My Personal Information
        </a>
        <a className="mr-5 cursor-pointer hover:text-white">
          Your California Privacy Rights
        </a>
        <a className="mr-5 cursor-pointer hover:text-white">
          TV Parental Guidelines
        </a>
        <a className="mr-5 cursor-pointer hover:text-white">Sitemap</a>
      </div>
    </div>
  );
}

export default Footer;
