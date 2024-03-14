import { Container } from "./styles";

export function textarea({ value, ...rest })
{
    return (
        <Container {...rest}>
            {value}
        </Container>
    );
}