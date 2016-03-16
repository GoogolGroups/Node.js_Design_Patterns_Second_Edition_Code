"use strict";

const React = require('react');
const Link = require('react-router').Link;
const xhrClient = require('../xhrClient');

class AuthorsIndex extends React.Component {
  static loadProps(params, cb) {
    xhrClient.get('authors')
      .then(response => {
        let authors = response.data;
        cb(null, {authors});
      })
      .catch(error => cb(error))
    ;
  }

  render() {
    return (
      <div>
        <h1>List of authors</h1>
        <ul>{
          this.props.authors.map(author =>
            <li key={author.id}><Link to={`/author/${author.id}`}>{author.name}</Link></li>
          )
        }</ul>
      </div>
    )
  }
}

module.exports = AuthorsIndex;