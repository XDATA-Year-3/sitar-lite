# Sitar Lite
Display of [Vega](http://vega.github.io/vega/) visualizations from [Gists](https://gist.github.com/),
inspired by [Mike Bostock](http://bost.ocks.org/mike/)'s [bl.ocks.org](http://bl.ocks.org/).

Visit the [live application on Heroku](http://sitar.herokuapp.com/#jeffbaumes).

# Usage

Simply create a Vega specification in a Gist, and name the file `vega.json`.
See this basic [bar chart Gist](https://gist.github.com/jeffbaumes/2670d36da2d6fa72bcb3) and its corresponding
[Sitar view](http://sitar.herokuapp.com/#jeffbaumes/2670d36da2d6fa72bcb3). You can also use relative URLs in your Gist to point to data,
see this [Dimpvis plot Gist](https://gist.github.com/jeffbaumes/db6a578d53ff72fda392)
and its [Sitar view](http://sitar.herokuapp.com/#jeffbaumes/db6a578d53ff72fda392). These two examples
come from the [Vega examples](http://vega.github.io/vega-editor/) built by the core Vega team
at [Trifacta](http://www.trifacta.com/)
and the [UW Interactive Data Lab](http://idl.cs.washington.edu/).

Gist URLs are constructed as https://sitar.herokuapp.com/#username/gist-id.

User-level URLs are constructed as https://sitar.herokuapp.com/#username.

# About

This site utilizes a single-file [Tangelo](http://tangelo.readthedocs.org)
server to pull the Gist content using the GitHub API based on the URL.

Development is powered by [Kitware](http://www.kitware.com).

# License

Apache v2
