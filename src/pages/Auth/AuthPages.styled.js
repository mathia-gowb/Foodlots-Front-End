import styled from 'styled-components';
 
export const AuthPagesWrapper = styled.div`

    background:linear-gradient(${props=>props.theme.colors.secondaryDark},${props=>props.theme.colors.secondary});
    background-size: cover;
    background-position: center;
    padding:10px;

    .auth-main-header{
        margin-bottom:25px;
        font-size:${props=>props.theme.fontSize.large};
        width:140px
    }
    .form-wrapper{
        background-color: ${props=>props.theme.colors.neutralLightest};
        padding:25px 20px;
        border-radius: ${props=>props.theme.borderRadius.containerSmall};
        width:100%;
        max-width:400px;
        border-top: 4px solid ${props=>props.theme.colors.primary};
        form{
            z-index:1;
            width:100%;

            .validation-message{
                color:rgb(255, 55, 55);
                margin-top:8px;
            }
            
            .input-wrapper .form-error{
                border : 2px solid rgb(255, 55, 55);
                background-color:rgb(255, 189, 189) ;
            }
    
            .input-wrapper .form-error,
            input{
                margin-top:18px;
                width:100%;
                box-sizing: border-box;
                padding:10px;
            }
            input{
                transition:0.3s all;
                border:none;
                border-bottom: 1.5px solid ${props=>props.theme.colors.neutralMidLight};
                outline:none;
                :focus{
                    background-color: ${props=>props.theme.colors.neutralLight};
                    border-bottom: 1.5px solid ${props=>props.theme.colors.primary};
                }
            }
            .redirect-links{
                a{
                    color:${props=>props.theme.colors.primary};
                    :hover{
                        color:${props=>props.theme.colors.primaryMidLight}
                    }
                }
                .redirect-links_forget-password{
                    margin-left:10px;
                }
            }
            .auth-submit-button{
                margin-top:20px;
                padding:15px;
                background-color:${props=>props.theme.colors.primary};
                color:white;
                width:100%;
                border-radius:${props=>props.theme.borderRadius.formInput}
            } 
        }
    }
`

export const LoginPageWrapper = styled(AuthPagesWrapper)`
    .password-input-wrapper{
        .toggle-password{
            width:100%;
            font-size:${props=>props.theme.fontSize.small};
            margin-top:10px;
            text-align:right;
            background-color:transparent
        }
    }
    .redirect-links{
        a{
            color:${props=>props.theme.colors.primary};
            :hover{
                color:${props=>props.theme.colors.primaryMidLight}
            }
        }
        .redirect-links_forget-password{
            margin-left:10px;
        }
    }

`
export const SignupPageWrapper = styled(AuthPagesWrapper)`
    .password2-wrapper{
        margin-top:-30px;
    }
    .password-input-wrapper{
        .toggle-password{
            width:100%;
            font-size:${props=>props.theme.fontSize.small};
            margin-top:10px;
            text-align:right;
            background-color:transparent
        }
    }
`