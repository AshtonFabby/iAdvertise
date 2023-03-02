import { Icon } from "@iconify/react";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className="footer footer-center p-10 bg-base-200 text-base-content rounded">
      <div className="grid grid-flow-col gap-4">
        <Link href="#" className="link link-hover">
          About
        </Link>
        <Link href="#" className="link link-hover">
          Jobs
        </Link>
        <Link href="#" className="link link-hover">
          Terms & Conditions
        </Link>
        <Link href="#" className="link link-hover">
          Contact
        </Link>
      </div>
      <div>
        <div className="grid grid-flow-col gap-4">
          <Link
            href="https://instagram.com/iadvertise_dot_store?igshid=YmMyMTA2M2Y="
            target="_blank"
          >
            <Icon icon="mdi:instagram" width="24" height="24" />
          </Link>

          <Link
            href="https://www.facebook.com/profile.php?id=100078034853646&mibextid=LQQJ4d"
            target="_blank"
          >
            <Icon icon="ic:baseline-facebook" width="24" height="24" />
          </Link>

          <Link href="https://twitter.com/IadvertiseStor1" target="_blank">
            <Icon icon="mdi:twitter" width="24" height="24" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/iadvertise-business-807869253"
            target="_blank"
          >
            <Icon icon="mdi:linkedin" width="24" height="24" />
          </Link>
          <Link
            href="https://www.youtube.com/@iadvetisestore2567"
            target="_blank"
          >
            <Icon icon="mdi:youtube" width="24" height="24" />
          </Link>
        </div>
      </div>
      <div>
        <p>Copyright © 2023 - All right reserved by iAdvertise (Pvt) Ltd</p>
      </div>
    </footer>
  );
};

export default Footer;
