import { EditIcon, ViewIcon } from "@chakra-ui/icons";
import {
  Avatar,
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const [tasks, setTasks] = useState();

  useEffect(() => {
    const taskLoader = async () => {
      const res = await fetch("http://localhost:5500/tasks");
      setTasks(await res.json());
    };

    taskLoader();
  }, [tasks]);

  return (
    <SimpleGrid spacing={10} minChildWidth={"300px"}>
      {tasks &&
        tasks.map((task) => (
          <Card key={task.id} borderTop={"8px"} borderColor={"purple.400"}>
            <CardHeader>
              <Flex gap={5}>
                <Avatar src={task.img} />
                <Box>
                  <Heading as={"h3"} size={"sm"}>
                    {task.title}
                  </Heading>
                  <Text>by {task.author}</Text>
                </Box>
              </Flex>
            </CardHeader>
            <CardBody color={"gray.500"}>{task.description}</CardBody>
            <Divider borderColor={"gray.200"} color={"gray.200"} />
            <CardFooter>
              <Button variant={"ghost"} leftIcon={<ViewIcon />}>
                watch
              </Button>
              <Button variant={"ghost"} leftIcon={<EditIcon />}>
                watch
              </Button>
            </CardFooter>
          </Card>
        ))}
    </SimpleGrid>
  );
};

export default Dashboard;
