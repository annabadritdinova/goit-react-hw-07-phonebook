import { connect } from 'react-redux';
import { getFilter } from '../../redux/phonebook-selectors';
import * as phonebookActions from '../../redux/phonebook-actions';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => (
    
  <label className={styles.label}>
    Find contacts by name
      <input
        type="text"
        value={value}
        placeholder="Find"
        onChange={onChange}
        className={styles.input}
      />
  </label>    
);

const mapStateToProps = state => ({
   value: getFilter.state,
});

const mapDispatchToProps = dispatch => ({
   onChange: e => dispatch(phonebookActions.changeFilter(e.target.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);