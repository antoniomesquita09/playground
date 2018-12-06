import React from 'react';
import Search from './Search';
import unsplash from '../api/unspash';
import ImageList from './ImageList';

class App extends React.Component{
    state = { images: [] };
    onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos/',{
            params: { query: term },
        });
        this.setState({ images: response.data.results});
    }

    render(){
        return (
            <div className = "ui container" style={{marginTop: '10px'}}>
                <Search onSubmit={this.onSearchSubmit} />
                < ImageList images = {this.state.images} />
            </div>
        );
    }
}

export default App;