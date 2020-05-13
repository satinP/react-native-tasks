import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/pt-br';

import commonStyles from '../commonStyles';

export default props => {

  const styleDoneOrNot = props.doneDate != null ?
    { textDecorationLine: 'line-through' } : {};

  const date = props.doneDate ? props.doneDate : props.estimatedDate;
  const formattedDate = moment(date).locale('pt-br').format('ddd, D [de] MMMM');

  return (
    <View style={styles.container}>
      <View style={styles.checkContainer}>
        {getCheckView(props.doneDate)}
      </View>
      <View>
        <Text style={[styles.description, styleDoneOrNot]}>
          {props.description}
        </Text>
        <Text style={styles.date}>
          {formattedDate}
        </Text>
      </View>
      {/* <Text>{props.doneDate + ""}</Text> */}
    </View>
  );  
}

function getCheckView(doneDate) {
  if ( doneDate != null ) {
    return (
      <View style={styles.done}>
        <Icon name='check' size={20} color='#FFF' />
      </View>
    );
  } else {
    return (
      <View style={styles.pending}>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    borderColor: '#AAA',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingVertical: 10,
  },
  checkContainer: {
    width: '20%',
    alignItems: 'center',
    justifyContent: 'center',

  },
  pending: {
    height: 25,
    width: 25,
    borderRadius: 13,
    borderWidth: 1,
    borderColor: '#555',
  },
  done: {
    height: 25,
    width: 25,
    borderRadius: 13,
    backgroundColor: '#4D7031',
    alignItems: 'center',
    justifyContent: 'center',
  },
  description: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.mainText,
    fontSize: 15,
  },
  date: {
    fontFamily: commonStyles.fontFamily,
    color: commonStyles.colors.subText,
    fontSize: 12,
  },
});