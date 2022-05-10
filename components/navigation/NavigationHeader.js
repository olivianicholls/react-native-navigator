import * as React from 'react';
import { Box, Center, Heading } from 'react-native';

function NavigationHeader ({
  children,
  route: { name }
}) {
  return (
    <Box pt="80px" top="-80px" bg="brand" mb="-80px" position="relative">
      <Center position="relative" bg="white" py={['sm']} px="gutter">
        <Heading fontSize="large">{children || name}</Heading>
      </Center>
      <Box
        position="absolute"
        left={0}
        right={0}
        bottom={-2}
        height="3px"
        bg="#00000029"
      />
    </Box>
  );
}

export default NavigationHeader;