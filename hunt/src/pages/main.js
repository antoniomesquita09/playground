import React, { Component } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import api from '../services/api';
import styles from './styles';

export default class Main extends Component {
    static navigationOptions = {
        title: "Wave Hunter",
        headerStyle: {
            backgroundColor: '#000',
        },
        headerTintColor: '#fff'
    };

    state = {
        productInfo: {},
        docs: [],
        page: 1,
        screenHeight: Dimensions.get('window').height,
        screenWidth: Dimensions.get('window').width,
    };

    componentDidMount(){
        this.loadProducts();
    }

    loadProducts = async (page = 1) => {
        const response = await api.get(`/products?page=${page}`);

        const { docs, ...productInfo } = response.data;

        this.setState({ docs: [...this.state.docs, ...docs] , productInfo , page });
    }
    
    loadMore = () => {
        const { page, productInfo } = this.state;
        
        if(page === productInfo.pages) return;

        const pageNumber = page + 1;

        this.loadProducts(pageNumber);
    }

    scrollToTop = () => {
        this.scroller.scrollTo({x: 0, y: 0});
    };

    renderItem = ({ item }) => {
        return(
            <View style={styles.productContainer}>
                <Text style={styles.productTitle}>{item.title}</Text>
                <Text style={styles.productDescription}>{item.description}</Text>
                <TouchableOpacity
                style={styles.productButton}
                onPress={() => {this.props.navigation.navigate("Product", {product: item});}} >
                    <Text style={styles.productButtonText}>Acessar</Text>
                </TouchableOpacity>
            </View>
        );
    }

    render() {
        return(
            <ScrollView style={styles.container} ref={(scroller) => {this.scroller = scroller}}>
                <View style={styles.container}>
                    <FlatList
                    contentContainerStyle = {styles.list}
                    data = {this.state.docs}
                    keyExtractor = {item => item._id}
                    renderItem = {this.renderItem}
                    onEndReached = {this.loadMore}
                    onEndReachedThreshold = {0.1} />
                </View>
                <View>
                    <TouchableOpacity onPress={this.scrollToTop}>
                        <View>
                            <Text>Scroll to Top</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        );
    }
}