import {
  Box,
  Button,
  Checkbox,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const Create = () => {
  const [formdata, setFormdata] = useState({
    name: "",
    desc: "",
    priority: false,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formdata);
  };

  return (
    <Box maxW={"480px"}>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired mb={"40px"}>
          <FormLabel>Task name:</FormLabel>
          <Input
            onChange={(e) => setFormdata({ ...formdata, name: e.target.value })}
            type="text"
            name="name"
          />
          <FormHelperText>Enter a descriptive task name</FormHelperText>
        </FormControl>

        <FormControl mb={"40px"}>
          <FormLabel>Task description:</FormLabel>
          <Textarea
            placeholder="enter a detailed description for the task..."
            name="description"
            onChange={(e) => setFormdata({ ...formdata, desc: e.target.value })}
          />
        </FormControl>

        <FormControl display={"flex"} mb={"40px"} alignItems={"center"}>
          <Checkbox
            isChecked={formdata.priority}
            onChange={(e) =>
              setFormdata({ ...formdata, priority: e.target.checked })
            }
            name="isPriority"
            size={"lg"}
            colorScheme="purple"
          />
          <FormLabel ml={"10px"} mb={"0"}>
            Make this a priority task
          </FormLabel>
        </FormControl>

        <Button type="submit">Submit</Button>
      </form>
    </Box>
  );
};

export default Create;
