import React, { Component } from "react";
import { Highlight, connectAutoComplete } from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";

class AutoComplete extends Component {
  state = {
    value: this.props.currentRefinement,
  };

  onChange = (_, { newValue }) => {
    if (!newValue) {
      this.props.onSuggestionCleared();
    }

    this.setState({
      value: newValue,
    });
  };

  onSuggestionsFetchRequested = ({ value }) => {
    this.props.refine(value);
  };

  onSuggestionsClearRequested = () => {
    this.props.refine();
  };

  getSuggestionValue(hit) {
    return hit.name;
  }

  renderSuggestion(hit) {
    return (
      <>
        <Highlight
          attribute="name"
          hit={hit}
          tagName="mark"
          className="autocompleteCategory"
        />
        <br></br>
        <Highlight
          attribute="tags"
          hit={hit}
          tagName="mark"
          className="autocompleteTags"
        />
      </>
    );
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: "Search for a business...",
      onChange: this.onChange,
      value,
    };

    return (
      <AutoSuggest
        suggestions={hits}
        onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
        onSuggestionsClearRequested={this.onSuggestionsClearRequested}
        onSuggestionSelected={onSuggestionSelected}
        getSuggestionValue={this.getSuggestionValue}
        renderSuggestion={this.renderSuggestion}
        inputProps={inputProps}
      />
    );
  }
}

export default connectAutoComplete(AutoComplete);
