import { TextInput } from '@/components';
import { Box, Button, Container, Flex, Text } from '@chakra-ui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { FC, memo, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';

interface Schema {
  email: string;
  password: string;
}

const schema: Yup.SchemaOf<Schema> = Yup.object({
  email: Yup.string().required('Email harus diisi').email('Format email tidak valid'),
  password: Yup.string().required('Password harus diisi').typeError('Password harus diisi'),
});

const Login: FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState: { errors } } = useForm<Schema>({
    resolver: yupResolver(schema)
  });

  useEffect(() => {
    register('email');
    register('password');
  }, [register]);

  const onSubmit = handleSubmit(({ email, password }) => {
    setIsLoading(true);
  });

  return (
    <Flex>
      <Container maxW="50ch">
        <Text as="h1" fontSize={45} textAlign="center" fontWeight="bold" mt={8} mb={4}>
          Web App
        </Text>
        <Box p={6} my={1} borderRadius="base" borderWidth={1}>
          <Text textAlign="center" as="h4" fontWeight="500" fontSize={18} mb={4}>Masuk Dashboard</Text>
          <form onSubmit={onSubmit}>
            <TextInput
              label="Email"
              type="email"
              {...register('email')}
              error={errors.email?.message}
            />
            <TextInput
              label="Password"
              type="password"
              {...register('password')}
              error={errors.password?.message}
            />
            <Button type="submit" width="full" isLoading={isLoading}>
              Masuk
            </Button>
          </form>
        </Box>
      </Container>
    </Flex>
  );
};

export default memo(Login);
