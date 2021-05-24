import React, { Component } from "react";
import { connectAutoComplete } from "react-instantsearch-dom";
import AutoSuggest from "react-autosuggest";
import {
  makeStyles,
  Typography,
  Avatar,
  Button,
  Box,
} from "@material/mui-components";
import Link from "next/link";
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
    return hit.business_name || hit.name;
  }

  renderSectionTitle(section) {
    if (section.hits?.length > 0) return section.index;
  }

  getSectionSuggestions(section) {
    return section.hits;
  }

  renderSuggestionsContainer({ containerProps, children, query }) {
    return (
      <div {...containerProps}>
        {children}
        <Box textAlign="center">
          {query !== "" && (
            <Typography gutterBottom={true}>
              Results for <strong>{query}</strong>
            </Typography>
          )}

          <Link href="/search">
            <a>
              <Button variant="contained" color="secondary">
                Go to Directory
              </Button>
            </a>
          </Link>
        </Box>
      </div>
    );
  }

  renderSuggestion(hit) {
    const { tags, business_name, _highlightResult, _snippetResult } = hit;

    let tagsHtml = "";

    if (_highlightResult.tags && _highlightResult.tags.length > 0) {
      _highlightResult.tags.map((tag, index) => {
        if (index < _highlightResult.tags.length - 1) {
          tagsHtml += `${tag.value}, `;
        } else tagsHtml += tag.value;
      });
    }

    return (
      <>
        {business_name ? (
          <div className="suggestionDiv">
            <>
              <Avatar alt="Business Logo" src={hit.logo_url}>
                {hit.business_name?.toUpperCase().charAt(0)}
              </Avatar>
              <div style={{ width: "100%", marginLeft: "5px" }}>
                <Typography
                  className="suggestionCaption"
                  dangerouslySetInnerHTML={{
                    __html: _highlightResult.business_name?.value,
                  }}
                ></Typography>
                <Typography
                  variant="body2"
                  gutterBottom={true}
                  dangerouslySetInnerHTML={{
                    __html: _highlightResult.category?.value,
                  }}
                  variant="caption"
                  color="textSecondary"
                ></Typography>
                <Typography
                  variant="body2"
                  gutterBottom={true}
                  dangerouslySetInnerHTML={{
                    __html: _snippetResult?.business_description?.value,
                  }}
                ></Typography>
              </div>
            </>
          </div>
        ) : (
          <div className="suggestionDiv">
            <>
              <div style={{ width: "100%", marginLeft: "5px" }}>
                <Typography
                  className="suggestionCaption"
                  dangerouslySetInnerHTML={{
                    __html: _highlightResult.name?.value,
                  }}
                ></Typography>
                <Typography
                  variant="caption"
                  color="textSecondary"
                  dangerouslySetInnerHTML={{
                    __html: tagsHtml,
                  }}
                ></Typography>
              </div>
            </>
          </div>
        )}
      </>
    );
  }

  render() {
    const { hits, onSuggestionSelected } = this.props;
    const { value } = this.state;

    const inputProps = {
      placeholder: "What are you looking for?",
      onChange: this.onChange,
      value,
      type: "search",
      autoFocus: true,
    };

    // console.log({ hits });
    return (
      <div className="inputDiv">
        <AutoSuggest
          suggestions={hits}
          multiSection={true}
          onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
          onSuggestionsClearRequested={this.onSuggestionsClearRequested}
          onSuggestionSelected={onSuggestionSelected}
          getSuggestionValue={this.getSuggestionValue}
          renderSuggestion={this.renderSuggestion}
          highlightFirstSuggestion={true}
          shouldRenderSuggestions={() => true}
          renderSectionTitle={this.renderSectionTitle}
          getSectionSuggestions={this.getSectionSuggestions}
          inputProps={inputProps}
          focusInputOnSuggestionClick={false}
          renderSuggestionsContainer={this.renderSuggestionsContainer}
        />
      </div>
    );
  }
}

export default connectAutoComplete(AutoComplete);
