import React from 'react';
import {FlatList, RefreshControl, View, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LogoutButtonComponent from '../components/logoutButtonComponent';
import globals from '../globals';
import {getTimezones, logout} from '../stores/actions';
import TimeZoneItem from '../components/timeZoneItem';
import styles from '../styles';

class TimezoneListPage extends React.PureComponent {
  static navigationOptions = () => ({
    headerTitle: '',
  });

  constructor(props) {
    super(props);
  }

  componentDidMount() {
    globals.onLogout = () => {
      this.props.logout({navigation: this.props.navigation});
    };
    this.loadData();
  }

  loadData = () => {
    this.props.getTimezones();
  };

  render() {
    const keyExtractor = (item, index) => `${item.id}_${index}`;
    const renderItem = item => <TimeZoneItem timeZone={item} />;
    return (
      <View>
        <View style={[styles.row, styles.spaceBetween]}>
          <Image
            style={componentStyles.mapImage}
            source={require('../assets/worldmap.png')}
          />
          <LogoutButtonComponent />
        </View>
        <FlatList
          refreshControl={
            <RefreshControl
              refreshing={this.props.Store.isTimeZonesFetching}
              onRefresh={() => this.loadData()}
            />
          }
          ListFooterComponent={<View style={styles.flatListFooterContainer} />}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) => renderItem(item)}
          data={this.props.Store.timeZones}
          keyExtractor={keyExtractor}
        />
      </View>
    );
  }
}

TimezoneListPage.propTypes = {
  navigation: PropTypes.shape().isRequired,
};

const mapStateToProps = state => ({Store: state.reducers});
const mapDispatchToProps = dispatch => ({
  logout: (...args) => {
    dispatch(logout(...args));
  },
  getTimezones: () => {
    dispatch(getTimezones());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TimezoneListPage);

const componentStyles = StyleSheet.create({
  mapImage: {
    height: 80,
    width: 196,
  },
});
