export const fetchPieces = async () => {
  const res = await fetch(`http://localhost:3000/api/getPieces`);

  const data = await res.json();

  return data;
};
