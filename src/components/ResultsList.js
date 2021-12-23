// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ResultsList = ({ title }) => {
//   return (
//     <View>
//       <Text>ResultList</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ResultsList;

// 2nd
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ResultsList = ({ title }) => {
//   return (
//     <View>
//       <Text style={styles.title}>{title}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });

// export default ResultsList;


// 3rd
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ResultsList = ({ title, results }) => {
//   return (
//     <View>
//       <Text style={styles.title}>{title}</Text>
//       <Text>Results: {results.length}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold'
//   }
// });

// export default ResultsList;


// 4th (FLATLIST)
// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';


// const ResultsList = ({ title, results }) => {
//   return (
//     <View>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal={true}
//         data={results}
//         keyExtractor={result => result.id}
//         renderItem={({ item }) => {
//           return <Text>{item.name}</Text>;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 15,
//   }
// });

// export default ResultsList;

//5th
// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';

// import ResultsDetail from './ResultsDetail';

// const ResultsList = ({ title, results }) => {
//   return (
//     <View>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal={true}
//         data={results}
//         keyExtractor={result => result.id}
//         renderItem={({ item }) => {
//           return <ResultsDetail result={item}/>;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 15,
//   }
// });

// export default ResultsList;


//6th
// import React from 'react';
// import { View, Text, StyleSheet, FlatList } from 'react-native';
// import ResultsDetail from './ResultsDetail';

// const ResultsList = ({ title, results }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         data={results}
//         keyExtractor={result => result.id}
//         renderItem={({ item }) => {
//           return <ResultsDetail result={item} />;
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 15,
//     marginBottom: 5,
//   },
//   container: {
//     marginBottom: 10
//   }
// });

// export default ResultsList;

//7th add resultshowscreen
// import React from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity
// } from 'react-native';
// import ResultsDetail from './ResultsDetail';

// const ResultsList = ({ title, results, navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         data={results}
//         keyExtractor={result => result.id}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() => navigation.navigate('ResultsShow')}
//             >
//               <ResultsDetail result={item} />
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 15,
//     marginBottom: 5
//   },
//   container: {
//     marginBottom: 10
//   }
// });

// export default ResultsList;

//8th same but use with navigation
// import React from 'react';
// import { View, Text, StyleSheet, FlatList, TouchableOpacity
// } from 'react-native';
// import ResultsDetail from './ResultsDetail';
// import { withNavigation } from 'react-navigation';


// const ResultsList = ({ title, results, navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>{title}</Text>
//       <FlatList
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         data={results}
//         keyExtractor={result => result.id}
//         renderItem={({ item }) => {
//           return (
//             <TouchableOpacity
//               onPress={() => navigation.navigate('ResultsShow')}
//             >
//               <ResultsDetail result={item} />
//             </TouchableOpacity>
//           );
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   title: {
//     fontSize: 18,
//     fontWeight: 'bold',
//     marginLeft: 15,
//     marginBottom: 5
//   },
//   container: {
//     marginBottom: 10
//   }
// });

// export default withNavigation(ResultsList);

//8th use result id
import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import ResultsDetail from './ResultsDetail';
import { withNavigation } from 'react-navigation';


const ResultsList = ({ title, results, navigation }) => {
  if (!results.length) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={results}
        keyExtractor={result => result.id}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
              onPress={() => navigation.navigate('ResultsShow',{id:item.id})}
            >
              <ResultsDetail result={item} />
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 15,
    marginBottom: 5
  },
  container: {
    marginBottom: 10
  }
});

export default withNavigation(ResultsList);






