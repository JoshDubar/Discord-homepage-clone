import React from "react";
import DiscordLogo from "./svgs/DiscordLogo";
import Twitter from "./svgs/socials/Twitter";
import Instagram from "./svgs/socials/Instagram";
import Facebook from "./svgs/socials/Facebook";
import Youtube from "./svgs/socials/Youtube";
import Button from "./Button";
import DownArrow from "./svgs/DownArrow";
import AmericanFlag from "./assets/AmericanFlag.png";

const FooterSection = ({ title, links = [] }) => (
  <div className="flex flex-col max-w-footer-section pt-4">
    <h5 className="text-blue">{title}</h5>
    {links.map((link) => (
      <a className="mt-2" href={`/${link}`} key={link}>
        {link}
      </a>
    ))}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-black pb-16 pt-20 text-white flex flex-col items-center justify-center">
      <div className="flex justify-between w-full max-w-footer mb-8">
        <div className="align-left ">
          <h4 className="text-section-mini-title text-blue font-semibold">
            Your place to talk
          </h4>
          <div className="my-6 flex items-center cursor-pointer">
            <img
              src={AmericanFlag}
              alt="american flag"
              className="mr-2 w-6 h-4"
            />{" "}
            English, USA
            <DownArrow className="ml-2" />
          </div>
          <div className="flex w-full">
            <a href="https://twitter.com/discord">
              <Twitter />
            </a>
            <a className="ml-6" href="https://www.instagram.com/discord/">
              <Instagram />
            </a>
            <a className="ml-6" href="https://www.facebook.com/discord/">
              <Facebook />
            </a>
            <a className="ml-6" href="https://www.youtube.com/discord/">
              <Youtube />
            </a>
          </div>
        </div>
        <FooterSection
          title="Product"
          links={[
            "Download",
            "Why Discord",
            "Inspiration",
            "College",
            "Nitro",
            "Status",
          ]}
        />
        <FooterSection
          title="Company"
          links={["About", "Jobs", "Branding", "Newsroom", "Store"]}
        />
        <FooterSection
          title="Resources"
          links={[
            "Support",
            "Safety",
            "Blog",
            "Feedback",
            "Partners",
            "Verification",
            "Developers",
            "StreamKit",
            "Open Source",
            "Security",
            "Moderation",
          ]}
        />
        <FooterSection
          title="Policies"
          links={[
            "Terms",
            "Privacy",
            "Guidelines",
            "Acknowledgements",
            "Licenses",
          ]}
        />
      </div>
      <div className="w-full h-px bg-blue mb-8 max-w-footer" />
      <div className="flex justify-between w-full max-w-footer">
        <DiscordLogo />
        <Button inverted size="sm" color="blue">
          Sign up
        </Button>
      </div>
    </footer>
  );
};

export default Footer;
