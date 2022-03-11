import React, { FC } from 'react';
import styled from 'styled-components';

const Container = styled.div``;
const Input = styled.input``;

interface Props {
    readonly disabled?: boolean;
    readonly onChange?: ({target}: {target: HTMLInputElement}) => void;
    readonly placeholder?: string;
    readonly type?: string;
    readonly value?: string;
}

export const TextInput: FC<Props> = ({ disabled = false, ...props }) => 
<Container>
    <Input {...props} disabled={disabled} />
</Container>;