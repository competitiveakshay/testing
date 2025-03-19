import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="flex items-center justify-center gap-4 py-3 mt-20">
      <img src={assets.logo} alt="" width={150} />
      <p className="border-l border-gray-400 pl-4 text-sm text-gray-500 max-sm:hidden">
        Copyright @Imagify | All right reserved.
      </p>
    </div>
  );
};

export default Footer;
