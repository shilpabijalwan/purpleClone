// 1. Create a component that consumes the `useRadio` hook
import {
  Box,
  HStack,
  Radio,
  RadioGroup,
  useRadio,
  useRadioGroup,
} from "@chakra-ui/react";
// import { render } from "server/reply";
function RadioCard(props) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderRadius="50px"
        boxShadow="md"
        _checked={{
          borderColor: "purple",
        }}
        px={5}
        py={1}>
        {props.children}
      </Box>
    </Box>
  );
}

// Step 2: Use the `useRadioGroup` hook to control a group of custom radios.
export function RadioButton() {
  const options = ["Home", "Office", "Other"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "framework",
    defaultValue: "Home",
    onChange: console.log,
  });

  const group = getRootProps();

  return (
    <HStack {...group} gap={5}>
      {options.map((value) => {
        const radio = getRadioProps({ value });
        return (
          <RadioCard key={value} {...radio}>
            {value}
          </RadioCard>
        );
      })}
    </HStack>
  );
}

// render(<RadioButton />);
