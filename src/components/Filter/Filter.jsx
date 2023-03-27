// import PropTypes from 'prop-types';
import { DebounceInput } from 'react-debounce-input';

import { useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/actions';
import { StyledFilter, StyledInput } from './Filter.styled';

export const Filter = () => {
  const dispatch = useDispatch();
  const changeFilter = e => dispatch(setFilterValue(e.target.value));

  // todo проверить Debounce
  return (
    <StyledFilter>
      Finde contacts by name
      <DebounceInput
        element={StyledInput}
        type="text"
        name="filter"
        minLength={2}
        debounceTimeout={300}
        onChange={changeFilter}
      />
    </StyledFilter>
  );
};

{/* <StyledInput
  type="text"
  name="filter"
  // value={value}
  onChange={changeFilter}
/>; */}

// Filter.propTypes = {
//   value: PropTypes.string.isRequired,
//   onChange: PropTypes.func.isRequired,
// };
