import { AtSignIcon, CalendarIcon, EditIcon } from "@chakra-ui/icons";
import { List, ListIcon, ListItem } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <List spacing={"20px"} color={"white"} fontSize={"1.2em"}>
      <ListItem>
        <NavLink to={"/"}>
          {" "}
          <ListIcon color={"white"} as={CalendarIcon} /> Dashboard
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={"/create"}>
          {" "}
          <ListIcon color={"white"} as={EditIcon} /> Create
        </NavLink>
      </ListItem>
      <ListItem>
        <NavLink to={"/profile"}>
          {" "}
          <ListIcon color={"white"} as={AtSignIcon} /> Profile
        </NavLink>
      </ListItem>
    </List>
  );
};

export default Sidebar;
