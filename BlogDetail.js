import React, { useState, useEffect } from 'react';
import { View, Text } from 'react-native';

const BlogDetail = ({ route }) => {
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const { id } = route.params;
    // Fetch blog data from database based on the ID passed in the navigation parameter
    fetch(`https://example.com/blogs/${id}`)
      .then((response) => response.json())
      .then((data) => setBlog(data))
      .catch((error) => console.error(error));
  }, [route.params]);

  if (!blog) {
    return <View><Text>Loading...</Text></View>;
  }

  return (
    <View>
      <Text>{blog.title}</Text>
      <Text>{blog.body}</Text>
    </View>
  );
};

export default BlogDetail;
