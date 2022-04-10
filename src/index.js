import "./styles.css";

const onClickAdd = () => {
  //テキストボックスの値を取得し、追加後入力値を初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  //divを生成する
  const div = document.createElement("div");
  div.className = "list-row";

  //liを生成する
  const li = document.createElement("li");
  li.innerText = inputText;

  //button(完了)を生成する
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  //button(削除)を生成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    alert("削除");

    //押された削除ボタンの親(div)を未完了リストから削除する
    const deleteTarget = deleteButton.parentNode;
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  //divの下にpを生成する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

document
  .getElementById("add-content")
  .addEventListener("click", () => onClickAdd());
