


export const getId = (dataArray) => {

  let highestId = 0;

  if(dataArray.length > 0) {
    const ids = dataArray.map((item) => item.id)
    highestId = Math.max(...ids);
  };
  return highestId;
}