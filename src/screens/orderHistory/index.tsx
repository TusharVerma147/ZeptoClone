import React from 'react';
import {View, Text, FlatList, StyleSheet, Image, StatusBar} from 'react-native';
import {useSelector} from 'react-redux';
import AppHeader from '../../components/appHeader';
import styles from './styles';
import {RootState} from '../../redux/store';
import colors from '../../theme/colors';

const OrderHistory = () => {
  const orders = useSelector((state: RootState) => state.orderHistory.orders);
  console.log('Orders', orders);
  const renderOrder = ({item}) => (
    <View style={styles.orderContainer}>
      <Text style={styles.orderTitle}>Order ID: {item.id}</Text>
      <Text style={styles.orderTitle}>Payment ID: {item.paymentId}</Text>
      <Text style={styles.details}>
        Placed on {new Date(item.orderDate).toLocaleDateString()}
      </Text>
      <Text style={styles.total}>Total Amount: ₹{item.totalAmount}</Text>

      <FlatList
        data={item.products}
        keyExtractor={product => product.id}
        renderItem={({item: product}) => (
          <Text style={styles.total}>
            {product.name} {product.quantity} - ₹{product.price}
          </Text>
        )}
      />
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} />
      <AppHeader
        title="Orders"
        uppercolor={colors.violet}
        backgroundColor={colors.violet}
        titleColor={colors.white}
        backcolor={colors.white}
      />
      {orders.length === 0 ? (
        <View style={styles.noorder}>
          <Text style={styles.noordertext}>No orders yet</Text>
        </View>
      ) : (
        <FlatList
          data={orders}
          renderItem={renderOrder}
          keyExtractor={order => order.id}
        />
      )}
    </View>
  );
};

export default OrderHistory;
