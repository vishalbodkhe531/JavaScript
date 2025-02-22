const shuffelElement = (arr) => {
  let lenghtOfArr = arr.length;
  while (lenghtOfArr > 0) {
    lenghtOfArr--;
    const randomIdx = Math.floor(Math.random() * lenghtOfArr);
    let temp = arr[lenghtOfArr];
    arr[lenghtOfArr] = arr[randomIdx];
    arr[randomIdx] = temp;
  }
  console.log(arr);
};

const arr = [5, 4, 8, 6, 1];

shuffelElement(arr);
