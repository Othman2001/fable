import { useCartState } from "../../custom-hooks/useCartState";
import * as Styled from "./Total.Styles";

export default function Total() {
    const { getTotal } = useCartState();
    return (
        <Styled.Container>
            <Styled.FlexContainer>
                <Styled.Text> Summary: </Styled.Text>
                <Styled.Text> {getTotal()} $</Styled.Text>
            </Styled.FlexContainer>
            <Styled.FlexContainer>
                <Styled.Text>Delivery: </Styled.Text>
                <Styled.Text> 30$ </Styled.Text>
            </Styled.FlexContainer>
            <Styled.FlexContainer>
                <Styled.BoldText>
                    Total:
                </Styled.BoldText>
                <Styled.BoldText> {getTotal() + 30} $</Styled.BoldText>
            </Styled.FlexContainer>
        </Styled.Container>
    )
}
