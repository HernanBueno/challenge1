import { Container, Stack , Text, Box, Image,Button } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import  React from 'react';
import api from '../product/api';
import {Product} from '../product/types';
import Link from 'next/link';
interface Props {
  result: Product;
}
const IndexPage: React.FC<Props> = ({result})=>{
  console.log({result});
  return   ( 
  <Container padding={4}  >
      <Stack width="100%" padding={4} backgroundColor='white' borderRadius={2}  boxShadow='sm'>
           <Stack direction={{base: 'column', sm:'row'}}justifyContent='space-between'>
               <Image width={256} height={256} src={result.image}/>
               <Stack maxWidth={320}>
                   <Text color='gray.500' fontSize='sm'>EStado - Vendidos</Text>
                   <Text fontSize='2xl' fontWeight="bold">{result.title}</Text>
                   <Text fontSize='4xl'>{result.price.toLocaleString('es-AR',{style:'currency', currency:'ARS'})}</Text>
                   <Button colorScheme='blue'>Comprar</Button>
               </Stack>
           </Stack>
        </Stack>
    </Container>
  );
};
export const getServerSideProps : GetServerSideProps = async ({query}) => {

  const result =  await api.fetch(query.id as string);
  return{
    props:{
      result,
    },
  };
};
export default IndexPage