import { Component } from 'react';
import { GlobalStyle } from './GlobalStyle';
import { Searchbar } from './Searchbar/Searchbar';
import { AppStyled } from "./App.styled"
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button';
import { Loader } from './Loader/Loader';
import { Modal } from './Modal/Modal';
import { ApiRequest } from 'API/API';
import { shadow } from 'styled-system';

const InitsialState = {
  query: "",
  page: 1,
  totalHits: 0,
  hits: [],
  loading: false,
  showModal: false
}

export class App extends Component {
  state = { ...InitsialState}


   componentDidUpdate(_, prevState) {
    const { query, page } = this.state
    if (prevState.query !== query) {
      this.formFetch(query)
    }
     
     if (prevState.page !== page) {
       this.loadMore(prevState ,page)
    }
  }


  render() {
    const { hits, page, totalHits, loading, showModal} = this.state
    const maxPage = Math.ceil( +totalHits / 12 )
    return (
      <AppStyled>
        <Searchbar updateQuery={this.updateQuery} />
        <ImageGallery imgs={hits} imageClick={this.showBigImage} />
        {page < maxPage && <Button title="Load more" onClick={this.updatePage} />}
        {loading && <Loader />}
        {showModal && <Modal />}
      
        <GlobalStyle />
      </AppStyled>
    );
  };


  updateQuery = (query) => {
    this.setState({query})
  }

  updatePage = () => {
    this.setState(({page}) => ({page: page + 1}))
  }

  formFetch = async (query) => {
    if (query === "") {
        this.setState({...InitsialState})
      } else {
        this.setState({loading: true})
        const { totalHits, hits } = await ApiRequest(query, 1)
        this.setState({ totalHits, hits, page: 1 })
        this.setState({loading: false})
      }
  }

  loadMore = async (prevState ,page) => {
    this.setState({ loading: true })
    const query = this.state.query
    const { hits } = await ApiRequest(query, page)
    this.setState({ hits:[ ...prevState.hits, ...hits], page})
    this.setState({ loading: false })
  }

  showBigImage = () => this.setState(({showModal}) =>({showModal: !showModal}))
}
