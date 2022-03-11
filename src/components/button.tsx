import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Btn = styled.button``;

interface Props {
    readonly label: string;
    readonly disabled?: boolean;
    readonly onClick?: () => void;
    readonly type?: "button" | "reset" | "submit";
}

export const Button: FC<Props> = ({ disabled = false, label, ...props }) => 
<Container>
    <Btn {...props} disabled={disabled}>{label}</Btn>
</Container>;