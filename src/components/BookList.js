import React, { Component } from 'react'
import axios from 'axios'
import AllBook from './AllBook';

export default class BookList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            readStatus: false,
          };
          this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick = () => {
        this.setState({
            readStatus: !this.state.readStatus
        });
    }

      componentDidMount() {
        axios.get("http://localhost:8081/booklist/").then(
          result => {
            this.setState({
              isLoaded: true,
              items: result.data
            });
          },
          error => {
            this.setState({
              isLoaded: true,
              error
            });
          }
          );
      }

     

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
          return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
          return <div>Loading...</div>;
        } else {
          return (
              <>
                    <AllBook item={items}/>
             </>
          );
        }
      }
}

