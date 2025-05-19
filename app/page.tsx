"use client";
import Image from "next/image";
import Link from "next/link";
import styled from "styled-components";

const popularPostList = [
  { id: 1, date: "25.05.16", title: "뭐해야하냐" },
  { id: 2, date: "25.05.16", title: "이거 미쳤다" },
  { id: 3, date: "25.05.16", title: "본인 돈버는 상상함" },
  { id: 4, date: "25.05.16", title: "아직도 빨강 파랑 둘..." },
];

export default function Home() {
  return (
    <>
      <TopBar>
        <Logo>MaskBook</Logo>
        <SignIn>Sign In</SignIn>
      </TopBar>

      <Main>
        <LeftPanel>
          <SearchBox>
            <Image
              src={"/iconmonstr-magnifier-lined.svg"}
              alt=""
              width={20}
              height={20}
            />
            <SearchInput></SearchInput>
          </SearchBox>
          <PopularArea>
            <PopularHeading>
              <span>🎵</span>
              <span>Popular</span>
            </PopularHeading>
            <List>
              {popularPostList.map(({ id, date, title }) => (
                <SLink href={`/post/${id}`} key={id}>
                  <ListRow>
                    <span>{title}</span>
                    <span>{date}</span>
                  </ListRow>
                </SLink>
              ))}
            </List>
          </PopularArea>
        </LeftPanel>
        <RightPanel>
          <Image src={"/ad.PNG"} alt="ad" fill />
        </RightPanel>
      </Main>
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
  display: grid;
  grid-template-columns: 7fr 3fr;
  gap: 3rem;
  margin: 3rem auto;
  margin-top: 130px;
  padding: 0 1rem;
  max-width: 1000px;
`;

const LeftPanel = styled.div`
  display: flex;
  flex-direction: column;
`;

const SearchBox = styled.div`
  height: 2rem;
  border: 2px solid black;
  border-radius: 2rem;
  padding: 0.2rem 1rem;
  display: flex;
  gap: 1rem;
  align-items: center;
`;

const SearchInput = styled.input`
  border: none;
  font-size: 1rem;
  &:focus {
    outline: none;
  }
`;

const PopularArea = styled.div`
  margin: 3rem;
`;

const SLink = styled(Link)`
  color: inherit;
  text-decoration: none;
`;

const PopularHeading = styled.div`
  font-size: 1rem;
  font-weight: 800;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding-bottom: 1rem;
  border-bottom: 2px solid rgba(48, 69, 223, 1);
  margin-bottom: 1rem;
`;
const List = styled.div``;
const ListRow = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  border-bottom: 2px solid rgba(48, 69, 223, 0.4);
`;

const RightPanel = styled.div`
  aspect-ratio: 1/2;
  position: relative;
  cursor: pointer;
`;
