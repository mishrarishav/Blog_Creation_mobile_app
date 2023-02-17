import React, { useState, useEffect } from 'react';
import { View, FlatList, TouchableOpacity, Text } from 'react-native';

const BlogList = ({ navigation }) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    // Fetch blog data from database
  }, []);

  const handleBlogPress = (id) => {
    navigation.navigate('BlogDetail', { id });
  };

  return (
    <View>
      <FlatList
        data={blogs}
        keyExtractor={(blog) => blog.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => handleBlogPress(item.id)}>
            <Text>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default BlogList;
