import styled from "styled-components";

export const Container = styled.div`
height: 825px;
background-color: #CEB3CB;
`


export const Maincon = styled.div`
display: flex;
align-items: center;
justify-content: center;
`

export const Mainleft = styled.div`
width: 440px;
height: 450px;
background: #B08EAD;
padding: 40px;
margin-top: 80px;

p{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FFFFFF;
    padding-top: 100px;
}
h1{
    font-family: 'Cormorant Garamond';
    font-style: normal;
    font-weight: 350;
    font-size: 45px;
    line-height: 55px;
    color: #FFFFFF;
    padding-top: 10px;
}
button{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #FFFFFF;
    border: none;
    width: 120px;
    border-bottom: 2px solid #fff;
    background: #B08EAD;
    padding-top: 22px;
    cursor: pointer;
}
`

export const Mainright = styled.img`
margin-top: 85px;
margin-left: -60px;
`

export const Beginnings = styled.div`
display: grid;
grid-template-columns: 1fr 1fr;
align-items: center;
justify-content: space-between;
margin-left: 173px;
margin-right: 112px;
padding-top: 80px;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
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
    color: #5F4D5D;
    padding-top: 10px;
}
`

export const Beginleft = styled.div`
padding-top: 100px;
`

export const Beginright = styled.img`
margin-top: 80px;
`

export const Carrer = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-right: 208px;
margin-top: 80px;
margin-left: 140px;
`
export const Carrerright = styled.div`
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
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
    color: #5F4D5D;
    padding-top: 20px;

}
button{
    border: 1px solid #B99BB6;
    border-radius: 25px;
    width: 145px;
    height: 45px;
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 11px;
    line-height: 15px;
    text-align: center;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #B99BB6;
    margin-top: 40px;
    &:hover{
        cursor: pointer;
        box-shadow: 1px 1px 2px black, 0 0 5px blue, 0 0 5px darkblue;
        background: #E6E6FA;
        color: #000;
    }
}
`

export const Carrerimg = styled.img`
`

export const Products = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin-top: 40px;
margin-left: 153px;
h1{
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 30px;
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
    color: #5F4D5D;
    padding-top: 20px;

    }
`

export const Productleft = styled.div`
`


export const Productsimg = styled.img`
margin-right: 112px;
`


export const Border = styled.div`
width: 1315px;
background: #D7B7D4;
border-bottom: 2px solid #D7B7D4;
margin-top: 50px;
margin-left: 60px;
`