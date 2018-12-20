import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addFriend } from './ReduxConfig';

class Home extends React.Component {
    render() {
        return (<View style={styles.container}>
            <View style={styles.innerContainer}>
                <Text>We have { this.props.friends.current.length } friends!</Text>
                {
                    this.props.friends.possible.map((friend, index) => (
                            <Button
                                key={ friend }
                                title={ `Add ${ friend }` }
                                onPress={() =>
                                    this.props.addFriend(index)
                                }
                            />
                        )
                    )
                }
            </View>
        </View>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignContent: 'center',
        justifyContent: 'center',
        flexDirection: 'row',
    },

    innerContainer: {
        justifyContent: 'center',
        flexDirection: 'column'
    }
})

const mapDispatchToProps = dispatch => (
    bindActionCreators({
      addFriend,
    }, dispatch)
  );

const mapStateToProps = (state) => {
    const { friends } = state
    return { friends }
  };
  
export default connect(mapStateToProps, mapDispatchToProps)(Home);