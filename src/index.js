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
    //押された削除ボタンの親(div)を未完了リストから削除する
    deleteFromIncompleteList(completeButton.parentNode);

    //押された完了ボタンの親(div)を完了リストに移動する
    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容を取得する
    const text = addTarget.firstChild.innerText;

    //addTargetを初期化する
    addTarget.textContent = null;

    //liを生成する
    const li = document.createElement("li");
    li.innerText = text;

    //buttonを生成する
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";

    //divの下に要素を生成する
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);

    //未完了のリストに追加する
    document.getElementById("complete-list").appendChild(addTarget);
  });

  //button(削除)を生成する
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親(div)を未完了リストから削除する
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  //divの下にpを生成する
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了のリストに追加する
  document.getElementById("incomplete-list").appendChild(div);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

document
  .getElementById("add-content")
  .addEventListener("click", () => onClickAdd());
