function getData(file) {
  const filePath = 'http://localhost:3001/';
  const promise = fetch(filePath + `${file}`).then((response) =>
    response.json()
  );
  return promise;
}
export default getData;
