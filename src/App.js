import React, { Component } from "react"
import axios from "axios"
import Movie from "./components/Movie"
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import "./App.scss";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
      movie: ""
    };
  }

  handleSearch = e => {
    NProgress.start()
    e.preventDefault();
    axios
      .get(
        `https://api.themoviedb.org/3/search/movie?api_key=27530fdbc7f1713e26852c635183cc82&language=en-US&query=${
          e.target.value
        }&page=1&include_adult=false`
      )
      .then(res => {
        if(res.data.results[0]){

          var id = res.data.results[0].id
        }
        return axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=27530fdbc7f1713e26852c635183cc82`)
      })
      .then(res =>
        this.setState({
          movie: res.data
        })
      );
      NProgress.done()
  };

  render() {
    return (
      <div className="App">
        <nav>
          <h1><span><i class="fas fa-film"></i></span>  Movies Finder</h1>

          <form onChange={this.handleSearch}>
            <input
              
              type="text"
              placeholder="Search for a movie!"
              value={this.state.value}
            />
            

          </form>
        </nav>

        <div className={this.state.movie ? "wrapper" : ""}>
          
          <Movie movie={this.state.movie} />
        </div>

      </div>
    );
  }
}

export default App;
