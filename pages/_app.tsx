import React from 'react';
import {AppProps} from 'next/app';
import { ChakraProvider, Stack, Image, Input, IconButton,} from '@chakra-ui/react';
import {useRouter} from 'next/router';



const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  const router = useRouter();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>){
    event.preventDefault();
    console.log(event.target['query'].value)
    router.push(`/?q=${event.target['query'].value}`)
  };
  return (<ChakraProvider>
<Stack backgroundColor='gray.50' height='100%' minHeight='100vh'>
    <Stack 
    direction='row'
    padding={4}
    spacing='6'
    backgroundColor='yellow.400'>
      <Image w='50px'
      src='/logo.png'
      />
    
  <form style={{width: '100%'}} onSubmit={handleSubmit}><Stack direction='row' width='100%' spacing={0}>    
      <Input name='query' backgroundColor='white' roundedRight={0}/>
      <IconButton aria-label='Search Database' roundedLeft={0} icon={<img src='https://icongr.am/feather/search.svg?size=20&color=#666'/>}/></Stack></form>
      </Stack>
<Component {...pageProps} />
</Stack>
    </ChakraProvider>);
};

export default App
