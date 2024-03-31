import { memo } from 'react';
import { Button } from '@chakra-ui/react';

export const PrimaryButton = memo((props) => {
  const {
    children,
    isDisabled = false,
    loading = false,
    onClick,
    bg = 'purple.400',
    variant = 'solid',
  } = props;
  return (
    <Button
      bg={bg}
      color="white"
      _hover={{ opacity: 0.8 }}
      onClick={onClick}
      isLoading={loading}
      isDisabled={isDisabled || loading}
      variant={variant}
    >
      {children}
    </Button>
  );
});
