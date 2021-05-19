import React, { Component, Fragment } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import AutoComplete from '../autocomplete/AutoComplete';
import { withRouter } from 'react-router-dom';

class SearchForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: '',
            suggestions: [],
        };
    }

    onChange = (e) => {
        this.setState({ text: e.target.value });

        //Make API call to elastic search to fetch suggestion
    };

    onSubmit = (e) => {
        e.preventDefault();
        // const query = this.replaceSpaces(this.state.text);
        // if (query.length > 0) {
        //   this.props.history.push(`/profile-search?query=${query}`);
        // }
    };

    replaceSpaces = (string) => {
        return string
        .trim()
        .split(' ')
        .filter((word) => word.length > 0)
        .join('+');
    };

    inputHandler = async (e) => {
        const { value } = e.target;
        // const data = await getSuggestions(value);
        // this.setState({ suggestions: data });
    };

    render() {
        const { suggestions, text } = this.state;
        return (
        <Fragment>
            <form
                className="home_top--search--form"
                onSubmit={this.onSubmit}
                autoComplete="off"
                >
                <input
                    type="text"
                    name="search-field"
                    placeholder="Try “writing creative contents”"
                    list="suggestions"
                    value={text}
                    onChange={this.onChange}
                    onInput={this.inputHandler}
                />
                {suggestions.length > 0 ? (
                    <AutoComplete
                    suggestions={suggestions}
                    elementClass="home-suggestions"
                    />
                ) : null}
                <button type="submit" className="button button-search">
                    <FontAwesomeIcon icon={faSearch} size="lg" className="visible-md" />
                    <span className="visible-lg">Search</span>
                </button>
            </form>
        </Fragment>
        );
    }
}

export default withRouter(SearchForm);
