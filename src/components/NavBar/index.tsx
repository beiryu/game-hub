import { HStack, Image } from "@chakra-ui/react";
import logo from "../../assets/logo.svg";
import ColorModeSwitch from "../ColorModeSwitch";
import SearchInput from "../SearchInput";
import { Link } from "react-router-dom";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="60px" />
      </Link>
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
