import { useSelector, useDispatch } from 'react-redux';
import { setFilterValue } from 'redux/Contacts/filtersSlice';
import { selectFilterValue } from 'redux/Contacts/selectors';

import { Label } from './Filter.stuled';

const Filter = () => {
  const value = useSelector(selectFilterValue);
  const dispatch = useDispatch();
  const onFilterName = ({ target: { value } }) => {
    dispatch(setFilterValue(value));
  };

  return (
    <Label>
      Find contacts by name:
      <input type="text" value={value} onChange={onFilterName} />
    </Label>
  );
};

export { Filter };
