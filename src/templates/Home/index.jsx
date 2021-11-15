// import logo from './logo.svg';
import React from "react";
import { Component } from "react";

import "./styles.css";

import { Posts } from "../../components/Posts";
import { loadPosts } from "../../utils/loadPosts";
import { Button } from "../../components/Button";
import { TextInput } from "../../components/TextInput";

export class Home extends Component {
  state = {
    posts: [],
    allPosts: [],
    page: 0,
    postsPerPages: 2,
    searchValue: "",
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const postsAndPhotos = await loadPosts();
    const { page, postsPerPages } = this.state;
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPages),
      allPosts: postsAndPhotos,
    });
  };

  lodeMorePosts = () => {
    const { page, postsPerPages, allPosts, posts } = this.state;

    const nextPage = page + postsPerPages;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPages);
    posts.push(...nextPosts);

    this.setState({ posts, page: nextPage });
  };

  handleChangeSearch = (event) => {
    const { value } = event.target;
    this.setState({ searchValue: value });
  };

  render() {
    const { posts, page, postsPerPages, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPages >= allPosts.length;

    const filteredPosts = !!searchValue
      ? allPosts.filter((post) => {
          return post.title.toLowerCase().includes(searchValue.toLowerCase());
        })
      : posts;

    return (
      <section className="container">
        <div className="search-container">
          {!!searchValue && (
            <h1>
              Search Value: <span>{searchValue}</span>
            </h1>
          )}

          <TextInput
            inputValue={searchValue}
            fnInputSearch={this.handleChangeSearch}
          />
        </div>

        {/** PostsListing **/}
        {filteredPosts.length > 0 && <Posts posts={filteredPosts} />}
        {filteredPosts.length <= 0 && <p>Nada encontrado :(</p>}

        <div className="bntt-container">
          {!searchValue && (
            <Button
              disabled={noMorePosts}
              text="Next Page"
              bttnClicked={this.lodeMorePosts}
            />
          )}
        </div>
      </section>
    );
  }
}
