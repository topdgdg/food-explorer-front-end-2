import styled from "styled-components";

export const container = styled.div`
display: flex;
align-items: center;
padding: 0 1.6rem;
border-radius: 0.8rem;
border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};
padding: 0 1.6rem;
border-radius: 0.8rem;
color: ${({ theme }) => theme.COLORS.GRAY_300};
background-color: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.BLUE_300};

svg {
    vertical-align: middle;
}

> button {
    border: none;
    background: none;
}

.button-delete {
        color: ${({ theme }) => theme.COLORS.RED};
    }

    .button-add {
        color: ${({ theme }) => theme.COLORS.BLUE};
    }

    > input {
        max-width: 13rem;
        height: 2.8rem;
        border: none;
        color: ${({ theme }) => theme.COLORS.WHITE};
        background: transparent;
        &::placeholder {
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

`;