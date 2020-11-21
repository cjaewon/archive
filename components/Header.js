import Link from "next/link";

const Header = () => {
  return (
    <div className="Header">
      <Link href="/">
        <img src="./logo.svg" alt="Cjaewon Logo" />
      </Link>
    </div>
  );
};

export default Header;