import { LockIcon } from "@chakra-ui/icons";
import {
  Avatar,
  AvatarBadge,
  Button,
  Flex,
  HStack,
  Heading,
  Spacer,
  Text,
  useToast,
} from "@chakra-ui/react";

const Navbar = () => {
  const toast = useToast();

  const showToast = () => {
    toast({
      title: "Logged Out",
      description: "You have to login to access your account again",
      status: "success",
      position: "top",
      isClosable: true,
      duration: 5000,
      icon: <LockIcon />,
    });
  };
  return (
    <Flex as={"nav"} mb={"40px"} p={"10px"} pt={"0px"} alignItems={"center"}>
      <Heading as={"h1"}>Chakra Tasks</Heading>
      <Spacer />

      <HStack spacing={"20px"}>
        <Avatar src="/img/mario.png">
          <AvatarBadge width={"1.3em"} bg={"teal.500"}>
            <Text fontSize={"xs"} color={"white"}>
              5
            </Text>
          </AvatarBadge>
        </Avatar>
        <Text>victor@chakra.com</Text>
        <Button onClick={showToast} colorScheme="purple">
          Logout
        </Button>
      </HStack>
    </Flex>

    // <Flex as={"nav"} bg={"gray.200"} justify={"space-between"}>
    //   <Box w={"150px"} h={"50px"} bg={"red"}>
    //     1
    //   </Box>
    //   <Box w={"150px"} h={"50px"} flexGrow={"1"} bg={"blue"}>
    //     2
    //   </Box>
    //   <Box w={"150px"} h={"50px"} bg={"yellow"}>
    //     3
    //   </Box>
    //   <Box w={"150px"} h={"50px"} flexGrow={"2"} bg={"green"}>
    //     4
    //   </Box>
    // </Flex>
  );
};

export default Navbar;
