import React, { Component } from 'react';
import { AppRegistry, Text, View, TouchableHighlight, StyleSheet } from 'react-native';
import { Constants } from 'expo';

export default class App extends Component {
   state = {
        teamOneScore: 0,
        teamTwoScore: 0,
    }
    
    teamOneTouchdown = () => {
        
        this.setState({ 
            teamOneScore: this.state.teamOneScore += 7
    })
    }
    
    teamOneFieldGoal = () => {
       this.setState({ 
            teamOneScore: this.state.teamOneScore += 3
    })
    }
    
    teamTwoTouchdown = () => {
        this.setState({ 
            teamTwoScore: this.state.teamTwoScore += 7
    })
    }
    
    teamTwoFieldGoal = () => {
        
        this.setState({ 
            teamTwoScore: this.state.teamTwoScore += 3
    })
    
    }
    
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.paragraph}>
                    FOOTBALL SCOREKEEPER
                </Text>
            
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.teamOneTouchdown}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 1 TOUCHDOWN!
                        </Text>
                    </TouchableHighlight>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.teamOneFieldGoal}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 1 FIELD GOAL!
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <View style={styles.buttonContainer}>
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.teamTwoTouchdown}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 2 TOUCHDOWN!
                        </Text>
                    </TouchableHighlight>
                    
                    <TouchableHighlight
                        style={styles.button}
                        onPress = {this.teamTwoFieldGoal}
                    >
                        <Text style={styles.buttonText}>
                            TEAM 2 FIELD GOAL!
                        </Text>
                    </TouchableHighlight>
                </View>
                
                <Text style={styles.paragraph}>
                    Team 1: {this.state.teamOneScore}
                </Text>
                
                <Text style={styles.paragraph}>
                    Team 2: {this.state.teamTwoScore}
                </Text>
                
            </View>
      );
   }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'green',
    },
    paragraph: {
        color: 'white',
        fontSize: 20,
        textAlign: 'center',
        fontWeight: 'bold',
    },
    buttonContainer: {
        flexDirection: 'row',
        
    },
    button: {
        height: 50,
        width: 80,
        backgroundColor: 'green',
        borderColor: 'white',
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonText: {
        color: 'white',
        fontSize: 10,
    },
}); 

/*
Fill in the logic for four functions, teamOneTouchdown, teamOneFieldGoal, teamTwoTouchdown, and teamTwoFieldGoal. Touchdowns should increase the state of the respective team by 7 and field goals should increase the score by 3.
Add an onPress function to each of the TouchableHighlight components that calls on one of the four functions listed in the previous step (take note of the text on each TouchableHighlight button to know which function to call)
In the bottom two Text components, call on each team’s current state using the JSX sytnax.*/
