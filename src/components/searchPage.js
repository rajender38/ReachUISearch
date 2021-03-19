import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchForm from './search';
import { GetResults } from '../redux/actions/userActions';

export function SearchPage({ output,isFetching, GetResults, ...props }) {
  
  const [fields, setFields] = useState({ ...props.fields });
  const [errors, setErrors] = useState([]);
  const [checkboxValue, setCheckbox] = useState({

    Browser: [
      { id: 1, name: "Google", label: "Select Google", value: "GoogleEngine", isChecked: true },
      { id: 2, name: "Bing", label: "Select Bing", value: "BingEngine", isChecked: false },
    ]

  });

  useEffect(() => {
    setFields({ ...props.fields });

  }, [props.fields]);

  function formIsValid() {
    const { SearchText, FindURL } = fields;
    const errors = {};
    if (!SearchText) errors.SearchText = 'SearchText is required';
    if (!FindURL) errors.FindURL = 'FindURL is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleValidate(event) {
    
    event.preventDefault();
    if (!formIsValid()) return;
    
    const browse = checkboxValue.Browser
      .filter((e) => e.isChecked === true)
      .map(e => e.value)

    GetResults(fields,browse[0],true).catch((e) => {
      alert('error' + e);
    });
    
  }

  function handleChange(event) {
    
    
    const { name, value,type,checked } = event.target;
    if(type==="checkbox")
    {
      let browser = checkboxValue.Browser
      browser.forEach(item => {
        item.isChecked=false;
        if (item.value === value)
          item.isChecked = checked
      })
      setCheckbox({ Browser: browser })
    }
    else{
      setFields((prevUser) => ({
        ...prevUser,
        [name]: value,
      }));
    }
  }

  return (
    <SearchForm
      fields={fields}
      checkboxValue={checkboxValue}
      errors={errors}
      onChange={handleChange}
      onValidate={handleValidate}
      result={output}
      isFetching={isFetching}
    />
  );
}

SearchPage.propTypes = {
  output: PropTypes.object.isRequired,
  GetResults: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  
  return {
    output: state.output,
    isFetching:state.isFetching
  };
}

const mapDispatchToProps = {
  GetResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
