import styled from 'styled-components'
const Title=styled.h2`
color: white;
font-size: 20px;
text-align: center;
padding: 10px;

`;
const Container=styled.div`
  width: 90%;
  margin: auto;
  height: 100vh;
  background-color: grey;

`;
const Header=styled.div`
  width: 100%;
  background-color: teal;
  display: flex;
  justify-content: space-between ;
`
const Nav=styled.ul`
  width: 100%;
  display: flex;
  gap: 20px;
  justify-content: end;
  padding: 20px;
  padding-right: 30px;
  align-items: center;
`;
const Logo=styled.div`
   padding: 20px;
`

const Items=styled.li`
color: white;
cursor: pointer;
text-transform: capitalize;
`
const Hotel = () => {
  return (
    <Container>
     <Header>
      <Logo><Title>Deepak</Title></Logo>
      <Nav>
        <Items >home</Items>
        <Items>home</Items>
        <Items>home</Items>
        <Items>home</Items>
      </Nav>
     </Header>
    </Container>
  )
}

export default Hotel