"use client";

import styled from "styled-components";
import React from "react";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <TopBar>
        <Logo>MaskBook</Logo>
        <SignIn>Sign In</SignIn>
      </TopBar>
      <Main>{children}</Main>
    </>
  );
}

const TopBar = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  background-color: rgba(84, 9, 218, 1);
  box-sizing: border-box;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem;
`;

const Logo = styled.div`
  font-family: "Times New Roman", serif;
  font-weight: 800;
  font-size: 2.2rem;
  color: white;
  margin: 0;
  cursor: pointer;
`;

const SignIn = styled.button`
  background-color: rgba(78, 113, 255, 1);
  padding: 0.5rem 1.5rem;
  border: 1px solid;
  border-radius: 3px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  color: rgba(10, 10, 10, 0.7);
  &:hover {
    background-color: rgba(78, 113, 255, 0.8);
  }
  &:focus {
    cursor: pointer;
  }
`;

const Main = styled.div`
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 3rem auto;
  margin-top: 130px;
  padding: 0 1rem;
  max-width: 1200px;
`;
