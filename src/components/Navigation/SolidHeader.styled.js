import styled from 'styled-components';

export const SolidHeaderWrapper = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;
    box-sizing: border-box;    
    background-color:${props=>props.theme.colors.primary} ;
    padding:15px 8px;

    .solid-header-nav{
        display:flex;
        align-items: center;
        position:relative;
        max-width:1200px;
        margin:auto;
        box-sizing:border-box;
        .search-bar-wrapper{
            flex:1;
            .search-bar-inner-wrapper{
                width:100%
            }
        }
        .auth-button{
            padding:10px 20px;
            float:right;
            border-radius: 40px;
            font-weight: bold;
            border:1px solid ${props=>props.theme.colors.neutralMidLight}
        }
    }
    @media (max-width:600px){
        .solid-header-nav{
            
            .search-bar-container{
                transition:0.5s all;
                display:none;
                opacity:0;
                width:100%;
                box-sizing:border-box;
                .close-button{
                    background-color: transparent;
                    font-size:20px;
                    min-width:35px;
                    color:${props=>props.theme.colors.neutralLightest}
                    
                }
            }

            .activate-search{
                flex:1;
                text-align: right;
                button{
                    font-size:18px;
                    color:${props=>props.theme.colors.neutralLightest};
                    background-color:transparent;
                }
            }
        }
        
    }

    .search-active{
        .search-bar-container{
            opacity:1;
            display:flex;
            align-items:center;
            justify-content: space-between;
            position:absolute;
            left:0;
            width:100%;
            box-sizing: border-box;
        }
        .activate-search{
            display:none;
        }
    }

    @media (min-width:600px){
        nav{
            .activate-search{
                display:none;
            }
            .search-bar-container{
                width:100%;
                margin:0 30px;
                .close-button{
                    display:none
                }
            }
        }
    }
`