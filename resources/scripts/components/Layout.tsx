import routes from '@/routes';
import {
  Box, Flex, Text, useDisclosure,
} from '@chakra-ui/react';
import { memo, useEffect, useState } from 'react';
import {
  matchPath, Outlet, useLocation,
} from 'react-router-dom';
import Header from './Header';
// import DeleteDialog from './DeleteDialog';
import Sidebar from './Sidebar';

const Layout = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  const { pathname } = useLocation();

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const page = routes.find(route => {
      const match = matchPath(pathname, route.path);
      return match?.pathname === pathname;
    });
    document.title = page?.title || '';
  }, [pathname]);

  const clickMenu = () => {
    if (window.innerWidth < 868) {
      onOpen();
    } else {
      setShowSidebar(!showSidebar);
    }
  };

  return (
    <>
      <Box backgroundColor="#f5f5f5" minH="100vh">
        <Header onOpen={clickMenu} />
        <Sidebar isOpen={isOpen} onClose={onClose} left={showSidebar ? '0' : '-250px'} />
        <Box pl={[0, null, null, showSidebar ? '250px' : 0]} pt="60px" h="100%" transition="all .5s">
          <Flex p={[4, null, 8]} pb={4} as="main" minH="calc(100vh - 60px)" flexDir="column" justifyContent="space-between">
            <Outlet />
            <Box as="footer" textAlign="center" mt={4}>
              <Text>{`Copyright © ${new Date().getFullYear()}`}</Text>
            </Box>
          </Flex>
        </Box>
      </Box>
      {/* <DeleteDialog /> */}
    </>
  );
};

export default memo(Layout);
