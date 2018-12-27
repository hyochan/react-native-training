// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Image,
  Text,
  View,
  Alert,
  SectionList,
  Platform,
} from 'react-native';

import { ratio, colors } from '../../utils/Styles';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
    alignSelf: 'stretch',
  },
  icon: {
    width: 20 * ratio,
    height: 20 * ratio,
    marginRight: 8 * ratio,
  },
  itemHead: {
    height: 52 * ratio,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderBottomWidth: 1,
    paddingLeft: 20 * ratio,
    borderColor: 'rgb(227,227,227)',
  },
  itemHeadTxt: {
    color: 'rgb(155,155,155)',
    fontSize: 12 * ratio,
    lineHeight: Platform.select({
      android: Math.round(14 * ratio),
    }),
    marginTop: 28 * ratio,
  },
  itemBody: {
    flex: 1,
    paddingLeft: 20 * ratio,
    backgroundColor: 'white',
    height: 68 * ratio,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});

type Props = {

};
type State = {

}

class Screen extends Component<Props, State> {
  static navigationOptions = {
    title: 'SectionList',
  };

  state = {
    sectionData: [
      {
        title: 'title1',
        data: [
          { txt: 'text1' },
          { txt: 'text2' },
          { txt: 'text3' },
          { txt: 'text4' },
          { txt: 'text5' },
          { txt: 'text6' },
        ],
      },
      {
        title: 'title2',
        data: [
          { txt: 'text1' },
          { txt: 'text2' },
          { txt: 'text3' },
          { txt: 'text4' },
          { txt: 'text5' },
          { txt: 'text6' },
        ],
      },
    ],
  }

  renderSection = (section) => {
    return (
      <View style={styles.itemHead}>
        <Text style={styles.itemHeadTxt}>{section.title}</Text>
      </View>
    );
  }

  renderItem = (item) => {
    const title = item.txt;
    return (
      <TouchableOpacity
        activeOpacity={0.5}
        onPress={() => Alert.alert('click!!')}
        style={styles.itemBody}>
        {
          item.icon
            ? <Image source={item.icon} style={styles.icon}/>
            : null
        }
        <Text>{title}</Text>
      </TouchableOpacity>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          keyExtractor={(item, index) => item + index}
          style={styles.list}
          sections={ this.state.sectionData }
          renderItem={({ item }) => this.renderItem(item)}
          renderSectionHeader={({ section }) => this.renderSection(section)}
        />
      </View>
    );
  }
}

export default Screen;
