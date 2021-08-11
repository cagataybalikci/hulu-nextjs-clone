import footerLinks from "../utils/footerHeadings";
import FooterItem from "./FooterItem";
function Footer() {
  return (
    <div className="my-10">
      <hr className="text-gray-500 my-5 opacity-50" />
      <div className="grid grid-cols-2 justify-between m-10">
        <div>
          <FooterItem
            title={footerLinks.browse.title}
            items={footerLinks.browse.data}
          />
        </div>
        <div className="flex justify-between">
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
      <hr className="text-gray-500 my-5 opacity-50" />
    </div>
  );
}

export default Footer;
