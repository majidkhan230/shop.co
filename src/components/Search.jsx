import React from 'react';
import { AudioOutlined } from '@ant-design/icons';
import { Input } from 'antd';
const { Search } = Input;

const onSearch = (value, _e, info) => console.log(info?.source, value);
const SearchInput = () => (
  <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{
        width: "100%",
        borderBlockStyle:"solid",
      }}
    />
);
export default SearchInput;