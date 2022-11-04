import * as Styles from "./CollectionHeader.Styles";

interface ICollectionHeaderProps {
    title: string
}

export default function CollectionHeader({ title }: ICollectionHeaderProps) {
    return (
        <>
            <Styles.Title> FABLE OF {title}</Styles.Title>
            <Styles.FlexContainer>
                <Styles.categoryTitle> {title} </Styles.categoryTitle>
            </Styles.FlexContainer>
        </>
    )
}
