import { Container, Content, Logo } from "./styles";
import logo_gray from '../../assets/logo_gray.svg'

export function Footer() {
    return (
      <Container>
        <Content>
            <Logo>
                <div className="logo">
                    <img src={logo_gray} />
                    <span>Food Explorer</span>
                </div>
            </Logo>
        </Content>
      </Container>
    );
}