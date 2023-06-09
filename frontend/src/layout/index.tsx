import React, { useEffect } from 'react';

import Header from './header';
// import Footer from './footer';
import styled from 'styled-components';
import { useAppDispatch } from '../hooks';
import { loginSuccess } from '../store/reducers/user';
import background from '../assets/images/background.jpg';

const Container = styled.div`
min-height: 100vh;
background-size: cover;
background-image: url(${background});`;

interface Props {
  children: JSX.Element | JSX.Element[];
}

export default function Layout(props: Props): JSX.Element {
  const { children } = props;
  const dispatch = useAppDispatch();

  useEffect(() => {
    const userToken = localStorage.getItem("user_token");
    const userName = localStorage.getItem("user_name");
    if (userToken && userName) {
      dispatch(loginSuccess(userName));
    }
  }, [dispatch]);

  return (
    <Container>
      <Header />
      {children}
      {/* <Footer /> */}
    </Container>
  )
}