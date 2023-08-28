const numberArr = document.querySelectorAll('#number');
document.getElementById('chartContainer').style.display = 'none';
setTimeout(() => {
  console.log(
    (document.getElementById('chartContainer').style.display = 'grid'),
  );
  numberArr.forEach((nodelist) => {
    let load = 0;
    let num = Number.parseInt(nodelist.textContent);
    const runNum = () => {
      load++;
      if (load > num) {
        clearInterval(timer);
      }
      nodelist.textContent = `${load} %`;
    };
    let miliSec = (2 / num) * 1000;

    let timer = setInterval(runNum, miliSec);
  });
}, 2000);
