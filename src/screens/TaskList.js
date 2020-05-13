import React, { Component } from 'react';
import { View, Text, ImageBackground, StyleSheet, 
         FlatList, TouchableOpacity, Platform } from 'react-native';

import commonStyles from '../commonStyles.js'
import todayImage from '../../assets/imgs/today.jpg';

import Icon from 'react-native-vector-icons/FontAwesome';

import moment from 'moment';
import 'moment/locale/pt-br';

import Task from '../components/Task';

export default class TaskList extends Component {

  state = {
    showDoneTasks: true,
    tasks:[{
      id: Math.random(),
      description: 'Descricao 1',
      estimatedDate: new Date(),
      doneDate: new Date()
    }, {
      id: Math.random(),
      description: 'Descricao 2',
      estimatedDate: new Date(),
      doneDate: null
    }]
  }

  toggleDoneTask = taskId => {
    const clonedTasks = [...this.state.tasks]

    clonedTasks.forEach(task => {
      if (task.id === taskId) {
        task.doneDate = task.doneDate ? null : new Date();
      } 
    });

    this.setState({tasks: clonedTasks});
  }

  toggleShowDoneTask = () => {
    this.setState({showDoneTasks: !this.state.showDoneTasks});
  }

  render() {
    const today = moment().locale('pt-br').format('ddd, D [de] MMMM');

    return (
      <View style={styles.container}>
        <ImageBackground source={todayImage} 
                         style={styles.background}>
          <View style={styles.iconBar}>
            <TouchableOpacity onPress={this.toggleShowDoneTask}>
              <Icon name={this.state.showDoneTasks ? 'eye' : 'eye-slash'}
                    size={20} color={commonStyles.colors.secondary}/>
            </TouchableOpacity>
          </View>
          <View style={styles.titleBar}>
            <Text style={styles.title}>
              Hoje
            </Text>
            <Text style={styles.subtitle}>
              {today}
            </Text>
          </View>
        </ImageBackground>
        <View style={styles.taskList}>
          <FlatList data={this.state.tasks} keyExtractor={item => `${item.id}`} 
                    renderItem={(obj) => <Task {...obj.item} 
                    toggleDoneTask={this.toggleDoneTask} />} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 3,
  },
  taskList: {
    flex: 7
  },
  titleBar: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  title: {
    fontFamily: commonStyles.fontFamily,
    color:  commonStyles.colors.secondary,
    fontSize: 50,
    marginLeft: 20,
    marginBottom: 20,
  },
  subtitle: {
    fontFamily: commonStyles.fontFamily,
    color:  commonStyles.colors.secondary,
    fontSize: 20,
    marginLeft: 20,
    marginBottom: 30,
  },
  iconBar: {
    flexDirection: 'row',
    marginHorizontal: 20,
    justifyContent: 'flex-end',
    marginTop: Platform.OS === 'ios' ? 50 : 20
  }
});
