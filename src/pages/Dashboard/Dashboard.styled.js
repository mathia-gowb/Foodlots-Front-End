import styled from "styled-components";
export const  DashboardWrapper = styled.main`
    background-color: ${props=>props.theme.colors.secondaryDark};
    padding:10px;
    #recipes-content-wrapper{
        padding-top:80px;
        min-height:100vh;
        max-width: 1200px;
        margin-left:auto;
        margin-right:auto;
        .recipes-section,.nav-secondary{
            margin-top:8px;
            width:100%;
            box-sizing: border-box;
            background-color: ${props=>props.theme.colors.secondaryMidDark};
            border-radius: 5px;
            -webkit-border-radius: 5px;
            -moz-border-radius: 5px;
            -ms-border-radius: 5px;
            -o-border-radius: 5px;
            padding:20px;
        }

    }
`