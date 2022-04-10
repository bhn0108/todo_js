import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、追加後入力値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //liを生成する
  //const li = document.createElement("li");
  //console.log(li);

  //divを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  //pを生成する
  const p = document.createElement("p");
  p.innerText = inputText;

  //divの下にpを生成する
  div.appendChild(p);
  console.log(div);

  //未完了のリストに追加する
  document.getElementById("incompleate-list").appendChild(p);
};

document
  .getElementById("add-content")
  .addEventListener("click", () => onClickAdd());
