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
    borderWidth = '1px',
    color = 'white',
    _hover = { opacity: 0.8 },
    scheme = 'none',
  } = props;
  return (
    <Button
      bg={bg}
      color={color}
      _hover={_hover}
      onClick={onClick}
      isLoading={loading}
      isDisabled={isDisabled || loading}
      variant={variant}
      borderWidth={borderWidth}
      colorScheme={scheme}
    >
      {children}
    </Button>
  );
});
