let dataObj;
let namesObj;
let newData;
let dollarRate = 40;
let priceValue;
let oldPrice = priceValue;

async function test() {
  // получаем наши данные и записываем их в перемнные
  await fetch("data.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      dataObj = data;
    });
  await fetch("names.json")
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      namesObj = data;
    });

  // создаём общую структуру для обоих json
  const goodsCart = await generateGoodsCart(namesObj, dataObj);
  newData = goodsCart;
  // рендерим полученые данные
  render(goodsCart, document.querySelector(".content__items"));
  // добавляем в корзину
  addToCart(goodsCart);
  // удаляем из корзины
  deleteCartItem();
}
test();

// функция создания общей структуры
const generateGoodsCart = (groups, adds) =>
  Object.keys(adds.Value) // извлекаем ключи
    .reduce((acc) => {
      const { Goods } = adds.Value;
      Goods.forEach((param) => {
        const { [param.G]: group } = groups; // извлекаем группу
        if (!group) {
          return;
        }
        if (!acc[param.G]) {
          // если в генерируемой модели отсутствует группа
          // то добавляем данную структуру
          acc[param.G] = {
            groupId: param.G,
            groupName: group.G,
            additionals: [],
          };
        }
        const {
          B: { [param.T]: unit },
        } = group; // извлекаем товар
        if (!unit) {
          return;
        }
        // добавляем структуру дополнений к товару
        acc[param.G].additionals.push({
          id: param.T,
          name: unit.N,
          cost: param.C,
          quantity: param.P,
        });
      });
      return acc;
    }, {});

function render(obj, wrap) {
  for (let key in obj) {
    // проходимся по основным ключам
    const contentItem = document.createElement("div");
    contentItem.classList.add("item");
    // создаём структуру товара
    contentItem.innerHTML = `
			  <details>
			  <summary>${obj[key].groupName}</summary>
			  <div class="item-hidden">
			  ${obj[key].additionals
          .map((item, index) => {
            // проходимся по дополнениям внутри основной группы
            priceValue = (item.cost * dollarRate).toFixed(2);
            const hiddenContent = document.createElement("div");
            hiddenContent.classList.add("item__content");
            hiddenContent.innerHTML = `
					  <div class="item__descr">
						<p>${item.name}(${item.quantity})</p>
					  </div>
					  <div class="item__cost">
						<p>Цена  ${(item.cost * dollarRate).toFixed(2)} руб</p>
					  </div>
					  <div class="item__addBtn">
						  <a data-groupId="${
                obj[key].groupId
              }" data-index="${index}" data-addToCart>Добавить товар</a>
					</div>
					  `;
            return hiddenContent.outerHTML;
          })
          .join("")}
		  </div>
			</details> 
			  `;
    // создём условие при котором ячейки будут подсвечиваться нужным цветом
    let priceItems = document.querySelectorAll(".item__cost");
    if (oldPrice > priceValue) {
      console.log(1);
      priceItems.forEach((item) => {
        item.classList.remove("red");
        item.classList.add("green");
      });
    } else if (oldPrice < priceValue) {
      console.log(2);
      priceItems.forEach((item) => {
        item.classList.remove("green");
        item.classList.add("red");
      });
    }
    wrap.append(contentItem);
  }
}
// функция добавления товара в корзину
function addToCart(data) {
  const cart = document.querySelector(".cart__content");
  const addBtnPar = document.querySelector(".content__items");
  // добавляем событие на кнопку добавить
  addBtnPar.addEventListener("click", (e) => {
    let target = e.target;
    if (target.hasAttribute("data-addToCart")) {
      let groupId = target.dataset.groupid;
      let index = target.dataset.index;
      let itemCart = document.createElement("div");
      itemCart.classList.add("cart__item");
      // создаём структуру товара в корзине
      itemCart.innerHTML = `
		<div class="cart__item-name">
		<p>${data[groupId].additionals[index].name}</p>
	  </div>
	  <div class="cart__item-quantity">
		<input type="number" value='1' min='0' max='${
      data[groupId].additionals[index].quantity
    }' />
	  </div>
	  <div class="cart__item-cost" data-cost="${(
      data[groupId].additionals[index].cost * dollarRate
    ).toFixed(2)}">
		<p>${(data[groupId].additionals[index].cost * dollarRate).toFixed(2)} руб</p>
	  </div>
	  <div class="cart__item-delete">
		<a data-delete>Delete</a>
	  </div>
		`;
      cart.append(itemCart);
      // считаем итого
      totalCalc();
      // пересчитваем если изменилось кол-во
      reCount();
    }
  });
}

// функция удаления товара
function deleteCartItem() {
  const deleteBtnsPar = document.querySelector(".cart__content");
  // навешиваем событие
  deleteBtnsPar.addEventListener("click", (e) => {
    let target = e.target;
    if (target.hasAttribute("data-delete")) {
      target.parentElement.parentElement.remove();
    }
    // пересчитваем итого при удалении
    totalCalc();
  });
}

// функция рассчёта итого
function totalCalc() {
  const cost = document.querySelectorAll(".cart__item-cost");
  const totalBlock = document.querySelector(".cart__total");
  let total = 0;
  let price;
  // если в корзине нет товара, то ставим цену на 0
  if (cost.length == 0) {
    totalBlock.innerHTML = `0 $`;
  }
  // проходимся по ценам в корзине и считаем итого
  cost.forEach((item) => {
    price = parseFloat(item.textContent);
    total += price;
    totalBlock.innerHTML = `Итого ${+total.toFixed(2)} руб`;
  });
}

// функция пересчёта цен при увеличении кол-во товара
function reCount() {
  const countInput = document.querySelectorAll(".cart__item-quantity input");
  // проходимся по инпутам с кол-вом
  countInput.forEach((item) => {
    const countInputPar = item.parentElement;
    // при изменении инпута изменяем цену
    item.oninput = function () {
      // не позволяем вписать число больше, чем есть товара
      if (item.value > parseInt(item.getAttribute("max"))) {
        item.value = parseInt(item.getAttribute("max"));
      }
      // если значение инпута 0, то удаляем товар и пересчитваем итого
      if (item.value === 0) {
        countInputPar.parentElement.remove();
        totalCalc();
      }
      let newCost =
        parseFloat(countInputPar.nextElementSibling.dataset.cost) * item.value;
      countInputPar.nextElementSibling.innerHTML = `${newCost} руб`;
      totalCalc();
    };
  });
}
// функция изменения курса доллара
function newDollarRate() {
  const dollarRateInput = document.querySelector("#rateInput");
  // подключаемся к событию изменения инпута с курсом
  // запрещаем вводить больше или меньше допустимых значений
  dollarRateInput.onchange = function () {
    if (this.value > parseInt(this.getAttribute("max"))) {
      this.value = parseInt(this.getAttribute("max"));
    }
    if (this.value < parseInt(this.getAttribute("min"))) {
      this.value = parseInt(this.getAttribute("min"));
    }
    dollarRate = this.value;
    // перерисовываем контент
    document.querySelector(".content__items").innerHTML = "";
    // передаём старое значение цены, чтобы в рендере подсветило ячейки
    oldPrice = priceValue;
    render(newData, document.querySelector(".content__items"));
  };
}
newDollarRate();
