import styled from 'styled-components';

export const SolidHeaderWrapper = styled.header`
    position:fixed;
    top:0;
    left:0;
    width:100%;    
    background-color:${props=>props.theme.colors.primary} ;
    padding:15px 5px;

    .solid-header-nav{
        display:flex;
        align-items: center;
        max-width:1200px;
        margin:auto;
        .search-bar-wrapper{
            flex:1;
            .search-bar-inner-wrapper{
                width:100%
            }
        }
        .logout-button{
            padding:5px 15px;
            float:right;
            border-radius: 3px;
            -webkit-border-radius: 3px;
            -moz-border-radius: 3px;
            -ms-border-radius: 3px;
            -o-border-radius: 3px;
        }
    }

`