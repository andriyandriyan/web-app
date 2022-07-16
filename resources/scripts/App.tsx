import { ChakraProvider } from '@chakra-ui/react';
import { memo, Suspense } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Layout, Preloader } from './components';
import Login from './pages/Login';
import routes from './routes';
import theme from './theme';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      cacheTime: 0,
    },
  },
});

const App = () => (
  <ChakraProvider resetCSS theme={theme}>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            {routes.map((route, i) => (
              <Route
                key={route.path}
                path={route.path}
                element={(
                  <Suspense fallback={<Preloader />}>
                    <route.component />
                  </Suspense>
                )}
                index={!i}
              />
            ))}
          </Route>
          <Route path="login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  </ChakraProvider>
);

export default memo(App);
