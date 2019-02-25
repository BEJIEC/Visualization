import React from 'react'
import {observer} from 'mobx-react'
import styled from 'styled-components'
import newsStore from '../../stores/NewsStore'
import LinksImg from '../../resources/links.svg'

const NewsContentBlockWrapper = styled.div`
  height: 600px;
`;

const NewsContentBlockElementWrapper = styled.div`
  margin: 10px;
`;

const NewsContentBlockElementTitle = styled.div`
  font-size: 20px;
  height: 30px;
`;

const NewsContentBlockElementDescription = styled.div`
  font-size: 15px;
  height: 50px;
  margin: 15px 0;
`;

const NewsContentBlockElementDate = styled.div`
  font-size: 10px;
  margin: 35px 10px 35px 0;
  float: right;
`;

const NewsContentBlockElementLinksButton = styled.img`
  float: right;
  margin-right: 10px;
  margin-top: 10px;
  width: 10px;
`;

@observer
export default class NewsContentBlock extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NewsContentBlockWrapper>
                {newsStore.getNews().map((news) => {
                    return (
                        <NewsContentBlockElementWrapper key={news.id}>
                            <NewsContentBlockElementTitle>
                                {news.title}
                            </NewsContentBlockElementTitle>
                            <NewsContentBlockElementDescription>
                                {news.description}
                            </NewsContentBlockElementDescription>
                            <NewsContentBlockElementDate>
                                {news.date}
                            </NewsContentBlockElementDate>
                            <NewsContentBlockElementLinksButton src={LinksImg}/>
                        </NewsContentBlockElementWrapper>
                    );
                })}
            </NewsContentBlockWrapper>
        );
    }
}