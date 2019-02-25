import React, {Component} from "react";
import styled from 'styled-components'
import NewsWindow from './NewsWindow'

const Wrapper = styled.div`
  margin: 50px;
`;

export default class App extends Component {

    render() {
        return (
            <Wrapper>
                <NewsWindow title={'News'}/>
            </Wrapper>
        );
    }


}


