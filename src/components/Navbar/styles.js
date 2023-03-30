import styled from 'styled-components';
export const Nav = styled.nav`
  padding: 0.5rem;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: space-between;

  h2{
    color:white;
    font-weight: 400;
    
    span{
      font-weight: 600;
    }
  }
  a{
    color: white;
    text-decoration: none;
    margin-right: 1rem;
    }

  .links{
    position: absolute;
    top: -700px;
    left: -2000px;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    transition: all .5s ease;
    a{
      color: white;
      font-size: 2rem;
      display: block;
    }
    @media(min-width: 768px){
      position: initial;
      margin: 0;
      display: block;
      a{
        font-size: 1rem;
        color: white;
        display: inline;
      }
    }
  }
  .links.active{
    width: 100%;
    display: block;
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    top: 30%;
    left: 0;
    right: 0;
    text-align: right;
    a{
      font-size: 2rem;
      margin-top: 1rem;
      color: white;
    }
  }

  .buttonMenuLateral{
    @media(min-width: 768px){
      display: none;
    }
  }
`

