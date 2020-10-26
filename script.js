'use strict';
{
  // 列ごとの配列を作る処理 初め
  function createColumn(col){
    const source = [];
    for (let i = 0; i < 15; i++) {
      source[i] = i + 1 + 15 * col;
    }

    const column = [];

    for(let i = 0; i < 5; i++) {
      column[i] = source.splice(Math.floor(Math.random() * source.length), 1)[0];
    }

    return column;
  }

  function createColumns() {
    const columns = [];
    for(let i = 0; i < 5; i++) {
      columns[i] = createColumn(i);
    }
    columns[2][2] = 'FREE';
    return columns;
  };

    // console.table(columns);
  // 列ごとの配列を作る処理 終わり



    // 配列の縦と横の行を反転させる処理 初め
    function createBingo(columns){
      const bingo = [];
      for(let row = 0; row < 5; row++){
        bingo[row] = [];
        for(let col = 0; col < 5; col++){
          bingo[row][col] = columns[col][row];
        }
      }
      return bingo;
    }
    // 配列の縦と横の行を反転させる処理 終わり

    // ページに反映させている処理 初め
    function renderBingo(bingo){
      for(let row = 0; row < 5; row++){
        const tr = document.createElement('tr');
        for(let col = 0; col < 5; col++){
          const td = document.createElement('td');
          td.textContent = bingo[row][col];
          tr.appendChild(td);
        }
        document.querySelector('tbody').appendChild(tr);
      }
    }
    // ページに反映させている処理 終わり

    const columns = createColumns();
    const bingo = createBingo(columns);
    renderBingo(bingo);
}