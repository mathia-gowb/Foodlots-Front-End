import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
    .search-bar-inner-wrapper{
        width:100%;
        position:relative;
        margin:auto;
        .search-bar,.search-results{
            min-width:250px;
            width:100%;
            margin-left:auto;
            margin-right:auto;
        }
        .search-bar{
            padding:5px 0;
            background-color: ${props=>props.theme.colors.neutralLight};
            display:flex;
            position:relative;
            border-radius:3px;
            -webkit-border-radius:3px;
            -moz-border-radius:3px;
            -ms-border-radius:3px;
            -o-border-radius:3px;
            .search-categories{
                transition:0.4s all;
                display:flex;
                align-items: center;
                border-right: 1px solid ${props=>props.theme.colors.neutralMidLight};
                :hover{
                    color:${props=>props.theme.colors.primary}
                }
                span{
                    font-size: ${props=>props.theme.fontSize.small};
                }
                .icon{
                    margin-left:4px;
                    font-size:14px;
                }
            }
            input{
                background-color: transparent;
                outline:none;
                border:none;
                margin:0;
                padding:10px 10px
            }
            button{
                background-color: transparent;
                padding:5px 15px;
                color:${props=>props.theme.colors.neutral}
            }
    }
    .categories-dropdown{
        position:absolute;
        padding:5px 15px;
        box-sizing: border-box;
        top:100%;
        width:100%;
        z-index:5;
        background-color: ${props=>props.theme.colors.neutralLight};
        border-bottom-left-radius:3px;
        border-bottom-right-radius: 3px;
        .categories-options{
            button{
                padding:2px;
                background-color: transparent;
                text-align: left;
                border-bottom: 0.5px dotted ${props=>props.theme.colors.neutralMidLight};
                width:100%;
                :nth-last-child(1){
                    border-bottom: none;
                }
            }
            
        }
    }
    .search-results{
        background-color: white;
        margin-top:-1px;
        box-sizing:border-box;
        border-top:0.5px solid rgb(192, 192, 192);
        position:absolute;
        p{
            padding:6px 10px;
            border-bottom:1px solid rgb(230, 230, 230);
            font-size:15px;
            color:gray
        }
    }
}

`