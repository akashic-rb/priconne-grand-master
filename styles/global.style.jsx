import styled from "styled-components";
import Link from "next/link";

export const List = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`

export const ListItem = styled.li`
    padding: 0;
    display: list-item;
`

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: unset;
    :hover {
        color: unset;
    }
`