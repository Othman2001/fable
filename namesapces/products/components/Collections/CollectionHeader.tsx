import * as Styles from "./CollectionHeader.Styles";

interface ICollectionHeaderProps {
    title: string
}

export default function CollectionHeader({ title }: ICollectionHeaderProps) {
    return (
        <Styles.Container>
            <Styles.Title> FABLE OF {title}</Styles.Title>
            <Styles.FlexContainer>
                <Styles.categoryTitle>All Collection for 2022 </Styles.categoryTitle>
                {/* <Styles.Sorting>
                    <p> SortBy:<Styles.SortingType> New</Styles.SortingType></p>
                </Styles.Sorting> */}
            </Styles.FlexContainer>
        </Styles.Container>
    )
}
