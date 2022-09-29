import styled from "styled-components";

export const Container = styled.div`
`


export const Formcon = styled.div`
display: flex;
align-items: center;
background: #CEB3CB;
height: 568px;
`


export const Formleft = styled.div`
h2{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-left: 200px;
    margin: 10px;


}
`

export const Formright = styled.div`
display: grid;
align-items: center;
justify-content: center;
margin-left: 100px;
background: #CEB3CB;
input{
    border: 1px solid #FFFFFF;
    width: 288px;
    height: 50px;
    margin-top: 20px;
    margin-left: 24px;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    padding-left: 20px;
    margin-right: 40px;
    background: #CEB3CB;
    &:hover{
      
      background: #FF6347;
      border: none;
      cursor: pointer;
    }
}
textarea{
    margin-top: 30px;
    margin-left: 20px;
    padding: 10px;
    border: 1px solid #FFFFFF;
    height: 103px;
    background: #CEB3CB;
    &:hover{
      
      background: #FF6347;
      border: none;
      cursor: pointer;
    }
}
button{
    border: 1px solid #FFFFFF;
    width: 210px;
    height: 50px;
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    margin-top: 25px;
    margin-left: 20px;
    background: #CEB3CB;
    cursor: pointer;
    &:hover{
      background: #FF6347;
      box-shadow: 1px 1px 2px black, 0 0 5px blue, 0 0 5px darkblue;
    }
}
`

export const Paragrif = styled.div`
margin-left: 25px;
 h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FFFFFF;
 }
 p{
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 30px;
    color: #FFFFFF;
 }
`


export const Input = styled.div`
display: flex;
align-items: center;
justify-content: center;
`




export const Newstart = styled.div`
text-align: center;
height: 230px;
margin-top: 100px;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #B99BB6;
}
p{
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 30px;
    text-align: center;
    color: #5F4D5D;
}
input{
    width: 218px;
    height: 60px;
    padding-left: 10px;
    margin-top: 13px;
    font-family: 'Cormorant Garamond';
    font-style: italic;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #CEB3CB;
    &:hover{
      
      background: #90EE90;
      border: none;
      cursor: pointer;
    }
}
button{
    background: #CEB3CB;
    border-radius: 0px 3px 3px 0px;
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    height: 60px;
    width: 179px;
    margin-top: 13px;
    border: none;
    cursor: pointer;
    &:hover{
      background: #FF6347;
      box-shadow: 1px 1px 2px black, 0 0 5px blue, 0 0 5px darkblue;
    }
    
}
`





