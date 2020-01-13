import { getBase64Strings } from "exif-rotate-js/lib";

const elem = document.getElementById("fileImage");
const contailer = document.getElementById("container");

if (elem && contailer) {
  elem.onchange = async e => {
    if (!e.target) return;
    // @ts-ignore
    const data = await getBase64Strings(e.target.files, { maxSize: 280 });
    data.forEach(item => {
      contailer.innerHTML += `<img src=${item} />`;
    });
    console.log(contailer);
  };
}
