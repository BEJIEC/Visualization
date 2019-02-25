import React from 'react'
import NewsTopPanel from './styled_components/NewsTopPanel'
import NewsContentBlock from './styled_components/NewsContentBlock'
import styled from 'styled-components'

const WindowWrapper = styled.div`
  display: inline-block;
  width: 600px;
  margin: 10px 10px;
  border: 1px solid black;
  box-shadow: 10px 10px 10px black;
`;

export default class NewsWindow extends React.Component{
    constructor(props){
        super(props);


    }

    render(){
        return (
            <WindowWrapper>
                <NewsTopPanel title={this.props.title}/>
                <NewsContentBlock/>
            </WindowWrapper>
        );
    }
}