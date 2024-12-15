import React from 'react';
import { View, Text, FlatList, StyleSheet, Image } from 'react-native';
import { useSelector } from 'react-redux';
import AppHeader from '../../components/appHeader';
import styles from './styles';
import {Icons, Images} from '../../assets';

const OrderHistory = () => {
  const orders = useSelector((state) => state.orderHistory.orders);
  const placeholderImage = 'https://via.placeholder.com/50';
 console.log("Orders",orders[2])
  const renderOrder = ({ item }) => 
    (
    <View style={styles.orderContainer}>
      <View style={styles.productImagesRow}>
        {item.products.map((product) => {console.log('Product',product)}
        
        // (
        //   <Image
        //     key={product.id}
        //     source={{
        //         uri: product.image ? product.image : placeholderImage,
        //       }}
        //     style={styles.productImage}
        //   />
        // )
        
        )}
      </View>

    
      <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
      <Text style={styles.orderTitle}>Payment ID: {item.paymentId}</Text>
      <Text style={styles.details}>Placed on {new Date(item.orderDate).toLocaleDateString()}</Text>
      <Text style={styles.total}>Total Amount: ₹{item.totalAmount}</Text>
    

      
      <FlatList
        data={item.products}
        keyExtractor={(product) => product.id}
        renderItem={({ item: product }) => (
          <Text style={styles.total}>{product.name} {product.quantity} - ₹{product.price}</Text>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
  
  <AppHeader title='Orders'/>
      {orders.length === 0 ? (
        <View style={styles.noorder}>
        <Text style={styles.noordertext}>No orders yet</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={(order) => order.id}
          inverted
        />
      )}
    </View>
  );
};



export default OrderHistory;
