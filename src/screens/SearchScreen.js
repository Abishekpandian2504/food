// import React from 'react';
// import { View, Text, StyleSheet } from 'react-native';

// import SearchBar from '../components/SearchBar';

// const SearchScreen = () => {
//   return (
//     <View>
//       <SearchBar/>  
//       <Text>Search Screen</Text>
//     </View>
//   );
// };
// const styles = StyleSheet.create({});

// export default SearchScreen;


//2nd
// 4th call back function for detecting end
// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [results, setResults] = useState([]);
  

//   return (
//     <View>
//       <SearchBar
//         term={term}
//         onTermChange={newTerm => setTerm(newTerm)}
//         onTermSubmit={() => console.log('term was submitted')}
//       />
//       <Text>Search Screen</Text>
//       {/* <Text>{term}</Text> */}
//       <Text> we have found {results.length}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;


//3rd
// 6th Making the Request
// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [results, setResults] = useState([]);

//   console.log(results);

//   const searchApi = async () => {
//     const response = await yelp.get('/search', {
//       params: {
//         limit: 50,
//         term: term,
//         location: 'san jose'
//       }
//     });
//     setResults(response.data.businesses);
//   };

//   return (
//     <View>
//       <SearchBar 
//         term={term} 
//         onTermChange={setTerm} 
//         onTermSubmit={searchApi} 
//       />
//       <Text>Search Screen</Text>
//       <Text>We have found {results.length}</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;

// 6th Making the Request
// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [results, setResults] = useState([]);

//  // console.log(results);

//   const searchApi = async () => {
//     const response = await yelp.get('/search', {
//       params: {
//         limit: 50,
//         term: term,
//         location: 'san jose'
//       }
//     });
//     setResults(response.data.businesses);
//   };

//   return (
//     <View>
//       <SearchBar 
//         term={term} 
//         onTermChange={setTerm} 
//         onTermSubmit={searchApi} 
//       />
//       <Text>Search Screen</Text>
//       <Text>We have found {results.length} results</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;



// 7th Error Handling 
// to make error, go to yelp.js file and remove the space between Bearer and key.
// import React, { useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const searchApi = async () => {
//     try {
//       const response = await yelp.get('/search', {
//         params: {
//           limit: 50,
//           term,
//           location: 'san jose'
//         }
//       });
//       setResults(response.data.businesses);
//     } catch (err) {
//       console.log(err)
//       setErrorMessage('Something went wrong');
//     }
//   };
//   return (
//     <View>
//       <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
//       {/* <Text>{errorMessage}</Text> */}
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       <Text>We have found {results.length} results</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;

//8th use useEffect
// import React, { useEffect, useState } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import yelp from '../api/yelp';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [results, setResults] = useState([]);
//   const [errorMessage, setErrorMessage] = useState('');

//   const searchApi = async () => {
//     try {
//       const response = await yelp.get('/search', {
//         params: {
//           limit: 50,
//           term,
//           location: 'san jose'
//         }
//       });
//       setResults(response.data.businesses);
//     } catch (err) {
//       console.log(err)
//       setErrorMessage('Something went wrong');
//     }
//   };

//   useEffect(() => {
//     searchApi('vadai');
//   }, [] );
  
//   return (
//     <View>
//       <SearchBar term={term} onTermChange={setTerm} onTermSubmit={searchApi} />
//       {/* <Text>{errorMessage}</Text> */}
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       <Text>We have found {results.length} results</Text>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;


// 9th Extracting Hook Logic
// import React, { useState, useEffect } from 'react';
// import { View, Text, StyleSheet } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import useResults from '../hooks/useResults';
// import ResultsList from '../components/ResultsList';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [searchApi, results, errorMessage] = useResults();
//    console.log(results);

//   return (
//     <View>
//       <SearchBar
//         term={term}
//         onTermChange={setTerm}
//         onTermSubmit={() => searchApi(term)}
//       />
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       <Text>We have found {results.length} results</Text>
//       <ResultsList title="Cost Effective" />
//       <ResultsList title="Bit Pricier" />
//       <ResultsList title="Big Spender" />

//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;

// 11th Grouping Results
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import useResults from '../hooks/useResults';
// import ResultsList from '../components/ResultsList';

// const SearchScreen = ({ navigation}) => {
//   const [term, setTerm] = useState('');
//   const [searchApi, results, errorMessage] = useResults();
  
//   const filterResultsByPrice = price => {
//     // price === '$' || '$$' || '$$$'
//     return results.filter(result => {
//       return result.price === price;
//     });
//   };

//   console.log(results);
// return (
//     <View style={{flex: 1}}>
//       <SearchBar
//         term={term}
//         onTermChange={setTerm}
//         onTermSubmit={() => searchApi(term)}
//       />
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       <ScrollView>
//       <Text>We have found {results.length} results</Text>
//       <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" navigation={navigation}
//  />
//       <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier" navigation={navigation}
//  />
//       <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender" navigation={navigation}
//  />
//       </ScrollView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;

// //12th using without navigation(direct to screen)
// import React, { useState } from 'react';
// import { View, Text, StyleSheet, ScrollView } from 'react-native';
// import SearchBar from '../components/SearchBar';
// import useResults from '../hooks/useResults';
// import ResultsList from '../components/ResultsList';

// const SearchScreen = () => {
//   const [term, setTerm] = useState('');
//   const [searchApi, results, errorMessage] = useResults();
  
//   const filterResultsByPrice = price => {
//     // price === '$' || '$$' || '$$$'
//     return results.filter(result => {
//       return result.price === price;
//     });
//   };

//   //console.log(results);
// return (
//     <>
//       <SearchBar
//         term={term}
//         onTermChange={setTerm}
//         onTermSubmit={() => searchApi(term)}
//       />
//       {errorMessage ? <Text>{errorMessage}</Text> : null}
//       <ScrollView>
//       <Text>We have found {results.length} results</Text>
//       <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
//       <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"  />
//       <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"  />
//       </ScrollView>
//     </>
//   );
// };

// const styles = StyleSheet.create({});

// export default SearchScreen;

//12(own)
import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearchBar from '../components/SearchBar';
import useResults from '../hooks/useResults';
import ResultsList from '../components/ResultsList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResults();
  
  const filterResultsByPrice = price => {
    // price === '$' || '$$' || '$$$'
    return results.filter(result => {
      return result.price === price;
    });
  };

  //console.log(results);
return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
      <Text>We have found {results.length} results</Text>
      <ResultsList results={filterResultsByPrice('$')} title="Cost Effective" />
      <ResultsList results={filterResultsByPrice('$$')} title="Bit Pricier"  />
      <ResultsList results={filterResultsByPrice('$$$')} title="Big Spender"  />
      <ResultsList results={filterResultsByPrice('$$$$')} title="Richer"  />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({});

export default SearchScreen;