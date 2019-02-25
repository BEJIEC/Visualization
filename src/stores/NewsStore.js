import {observable, computed} from 'mobx'

class NewsStore {
    constructor(){

    }

    @observable news = [];

    @computed get getNews(){
        return this.news;
    }

    addNews(news){
        this.news.push(news);
    }
}

export default newsStore = new NewsStore();