import { Container, Stack , Text, Box } from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import  React from 'react';
import api from '../product/api';
import {Product} from '../product/types';
import Link from 'next/link';
interface Props {
  results: Product[];
}
const IndexPage: React.FC<Props> = ({results})=>{
  console.log({results});
  return   ( 
  <Container padding={4}  ><Stack width="100%" padding={4} backgroundColor='white' borderRadius={2}  boxShadow='sm'>
  {results.map(product =>
    <Link key={product.id} href={`/${product.id}`}>
    <a ><Stack direction='row' justifyContent='space-between' key={product.id}>
   <Stack direction='row'> <Box backgroundImage={`url(${product.image})`} backgroundPosition='center' backgroundSize='contain' backgroundRepeat='no-repeat' minWidth={180} minHeight={180} width={180} height={180} backgroundColor='gray.50' borderRadius='sm' />
    <Stack>
      <Text fontSize='2xl' fontWeight={500}>{product.price.toLocaleString('es-AR', {style:'currency', currency:'ARS'})}</Text>
      <Text fontSize='sm'>{product.title}</Text>
      
    </Stack>
    
    </Stack>
    <Text>{product.location}</Text>
  </Stack></a></Link>)}
  
    </Stack></Container>
  );
};
export const getServerSideProps : GetServerSideProps = async ({query}) => {

  const results =  await api.search(query.q as string);
  return{
    props:{
      results,
    },
  };
};
export default IndexPage