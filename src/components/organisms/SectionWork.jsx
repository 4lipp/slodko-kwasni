import styled from "styled-components"


const workImages = [
    {
        name: "Praca 1",
        src: "./images/work_placeholder.png"
    },
    {
        name: "Praca 1",
        src: "./images/work_placeholder.png"
    },
    {
        name: "Praca 1",
        src: "./images/work_placeholder.png"
    },

    {
        name: "Praca 1",
        src: "./images/work_placeholder.png"
    },
]

export const SectionWork = () => {

    return <StyledWrapper>
        <StyledImage src="./images/work_placeholder.png"/>
        <StyledImage src="./images/work_placeholder.png"/>
        <StyledImage src="./images/work_placeholder.png"/>
        <StyledImage src="./images/work_placeholder.png"/>
        <StyledImage src="./images/work_placeholder.png"/>
    </StyledWrapper>
}

const StyledWrapper = styled("div")(({}) => ({
    marginTop: '200px',
    display:"flex",
    alignItems:"center",
    flexDirection:"column",
    gap:"32px",
}))

const StyledImage = styled("img")(({}) => ({
    width:"600px"
}))