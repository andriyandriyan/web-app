import { utils } from '@/helpers';
import {
  Box,
  Button,
  Flex,
  IconButton,
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { FC, memo } from 'react';
import {
  RiAccountCircleLine,
  RiArrowDownSLine,
  RiLogoutCircleRLine,
  RiMenuFoldLine,
} from 'react-icons/ri';
import { Link } from 'react-router-dom';

const Header: FC<{ onOpen(): void }> = ({ onOpen }) => {
  const { colors: { red } } = useTheme();

  const user = {
    name: 'Admin',
  };

  return (
    <Flex
      as="nav"
      boxShadow="base"
      h="60px"
      alignItems="center"
      backgroundColor="white"
      position="fixed"
      zIndex="99"
      w="100%"
    >
      <Box w={[0, null, null, '250px']} transition="all .5s">
        <Text
          fontSize="3xl"
          fontWeight="bold"
          textAlign="center"
          display={['none', null, null, 'block']}
        >
          Web App
        </Text>
      </Box>
      <IconButton
        variant="ghost"
        aria-label="Show hide side menu"
        icon={<RiMenuFoldLine size={20} />}
        boxShadow="none"
        color="black"
        ml={4}
        onClick={onOpen}
      />
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<RiArrowDownSLine />}
          ml="auto"
          mr={4}
          boxShadow="none"
          color="black"
          variant="ghost"
        >
          {user?.name}
        </MenuButton>
        <MenuList>
          <MenuItem as={Link} to="/account" fontSize="14px" icon={<RiAccountCircleLine size={18} />}>
            Akun
          </MenuItem>
          <MenuDivider />
          <MenuItem
            fontSize="14px"
            color={red[500]}
            icon={<RiLogoutCircleRLine size={18} />}
            onClick={() => utils.logout()}
          >
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Flex>
  );
};

export default memo(Header);
