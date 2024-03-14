import { Conteiner } from "./styles"

export function ButtonText({ icon: Icon, title, ...rest}) {
return (
    <Conteiner
    type="button"
    {...rest}
    >
        {Icon && <Icon size={34} />}
    </Conteiner>
);

}