import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <Link href="/">
      <Image src={"/Logo.svg"} width={150} height={20} alt="millenialchimes" />
    </Link>
  );
};

export default Logo;
