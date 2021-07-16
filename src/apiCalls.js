export function getData(file) {
  const filePath = 'http://localhost:3001/api/v1';
  const promise = fetch(`${filePath}/${file}`).then((response) =>
    response.json()
  );
  return promise;
}
