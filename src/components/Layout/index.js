import Header from "../Header";
import Sidebar from "../Sidebar";
import { Container, SidebarContainer, ContentContainer, MainContainer } from "./styles";

export default function Layout({ children }) {
  return (
    <MainContainer>
      <Header></Header>
      <Container>
        <SidebarContainer>
          <Sidebar></Sidebar>
        </SidebarContainer>
        <ContentContainer>{children}</ContentContainer>
      </Container>
    </MainContainer>
  );
}
