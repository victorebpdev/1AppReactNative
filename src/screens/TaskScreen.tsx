import React from 'react'
import { StyleSheet, View, Text } from 'react-native';

export const TaskScreen = () => {
  return (
     <View style={styles.container}>
        <View style={styles.purpleBox}/>
        <View style={styles.orangeBox}/>
        <View style={styles.blueBox}/>


     </View>
  )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    
   
    },
    orangeBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top:'10%'
   
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',

    }
})


/**
 * SOLUTION TASK 1 : add flex:1 to orange box
 * SOLUTION TASK 2 :
    add justifyContent:'center' to container and width:'100%' to blueBox

 * SOLUTION TASK 3 : add de following to:
    container:
        {
             justifyContent:'center',
        }
     blueBox:
        {
            alignSelf:'center',
        } ,
    purpleBox:
        {
             alignSelf:'flex-end',
        }

 * SOLUTION TASK 4 :
        container:{
            flex:1,
            backgroundColor:'#28425B',
            // alignItems:'stretch'
            justifyContent:'center', //task 2, task3


        },
            purpleBox:{
                width:100,
                height:100,
                borderWidth:10,
                borderColor: 'white',
                backgroundColor: '#5856D6',
                alignSelf:'flex-end',
                position:'absolute',
                top:0,

            },
            orangeBox:{
                width:100,
                height:100,
                borderWidth:10,
                borderColor: 'white',
                backgroundColor: '#F0A23B',
                alignSelf:'center', // task 3

                // flex:1, // task 1
            },
            blueBox:{
                // width:'100%', // task 2
                width:100,
                height:100,
                borderWidth:10,
                borderColor: 'white',
                backgroundColor: '#28C4D9',
                position:'absolute',
                // alignSelf:'center',
                bottom:0
            }
 * SOLUTION TASK 5 :
    container:{
        flex:1,
        backgroundColor:'#28425B',
        // alignItems:'stretch'
        justifyContent:'space-between', //task 2, task3
        flexDirection:'row'


    },
    purpleBox:{
        width:100,
        height:'100%',
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',

        // alignSelf:'flex-start',
        // position:'absolute',
        // top:0,

    },
    orangeBox:{
        width:100,
        height:'100%',

        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf:'center', // task 3

        // flex:1, // task 1
    },
    blueBox:{
        // width:'100%', // task 2
        width:100,
        height:'100%',

        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        // position:'absolute',
        // right:0,
        // top:0,

    }
 * SOLUTION TASK 6 :
     container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column'
    },
    purpleBox:{
        width:'100%',
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        flex:3,

    },
    orangeBox:{
        width:'100%',
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        flex:3,
    },
    blueBox:{
        width:'100%',
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        flex:6
    }

 * SOLUTION TASK 7 :
    container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',

    },
    orangeBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }

     * SOLUTION TASK 8 :

     container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'column',
        alignItems:'center',
        justifyContent:'center'
    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',

    },
    orangeBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        left:'25%'
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
    }
})
     * SOLUTION TASK 9 :
container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'row-reverse',
        alignItems:'center',

    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
        left:'25%'
   
    },
    orangeBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        // alignSelf:'flex-end'
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',
        alignContent:'space-between',
        top:'24%',
        right:'0%'
    }
     * SOLUTION TASK 10 :
      container:{
        flex:1,
        backgroundColor:'#28425B',
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'

    },
    purpleBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#5856D6',
    
   
    },
    orangeBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#F0A23B',
        top:'10%'
   
    },
    blueBox:{
        width:100,
        height:100,
        borderWidth:10,
        borderColor: 'white',
        backgroundColor: '#28C4D9',

    }
 */