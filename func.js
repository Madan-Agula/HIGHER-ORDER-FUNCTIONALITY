const library = [
    {
      title: "The Great Gatsby",
      author: "F. Scott Fitzgerald",
      year: 1925,
      pages: 180,
    },
    {
      title: "To Kill a Mockingbird",
      author: "Harper Lee",
      year: 1960,
      pages: 281,
    },
    {
      title: "1984",
      author: "George Orwell",
      year: 1949,
      pages: 328,
    },
    {
      title: "Pride and Prejudice",
      author: "Jane Austen",
      year: 1813,
      pages: 432,
    },
  ];
  //1------------------------
  const getTotalPages = function (library) {
    let sum = 0;
    library.forEach((x) => (sum += x.pages));
    console.log(sum);
  };
  getTotalPages(library);
  
  // -----------------------------------------------------------------------------------
  //2
  const getBookTitles = function (library) {
    const res = library.map((x) => x.title);
    console.log(res);
  };
  getBookTitles(library);
  
  // ---------------------------------------------------------------------------------------------
  //3
  const getBooksPublishedAfterYear = function (library) {
    const year = 1930;
    const filter = library.filter((x) => x.year > year);
    const res = filter.map((x) => x.title);
    console.log(res);
  };
  getBooksPublishedAfterYear(library);
  
  // ---------------------------------------------------------------------------------------------------
  //4
  const getAveragePages = function (library) {
    let sum = 0;
    library.forEach((x) => (sum += x.pages));
    console.log(Math.floor(sum / 2));
  };
  getAveragePages(library);
  
  // ----------------------------------------------------------------------------------------------------
  //5
  const getLongestBook = function (library) {
    let max = Number.MIN_VALUE;
    library.forEach((x) => {
      max = x.pages > max ? x.pages : max;
    });
    const res = library.filter((x) => x.pages === max);
    res.forEach((x) => console.log(x.title));
  };
  getLongestBook(library);
  
  // --------------------------------------------------------------------------------------------------------
  //6
  const getAuthorsAndBooks = function (library) {
    const res = library.reduce((res, curr) => {
      return { ...res, [curr.author]: curr.title };
    }, {});
    console.log(res);
  };
  getAuthorsAndBooks(library);
  
  // -----------------------------------------------------------------------------------------------------------
  //7
  const getTotalPagesByAuthor = function (library) {
    const res = library.reduce((res, curr) => {
      return { ...res, [curr.author]: curr.pages };
    }, {});
    console.log(res);
  };
  getTotalPagesByAuthor(library);
  
  // ---------------------------------------------------------------------------------------------------------------
  //8
  const getShortestBookByAuthor = function (library) {
    const short = 300;
    const filter = library.filter((x) => x.pages < short);
    console.log(filter);
    const res = filter.map((x) => {
      return { [x.author]: x.title };
    });
    console.log(res);
  };
  getShortestBookByAuthor(library);
  