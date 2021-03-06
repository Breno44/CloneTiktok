import { Container, MenuItem, Following, FollowingHeader, InfoContainer, Links } from "./styles";
import User from "../User";

export default function Sidebar() {
  return (
    <Container>
      <MenuItem active>
        <img src="/images/homeIcon.svg"></img>
        <span>Para Você</span>
      </MenuItem>
      <MenuItem>
        <img src="/images/peopleIcon.svg"></img>
        <span>Seguindo</span>
      </MenuItem>
      <Following>
        <FollowingHeader>Suas Principais Contas</FollowingHeader>
        <User
          user={{
            name: "Will Smith",
            username: "willsmith",
            avatar:
              "https://p16-sign-va.tiktokcdn.com/musically-maliva-obj/1646315618666501~c5_720x720.jpeg?x-expires=1633636800&x-signature=7oZKbfJduYnD9RTL36HMf7rJ5Mk%3D",
          }}
        ></User>
      </Following>
      <InfoContainer>
        <Links margin>
          <a>Inicio</a>
          <a>Sobre</a>
          <a>Sala de impresa</a>
          <a>Carreira</a>
          <a>ByteDance</a>
        </Links>
        <Links>
          <a>Ajuda</a>
          <a>Segurança</a>
        </Links>
        <Links>
          <a>Diretrizes da comunidade</a>
          <a>Termos</a>
        </Links>
        <Links margin>
          <a>Privacidade</a>
        </Links>
        <Links margin>
          <a>@ 2021 tiktok</a>
        </Links>
      </InfoContainer>
    </Container>
  );
}
