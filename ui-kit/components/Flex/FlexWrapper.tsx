export interface IFlexWrapperProps {
    children: React.ReactNode
}

export const FlexWrapper = ({ children }: IFlexWrapperProps) => {
    return (
        <>
            {children}
        </>
    )
}
