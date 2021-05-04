import React, { Component } from "react";
import {
  Highlight,
  Snippet,
  connectAutoComplete,
} from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";
import {
  makeStyles,
  Typography,
  Avatar,
  Button,
} from "@material/mui-components";
import Link from "next/link";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
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
      type: "search",
    };

    return (
      <div className="inputDiv">
        <AutoSuggest
          suggestions={hits}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          highlightFirstSuggestion={true}
          shouldRenderSuggestions={() => true}
          // alwaysRenderSuggestions={true}
          inputProps={inputProps}
        />
        {!(value.trim() === "") && hits.length === 0 && (
          <div className="no-suggestions">
            <SearchOutlined fontSize="large" color="primary" />
            <Typography color="textSecondary" gutterBottom={true}>
              No results found for "{value.trim()}"
            </Typography>
            {/* <Link href="/search">
              <a>
                <Button variant="outlined">Go to Directory</Button>
              </a>
            </Link> */}
          </div>
        )}
      </div>
    );
  }
}

export default connectAutoComplete(AutoComplete);
