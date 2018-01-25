import React from 'react';
import { func, string } from 'prop-types';

const SearchInformation = ({ formattedTotalResults }, { classnames }) => (<div className={classnames('information')}>{formattedTotalResults} results found</div>);

SearchInformation.propTypes = { formattedTotalResults: string.isRequired };

SearchInformation.contextTypes = { classnames: func.isRequired };

export default SearchInformation;
