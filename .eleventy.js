module.exports = function(eleventyConfig) {

  // eleventyConfig.addPassthroughCopy({'static':'.'});
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addPassthroughCopy("robots.txt");

  return {
    templateFormats: ['liquid', 'md', 'html'],
    dir: {
      input: 'src',
      output: '_site',
      // the following are relative to `input` above
      includes: '_includes',
      layouts: '_layouts',
      data: '_data'
    }
  };
};
