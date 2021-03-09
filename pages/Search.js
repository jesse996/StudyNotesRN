import React, {useEffect, useRef, useState} from 'react';
import {Text} from 'react-native';
import {View} from 'react-native';
import {SearchBar} from 'react-native-elements';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');
  const updateSearch = (search) => {
    setSearch(search);
  };
  const inputRef = useRef();
  useEffect(() => {
    inputRef.current.focus();
  });
  return (
    <View>
      {/* <Text>hahaha</Text> */}
      {/* 这searchBar有点慢 */}
      <SearchBar
        ref={inputRef}
        placeholder="Type Here..."
        onChangeText={updateSearch}
        value={search}
        platform="ios"
        cancelButtonTitle="取消"
        onCancel={() => navigation.goBack()}
      />
    </View>
  );
};

export default Search;
