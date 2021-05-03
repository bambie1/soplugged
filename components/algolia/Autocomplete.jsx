import React, { Component } from "react";
import {
  Highlight,
  Snippet,
  connectAutoComplete,
} from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";
import { makeStyles, Typography, Avatar } from "@material/mui-components";
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
    // console.log({ hit });
    return hit.business_name;
  }

  renderSuggestion(hit) {
    return (
      <div className="suggestionDiv">
        <Avatar alt="Business Logo" src={hit.logo_url}>
          {hit.business_name.toUpperCase().charAt(0)}
        </Avatar>
        <div style={{ width: "100%", marginLeft: "5px" }}>
          <Typography
            className="suggestionCaption"
            dangerouslySetInnerHTML={{
              __html: hit._highlightResult.business_name.value,
            }}
          ></Typography>
          <Typography
            variant="body2"
            gutterBottom={true}
            dangerouslySetInnerHTML={{
              __html: hit._highlightResult.category.value,
            }}
            variant="caption"
            color="textSecondary"
          ></Typography>
          <Typography
            variant="body2"
            gutterBottom={true}
            dangerouslySetInnerHTML={{
              __html: hit._snippetResult.business_description.value,
            }}
          ></Typography>
        </div>
      </div>
    );
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    // console.log({ hits });
    const inputProps = {
      placeholder: "What are you looking for?",
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
