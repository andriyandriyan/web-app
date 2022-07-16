import menus from '@/menus';
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListIcon,
  ListItem,
  Text,
  useTheme,
} from '@chakra-ui/react';
import { NavLink } from 'react-router-dom';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { FC, memo } from 'react';

interface SidebarProps {
  isOpen: boolean;
  onClose(): void;
  left: string;
}

const SidebarList = () => {
  const { colors: { brand } } = useTheme();

  return (
    <Scrollbars>
      <List>
        {menus.map(menu => (
          <ListItem key={menu.link}>
            <Box
              as={NavLink}
              to={menu.link}
              style={({ isActive }: { isActive: boolean }) => isActive ? { background: brand[100], color: brand[700] } : {}}
              py={3}
              px={8}
              display="flex"
              alignItems="center"
              _hover={{ background: 'brand.100', color: 'brand.700' }}
            >
              <ListIcon as={menu.icon} w="18px" h="18px" mr={4} />
              {menu.label}
            </Box>
          </ListItem>
        ))}
      </List>
    </Scrollbars>
  );
};

const Sidebar: FC<SidebarProps> = ({ isOpen, onClose, left }) => (
  <Box
    as="aside"
    w="250px"
    h="100%"
    py={4}
    backgroundColor="white"
    boxShadow="base"
    position="fixed"
    mt="60px"
    left={['-250px', null, null, left]}
    transition="all .5s"
  >
    <SidebarList />
    <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay>
        <DrawerContent maxW="18rem">
          <DrawerHeader borderBottomWidth="1px" p={0}>
            <Text>Web App</Text>
          </DrawerHeader>
          <DrawerBody p={0} onClick={onClose}>
            <SidebarList />
          </DrawerBody>
        </DrawerContent>
      </DrawerOverlay>
    </Drawer>
  </Box>
);

export default memo(Sidebar);
