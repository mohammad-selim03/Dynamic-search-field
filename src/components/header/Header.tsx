import BottomHeader from "./BottomHeader";
import MiddleHeader from "./MiddleHeader";
import TopHeader from "./TopHeader";
import SearchFeild from "./SearchFeild"

const Header = () => {
  return (
    <header>
      {/* TopHeader */}
      <TopHeader />
      <div>
        {/* Middle Header */}
        <MiddleHeader />
        {/* BottomHeader */}
        <BottomHeader />
        {/* Search Field practice */}
        <SearchFeild />
      </div>
    </header>
  );
};

export default Header;
