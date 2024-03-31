import { memo } from "react";
import { Button } from "@chakra-ui/react";

export const PrimaryButton = memo((props) => {
  const { children, isDisabled = false, loading = false, onClick } = props;
  return (
    <Button
      bg="teal.400"
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      isDisabled={isDisabled || loading}
    >
      {children}
    </Button>
  );
});
