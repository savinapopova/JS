function solve(arr) {
  return arr.reduce((acc, curr) => {
      if ( acc.length === 0 || curr >= acc[acc.length - 1]) {
          acc.push(curr);
      }
      return acc;
  }, []);
}
