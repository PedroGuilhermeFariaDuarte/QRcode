import styled from 'styled-components'

export const Container = styled.div.attrs({
  id: 'card'
})`
  width: 450px;
  height: 500px;
  border-radius: 10px;
  padding: 10px;

  backdrop-filter: blur(6px);
  background: linear-gradient(160deg,rgba(122, 76, 229, 0.1), rgba(4, 211, 97, 0.1));  

  hgroup {
    width: 100%;
    height: auto;    
    text-rendering: optimizeLegibility;
    line-height: 55px;
    text-align: center;

    h1,h4 {
    }

    h1 {
      background: linear-gradient(160deg,rgba(122, 76, 229, 0.70), rgba(4, 211, 97, 0.70));
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;      
    }

    h4 {
      font-size: 0.4em;
      user-select: none;
      cursor: default;
    }
  }

  display: flex;
  flex-flow: column;  
`
export const CardContent = styled.div.attrs({
  id: 'card-content'
})`
  width: 100%;  
  height: 100%;
  border-radius: 5px;
  border: 2px solid #4fe090;
  margin-bottom: 20px;
  position: relative;
  text-rendering: optimizeLegibility;

  display: flex;
  flex-flow: row nowrap;
  justify-content: center;
  align-items: center;

  svg {
    position: absolute;
    bottom: 10px;
    right: 10px;
  }
`

export const CardFooter = styled.div.attrs({
  id: 'card-footer'
})`
  width: 100%;  
  height:  auto;

  display: flex;
  flex-flow: column;
  align-self: flex-end;

  button {
    width: 100%;
    height: 65px;
    border: none;
    border-radius: 5px;
    background-color: rgba(130,87,230,0.20);
    
    outline: none;

    cursor: pointer;

    font-size: 0.5em;
    font-weight: 500;
    color: #e1e1e6;
    text-rendering: optimizeLegibility;

    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    transition: 0.2s cubic-bezier(0.27,-0.37, 0.63, 0.56);
  
    svg {
      font-size: 20px;
      fill: #a8a8b3;
      margin-right: 10px;
    }

    &:hover {
      backdrop-filter: blur(6px);
      background-color: rgba(130,87,230,0.70);
      transition: 0.3s cubic-bezier(0.27,-0.37, 0.63, 0.56);

      svg {        
        fill: #e1e1e6;        
      }    
    }
  }
`
