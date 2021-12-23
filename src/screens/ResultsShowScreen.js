// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ResultsShowScreen = () => {
//   return (
//     <View>
//       <Text>Results Show</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ResultsShowScreen;

//2nd
// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// const ResultsShowScreen = ({ navigation }) => {
//   const id = navigation.getParam('id');
//   console.log(id);
//   return (
//     <View>
//       <Text>Results Show</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ResultsShowScreen;

//3rd
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import yelp from '../api/yelp';

// const ResultsShowScreen = ({ navigation }) => {
//   const [result, setResult] = useState(null);
//   const id = navigation.getParam('id');

//   console.log(result);

//   const getResult = async id => {
//     const response = await yelp.get(`/${id}`);
//     setResult(response.data);
//   };
//   useEffect(() => {
//     getResult(id);
//   }, []);

//   return (
//     <View>
//       <Text>Results Show</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default ResultsShowScreen;

// // 4th ( showing a list of images)
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, Image } from 'react-native';
import yelp from '../api/yelp';

const ResultsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  const getResult = async id => {
    const response = await yelp.get(`/${id}`);
    setResult(response.data);
  };
  useEffect(() => {
    getResult(id);
  }, []);
  

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={photo => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />;
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300,
    margin: 30,
  }
});

export default ResultsShowScreen;


