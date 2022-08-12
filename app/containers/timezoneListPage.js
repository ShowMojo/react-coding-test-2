import React from 'react';
import {FlatList, RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import LogoutButtonComponent from '../components/logoutButtonComponent';
import globals from '../globals';
import {getTimezones, logout} from '../stores/actions';
import TimeZoneItem from '../components/timeZoneItem';

class TimezoneListPage extends React.PureComponent {
  static navigationOptions = () => ({
    headerRight: LogoutButtonComponent,
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
      <FlatList
        refreshControl={
          <RefreshControl
            refreshing={this.props.Store.isTimeZonesFetching}
            onRefresh={() => this.loadData()}
          />
        }
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => renderItem(item)}
        data={this.props.Store.timeZones}
        keyExtractor={keyExtractor}
      />
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
