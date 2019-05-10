import React from "react";
import { ArtyCharty, ArtyChartyPie } from "arty-charty";
import { PieChart } from "react-native-svg-charts";

const StatisticsScreen = () => {
  const data = [50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80];

  const randomColor = () =>
    ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
      0,
      7
    );

  const pieData = data
    .filter(value => value > 0)
    .map((value, index) => ({
      value,
      svg: {
        fill: randomColor(),
        onPress: () => console.log("press", index)
      },
      key: `pie-${index}`
    }));

  return (
    <React.Fragment>
      <ArtyChartyPie
        data={{
          data: [
            { value: 0.6, color: "red" },
            { value: 5, color: "green" },
            { value: 3, color: "blue" }
          ]
        }}
      />
      <PieChart style={{ height: 200 }} data={pieData} />
    </React.Fragment>
  );
};
export default StatisticsScreen;

// import React from 'react';
// import {
//     // Text,
//     View,
//     Dimensions
// } from 'react-native';
// import {PieChart} from 'react-native-svg-charts'
// import { Circle, G, Line , Text} from 'react-native-svg'
//
//
// class StatisticsScreen extends React.PureComponent {
//
//     constructor(props) {
//         super(props);
//         this.state = {
//             selectedSlice: {
//                 label: '',
//                 value: 0
//             },
//             labelWidth: 0
//         }
//     }
//
//     render() {
//         const {labelWidth, selectedSlice} = this.state;
//         const {label, value} = selectedSlice;
//         const keys = [24,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
//         const values = [15, 25, 35, 45, 55, 15, 25, 35, 45, 55, 15, 25, 35, 45, 55, 15, 25, 35, 45, 55, 15, 25, 35, 45];
//         const colors = ['#600080', '#9900cc', '#c61aff', '#d966ff', '#ecb3ff', '#B10072', '#E43B5D',
//             '#FF7C4B', '#FFBB4B', '#F9F871', '#C61AFF', '#006CFF', '#008AFF', '#0095FF', '#0095D5', '#009286',
//         '#C61AFF', '#4E4351', '#B4A7B7','#009F92','#006560','#00A3FF','#00D9FF','#33FCED'];
//         const data = keys.map((key, index) => {
//             return {
//                 key,
//                 value: values[index],
//                 svg: {fill: colors[index]},
//                 arc: {outerRadius: (70 + values[index]) + '%', padAngle: label === key ? 0.1 : 0},
//                 onPress: () => this.setState({selectedSlice: {label: key, value: values[index]}})
//             }
//         })
//         const deviceWidth = Dimensions.get('window').width
//
//         const Labels = ({ slices }) => {
//             return slices.map((slice, index) => {
//                 const { labelCentroid, pieCentroid, data } = slice;
//                 console.log('index', index);
//                 console.log('slice', slice );
//                 return (
//
//                     <G key={ index }>
//                         <Line
//                             x1={ labelCentroid[ 0 ] }
//                             y1={ labelCentroid[ 1 ] }
//                             x2={ pieCentroid[ 0 ] }
//                             y2={ pieCentroid[ 1 ] }
//                         />
//                         <Text
//                             x={labelCentroid[ 0 ] }
//                             y={labelCentroid[ 1 ]}
//                             stroke="#600"
//                             fill="#600"
//                             textAnchor="middle">{index}</Text>
//                     </G>
//
//                 )
//             })
//         }
//
//         return (
//             <View style={{justifyContent: 'center', flex: 1}}>
//                 {console.log('data', data)}
//
//                 <PieChart
//                     style={{height: 200}}
//                     outerRadius={'80%'}
//                     innerRadius={'45%'}
//                     data={data}
//                     valueAccessor={({ item }) => item.key}
//                 >
//                 <Labels/>
//                 </PieChart>
//             </View>
//         )
//     }
// }
//
// export default StatisticsScreen;
//
// <Text
//     onLayout={({nativeEvent: {layout: {width}}}) => {
//         this.setState({labelWidth: width});
//     }}
//     style={{
//         position: 'absolute',
//         left: deviceWidth / 2 - labelWidth / 2,
//         textAlign: 'center'
//     }}>
//     {`${label} \n ${value}`}
// </Text>
//
// import React from 'react'
// import { PieChart } from 'react-native-svg-charts'
// import { Circle, G, Line , Text} from 'react-native-svg'
// // import {Text} from 'react-native';
//
// class StatisticsScreen extends React.PureComponent {
//
//     render() {
//
//         const data = [ 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 3, 15, 8, 3, 0.1, 0.1, 0.1, 0.1, 0.1, 0.1, 3, 5, 9, 8, 9, 19, 2, 3 ];
//
//         const randomColor = () => ('#' + (Math.random() * 0xFFFFFF << 0).toString(16) + '000000').slice(0, 7)
//
//         const pieData = data
//             .map((value, index) => ({
//                 value,
//                 svg: { fill: randomColor() },
//                 key: `pie-${index}`,
//             }))
//
//         const Labels = ({ slices }) => {
//             return slices.map((slice, index) => {
//                 const { labelCentroid, pieCentroid, data } = slice;
//                 console.log('index', index);
//                 console.log('slice', slice );
//                 return (
//
//                         index % 4 === 0 ? <G key={ index }>
//                             <Line
//                                 x1={ labelCentroid[ 0 ] }
//                                 y1={ labelCentroid[ 1 ] }
//                                 x2={ pieCentroid[ 0 ] }
//                                 y2={ pieCentroid[ 1 ] }
//                                 stroke={ data.svg.fill }
//                             />
//                             <Text
//                                 x={labelCentroid[ 0 ] }
//                                 y={labelCentroid[ 1 ]}
//                                 stroke="#600"
//                                 fill="#600"
//                                 textAnchor="middle">{index}</Text>
//                         </G> : null
//
//                 )
//             })
//         }
//
//         return (
//             <PieChart
//                 style={ { height: 200 } }
//                 data={ pieData }
//                 innerRadius={ 20 }
//                 outerRadius={ 55 }
//                 labelRadius={ 80 }
//             >
//                 <Labels/>
//             </PieChart>
//         )
//     }
//
// }
//
// export default StatisticsScreen
