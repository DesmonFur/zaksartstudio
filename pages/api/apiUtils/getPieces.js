export const fetchPieces = async () => {
  const res = await fetch(`http://localhost:3000/api/getPieces`);
  // const res = await fetch(`https://zaks.sanity.studio/api/getPieces`);
  console.log(res.json());
  const data = await res.json();
  // console.log(res  );
  return data;
};
