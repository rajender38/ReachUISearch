import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import SearchForm from './search';
import { GetResults } from '../redux/actions/userActions';

export function SearchPage({ output,isFetching, GetResults, ...props }) {
  debugger;
  const [fields, setFields] = useState({ ...props.fields });
  const [errors, setErrors] = useState({});
  const [checkboxValue, setCheckbox] = useState({

    Browser: [
      { id: 1, name: "Google", label: "Select Google", value: "Google", isChecked: true },
      { id: 2, name: "Bing", label: "Select Bing", value: "Bing", isChecked: false },
    ]

  });
  const[isStaticWebPages,setIsStaticPage]=useState({});

  useEffect(() => {
    debugger;

    setFields({ ...props.fields });

  }, [props.fields]);

  function handleChange(event) {
    debugger;
    const { name, value } = event.target;
    setFields((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function formIsValid() {
    const { SearchText, FindURL } = fields;
    const errors = {};
    if (!SearchText) errors.SearchText = 'SearchText is required';
    if (!FindURL) errors.FindURL = 'FindURL is required';
    setErrors(errors);
    return Object.keys(errors).length === 0;
  }

  function handleValidate(event) {
    debugger;
    event.preventDefault();
    if (!formIsValid()) return;
    debugger;
    const browse = checkboxValue.Browser
      .filter((e) => e.isChecked === true)
      .map(e => e.value)

    GetResults(fields,browse[0],true,isStaticWebPages).catch((e) => {
      alert('error' + e);
    });
    
  }

  function onClick(event) {
    debugger;
    let browser = checkboxValue.Browser
    browser.forEach(item => {
      item.isChecked=false;
      if (item.value === event.target.value)
        item.isChecked = event.target.checked
    })
    setCheckbox({ Browser: browser })
  }
  function onClickStatic(event) {
    debugger;
    const checked = event.target.checked;
    setIsStaticPage({ checked });
  }

  return (
    <SearchForm
      fields={fields}
      checkboxValue={checkboxValue}
      errors={errors}
      onChange={handleChange}
      onClick={onClick}
      onValidate={handleValidate}
      result={output}
      isFetching={isFetching}
      isStaticWebPages={isStaticWebPages}
      onClickStatic={onClickStatic}
    />
  );
}

SearchPage.propTypes = {
  output: PropTypes.object.isRequired,
  GetResults: PropTypes.func.isRequired,
};

function mapStateToProps(state, ownProps) {
  debugger;
  return {
    output: state.output,
    isFetching:state.isFetching
  };
}

const mapDispatchToProps = {
  GetResults,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
