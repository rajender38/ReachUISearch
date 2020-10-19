import React from 'react';
import TextInput from './common/TextInput';
import CheckBox from './common/CheckBox';
import { Table } from 'react-bootstrap';

export default function Login({ fields, checkboxValue, errors, onValidate, onChange, onClick, result,isStaticWebPages,onClickStatic }) {
  debugger;
  return (
    <form onSubmit={onValidate}>
<div style={{opacity:result.isFetching?0.5:1}}>
      <Table>
        <tbody>
          <tr>
            <td ></td>
            <td colSpan="2" align="center" >
              <h2>Search text in the search engine</h2>
            </td>
            <td></td>
          </tr>
          <tr>
            <td ></td>
            <td colSpan="2">
              <TextInput
                name='SearchText'
                label='Enter Text to Search'
                value={fields.SearchText}
                onChange={onChange}
                error={errors.SearchText}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">
              <TextInput
                name='FindURL'
                label='Enter URL to find'
                value={fields.FindURL}
                onChange={onChange}
                error={errors.FindURL}
              />
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">
              <ul>
                {

                  checkboxValue.Browser.map((browser) => {
                    return (<CheckBox onClick={onClick}  {...browser} />)
                  })
                }
              </ul>
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2" align="center">
              {result.isFetching?<h2>Loading...</h2>:<div></div>}
            </td>
            <td></td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="2">
                <CheckBox onClick={onClickStatic}  name='FindURL'
                label='Is info track static pages?'
                value={isStaticWebPages}  />
            </td>
            <td></td>
          </tr>

          <tr>
            <td></td>
            <td colSpan="2">
              <button type='submit' className='btn btn-primary'>
                Submit
            </button>
            </td>
            <td></td>
          </tr>
          <tr><td></td><td colSpan="2">
            <label htmlFor="lbloutput">{result.output===[]?result.output:result.output.output}</label>
          </td><td></td></tr>
        </tbody>
      </Table>

      </div>
    </form>
  );
}
