import React from 'react'
import styled from 'styled-components'
import SearchImg from '../../resources/search.svg'
import FilterImg from '../../resources/options.svg'

const Wrapper = styled.div`
  height: 50px;
  border-bottom: 1px solid black; 
`;

const Button = styled.img`
  width: 20px;
  margin: 15px 10px;
  float: right;
  cursor: pointer;
  
  :hover{
    border-bottom: 1px solid black;
  }
`;

const SearchButton = styled(Button)`

`;
const FilterButton = styled(Button)`

`;

const Title = styled.div`
  margin: 10px;
  display: inline-block;
  float: left;
  font-size: 25px;
`;

const SearchField = styled.input`
  width: 100px;
  height: 10px;
  margin: 20px 10px;
  float: right;
  font-size: 30px;
`;

export default class NewsTopPanel extends React.Component{
    constructor(props){
        super(props);

    }

    render(){
        return(
            <Wrapper>
                <FilterButton src={FilterImg}/>
                <SearchButton src={SearchImg}/>
                <SearchField/>
                <Title>
                    {this.props.title}
                </Title>
            </Wrapper>
        );
    }
}