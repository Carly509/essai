/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
/* eslint-disable import/no-extraneous-dependencies */
import React from 'react';
import PropTypes from 'prop-types';
import {
  Modal, View, ActivityIndicator, StyleSheet,
} from 'react-native';
import Theme from '../../Theme';

class PageSpinner extends React.Component {
  render() {
    const { onRequestClose } = this.props;

    return (
      <Modal transparent onRequestClose={onRequestClose} {...this.props}>
        <View style={styles.container}>
          <ActivityIndicator size={Theme.specifications.activityIndicatorSize} color={Theme.gray.lightest} />
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

PageSpinner.propTypes = {
  onRequestClose: PropTypes.func,
};

PageSpinner.defaultProps = {
  onRequestClose: () => {},
};

export default PageSpinner;
