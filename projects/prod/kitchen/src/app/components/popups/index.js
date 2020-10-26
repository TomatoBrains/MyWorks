import $ from "jquery";
$(".order").on("click", function (e) {
  e.preventDefault;
  $("#popupForm").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
$(".politic-btn").on("click", function () {
  $(".politic").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
$(".fileForm-btn").on("click", function () {
  let name = $(this).children().html();
  $(".popupForm-file .fileName").html(name);
  $(".popupForm-file").fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
});
$(".popup-background").on("click", function () {
  $("#popupForm").fadeOut();
  $(".popupForm-file").fadeOut();
  $(".popup-background").fadeOut();
  $(".politic").fadeOut();
  $(".popupTy").fadeOut();
  $(".popupPop").fadeOut();
  $(".popupSty").fadeOut();
  $("html").removeClass("overflowHidden");
});
$(".close").on("click", function () {
  $("#popupForm").fadeOut();
  $(".popupForm-file").fadeOut();
  $(".popup-background").fadeOut();
  $(".politic").fadeOut();
  $(".popupTy").fadeOut();
  $(".popupPop").fadeOut();
  $(".popupSty").fadeOut();
  $("html").removeClass("overflowHidden");
});

/* $("form").on("submit", function (e) {
  $(".popup-background").fadeIn();
  $(".popupTy").fadeIn();
  $("html").addClass("overflowHidden");
  $("#popupForm").fadeOut();
  $(".popupSty").fadeOut();
  $(".popupPop").fadeOut();
}); */

/* let moreSty = $(".popupSty");
$(".styles__cards-item").on("click", function () {
  if ($(this).hasClass("stop")) {
    null;
  } else {
    moreSty.filter($(this).data("style")).fadeIn();
    $(".popup-background").fadeIn();
    $("html").addClass("overflowHidden");
    $(window).trigger("scroll");
  }
}); */
/* let morePop = $(".popupPop");
$(".popBtn").on("click", function () {
  morePop.filter($(this).data("pop")).fadeIn();
  $(".popup-background").fadeIn();
  $("html").addClass("overflowHidden");
}); */
$(function () {
  $(".styles__cards-item").on("click", function () {
    let style = $(this).data("obj");
    let imgs = stylePopup[style].imgs;
    /* let id = `#${stylePopup[style].id} .popupSty__imgs-sm`; */
    let id = `${stylePopup[style].id}`;
    /* $(".popupsStyles").prepend(`
			<div class="popupSty" id="${stylePopup[style].id}">
			<div class="popupSty-wrap">
				<div class="popupSty__imgs">
					<div class="popupSty__imgs-big">
						<a href="${stylePopup[style].imgBig}" data-fancybox="${style}"><img 
								src="${stylePopup[style].imgBig}" alt=""></a>
					</div>
					<div class="popupSty__imgs-sm">
						
					</div>
				</div>
				<div class="popupSty__descr">
					<div class="popupSty__descr-content">
						<p class="popupSty__descr-title txt24 bold">${stylePopup[style].title}</p>
						<p class="popupSty__descr-txt txt18 med">${stylePopup[style].descr}
						</p>
						<p class="popupSty__descr-txt txt18 med">Оставьте заявку, если вам понравился данный стиль. Наш
							дизайнер сделает небольшую подборку наших работ схожих
							с этой и подарит скидку 10%
						</p>
					</div>
					<form action="">
						<input type="hidden" name="title" value="Форма стиля модерн">
						<span class="input-wrap">
							<input name="phone" class="inputTel" required class="txt18" type="tel"
								placeholder="Введите ваш телефон">
						</span>
						<span class="input-wrap">
							<input name="name" required class="txt18" type="name" placeholder="Введите ваше имя">
						</span>
						<span class="btn-wrap">
							<button class="txt20 fontAb mainBtn">ОСТАВИТЬ ЗАЯВКУ </button>
						</span>
					</form>
				</div>
			</div>
			<div class="close-wrap">
				<span class="popupSty--close close"><svg id="Capa_1" enable-background="new 0 0 413.348 413.348" height="512"
						viewBox="0 0 413.348 413.348" width="512" xmlns="http://www.w3.org/2000/svg">
						<path fill="#eeab09"
							d="m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z" />
					</svg></span>
			</div>
		</div>`); */
    $(".popupSty").attr("id", id);
    $(
      ".popupSty__imgs-big"
    ).html(`<a href="${stylePopup[style].imgBig}" data-fancybox="${style}"><img 
	  src="${stylePopup[style].imgBig}" alt=""></a>`);
    $(".popupSty__imgs-sm").html("");
    for (var i = 0; i < imgs.length; i++) {
      $(".popupSty__imgs-sm")
        .append(`<a href="${imgs[i]}" data-fancybox="${style}"><img 
			  src="${imgs[i]}" alt=""></a>`);
    }
    $(".popupSty__descr-title").html(`${stylePopup[style].title}`);
    $(".popupSty__descr-txt").html(`${stylePopup[style].descr}`);
    let moreSty = $(".popupSty");
    moreSty.filter($(this).data("style")).fadeIn();
    $(".popup-background").fadeIn();
    $("html").addClass("overflowHidden");
  });
});
let stylePopup;
stylePopup = {
  mod: {
    id: "mod",
    title: "Модерн",
    descr: `Большинство современных кухонь тяготеет к стилю модерн.
	И неудивительно – дизайн в этом стиле отвечает динамичности
	современной жизни. Для модерна характерны отсутствие строгих
	линий и тяга к асимметрии. При этом функциональность
	и рациональность ему совсем не чужды.
	Модерн приемлет пластик, стекло, металл, яркость красок
	и разнообразие форм. Освещение может быть совершенно разным
	– для модерна одинаково характерны оригинальные абажуры
	с плавными формами и асимметричной конструкцией
	и точечные светильники.`,
    imgBig: "img/styles/mod/img2.jpg",
    imgs: [
      "img/styles/mod/img3.jpg",
      "img/styles/mod/img4.jpg",
      "img/styles/mod/img5.jpg",
      "img/styles/mod/img1.png",
    ],
  },
  cls: {
    id: "cls",
    title: "Классика",
    descr: `Классическую кухню выбирают обычно люди, определившиеся
	в жизни. Для дизайна в стиле классика характерны простые,
	сдержанные линии, натуральные материалы, отсутствие излишней
	декоративности. При этом ставка делается на достаточно дорогие
	материалы – обои должны быть сдержанными, но не дешевыми,
	кухонный гарнитур часто делается из натурального дерева, на полу
	предпочтительнее паркет. Для классики важны симметрия,
	лаконичный неброский рисунок.`,
    imgBig: "img/styles/cl/img2.jpg",
    imgs: [
      "img/styles/cl/img3.jpg",
      "img/styles/cl/img4.jpg",
      "img/styles/cl/img5.jpg",
      "img/styles/cl/img1.png",
    ],
  },
  et: {
    id: "et",
    title: "Этно-стиль",
    descr: `Здесь все зависит от того, что лежит в основе. Если это кантри
		– то в первую очередь ориентация идет на натуральное дерево,
		грубые рубленные формы мебели, теплые оттенки цветов. Если
		это средиземноморский стиль, то акцент делается на сочетании
		белых и сине-голубых цветов в оформлении интерьера. Если
		это прованс, то общую атмосферу создают открытые полочки,
		обилие декоративных элементов. В любом случае учитывается
		декоративно-прикладное искусство тех народов, в чьем стиле
		создается кухня. На русской кухне будет уместна хохлома, гжель
		и старые антикварные утюги с горшками.`,
    imgBig: "img/styles/et/img2.jpg",
    imgs: [
      "img/styles/et/img3.jpg",
      "img/styles/et/img4.jpg",
      "img/styles/et/img5.jpg",
      "img/styles/et/img1.png",
    ],
  },
  hi: {
    id: "hi",
    title: "Хай-тек",
    descr: `Хай-тек при этом тяготеет к обилию стекла и металла и
		всевозможных
		высокотехнологичных элементов. Для кухонных гарнитуров в стиле
		хай-тек свойственна эргономика, функциональность, удобство. Упор
		делается на применении разнообразной фурнитуры и наполнителей
		для шкафов. Обилие металла в конструкции мебели – тоже признак
		хай-тека. Само помещение обязательно зонируется. Приветствуются
		яркие акценты в оформлении – футуристические цвета текстиля,
		пластиковые обеденные зоны из яркого материала.
		Также отличается сдержанностью линий, минимальностью деталей
		и полным отсутствием интереса к декоративным вычурным элементам.`,
    imgBig: "img/styles/hi/img2.jpeg",
    imgs: [
      "img/styles/hi/img3.jpg",
      "img/styles/hi/img4.jpg",
      "img/styles/hi/img5.jpeg",
      "img/styles/hi/img1.png",
    ],
  },
  lof: {
    id: "lof",
    title: "Лофт",
    descr: `Этот стиль основан на сочетании стилей, вернее вещей разных
		стилевых направлений. Неудивительно,что переводится название
		стиля, как чердак, ведь именно в это помещение стаскиваются
		все ненужные вещи. Для дизайна «Loft» характерны сочетание грубой
		мебели, оштукатуренных стен, кирпичной кладки с современной
		техникой, антикварными вещицами типа старинных утюгов и ухватов.
		Именно здесь можно смело выставлять старый буфет рядом
		с индукционной плитой, приправляя все красной телефонной будкой
		и шторами с пляшущими человечками на фоне ядерного взрыва.
		Такой стиль крайне провокационен.`,
    imgBig: "img/styles/lo/img2.jpg",
    imgs: [
      "img/styles/lo/img3.jpg",
      "img/styles/lo/img4.jpg",
      "img/styles/lo/img1.png",
    ],
  },
  min: {
    id: "min",
    title: "Минимал",
    descr: `Отличается сдержанностью линий, минимальностью деталей
	и полным отсутствием интереса к декоративным вычурным
	элементам. Такой дизайн любят выбирать те, кто молод. Для дизайна
	в стиле минимализм характерны подчеркнуто простые линии,
	геометрические формы, минимум деталей. Из материалов
	приветствуется стекло, металл, пластик, МДФ.`,
    imgBig: "img/styles/min/img2.jpg",
    imgs: [
      "img/styles/min/img3.jpg",
      "img/styles/min/img4.jpg",
      "img/styles/min/img5.jpg",
      "img/styles/min/img1.png",
    ],
  },
  bar: {
    id: "bar",
    title: "Барокко",
    descr: `Характерные черты мебели – это лакировка, большое количество
	резьбы, позолота и изогнутых линий.
	Здесь очень просто переборщить, но грамотно сделанная мебель
	будет выглядеть как роскошь характерная для высшего класса людей.`,
    imgBig: "img/styles/b/img2.jpg",
    imgs: [
      "img/styles/b/img3.jpg",
      "img/styles/b/img4.jpeg",
      "img/styles/b/img5.jpg",
      "img/styles/b/img1.png",
    ],
  },
  pro: {
    id: "pro",
    title: "Прованс",
    descr: `Стиль самобытный и оригинальный, поэтому легкоузнаваемый.
	Он вобрал в себя черты, присущие архитектуре одноименной
	французской провинции. Изначально деревенские дома оформлялись
	просто и без излишеств, но сейчас в этом и есть их главная
	особенность. Уютная винтажная атмосфера выглядит естественно,
	но модно. Современный прованс не терпит вычурности, по максимуму
	прост и функционален. Для этого стиля характерно использование
	натуральных и экологичных материалов, и дизайнеры
	останавливаются на древесине.`,
    imgBig: "img/styles/pr/img2.jpg",
    imgs: [
      "img/styles/pr/img3.jpg",
      "img/styles/pr/img4.jpg",
      "img/styles/pr/img5.jpg",
      "img/styles/pr/img1.png",
    ],
  },
};
/* $(function () {
  $(".popBtn").on("click", function () {
    let pop = $(this).data("obj");
    let imgs = popularPopup[pop].imgs;
    let ul = popularPopup[pop].ul;
    let id = `${popularPopup[pop].id}`;
    $(".popupPop").attr("id", id);
    $(
      ".popupPop__imgs-big"
    ).html(`<a href="${popularPopup[pop].bigImg}" data-fancybox="${pop}"><img 
		src="${popularPopup[pop].bigImg}" alt=""></a>`);
    $(".popupPop__imgs-sm").html("");
    for (var i = 0; i < imgs.length; i++) {
      $(".popupPop__imgs-sm")
        .append(`<a href="${imgs[i]}" data-fancybox="${pop}"><img 
					  src="${imgs[i]}" alt=""></a>`);
    }
    $(".popupPop__descr-title").html(`${popularPopup[pop].title}`);
    $(".popupPop__descr-ul ul").html("");
    for (var i = 0; i < ul.length; i++) {
      $(".popupPop__descr-ul ul").append(`<li class="txt20 med">${ul[i]}</li>`);
    }
    let morePop = $(".popupPop");
    morePop.filter($(this).data("pop")).fadeIn();
    $(".popup-background").fadeIn();
    $("html").addClass("overflowHidden");
  });
}); */
let popularPopup = {
  new: {
    id: "new",
    title: "Кухня New York",
    ul: [
      "Фасады из Премиум пластика Fenix",
      "Столешница МДФ+пластик",
      "Фартук Шпон",
      "Фурнитура BLUM",
    ],
    cost: "17000",
    bigImg: "img/popular/n1.jpg",
    imgs: [
      "img/popular/n2.jpg",
      "img/popular/n3.jpg",
      "img/popular/n4.jpg",
      "img/popular/n5.jpg",
      "img/popular/n1.jpg",
    ],
  },
  t: {
    id: "t",
    title: "Кухня Tokyo",
    ul: [
      "Фасады из Премиум акрила REHAU",
      "Столешница и фартук из искусств",
      "Подъемные механизмы AVENTOS",
      "Фурнитура BLUM",
    ],
    cost: "17000",
    bigImg: "img/popular/t1.jpeg",
    imgs: ["img/popular/t2.jpeg", "img/popular/t3.jpeg", "img/popular/t1.jpeg"],
  },
  s: {
    id: "s",
    title: "Кухня Stone",
    ul: [
      'Фасады "под дерево" из мдф в пластике ARPA',
      'Фасады "бетон" из мдф в пластике Cleaf',
      'Столешница ДСП+Пластик "Союз" с еврозапилом',
      "Фурнитура BLUM и GRASS",
      "Встроенная в столешницу розетка",
      "Подъемные механизмы AVENTOS",
      "Барная стойка из массива дуба",
      "Стеллаж с фасадами из графитового стекла",
    ],
    cost: "17000",
    bigImg: 'img/popular/s5.jpg"',
    imgs: [
      "img/popular/s2.jpg",
      "img/popular/s3.jpg",
      "img/popular/s4.jpg",
      "img/popular/s1.jpg",
      "img/popular/s5.jpg",
    ],
  },
  c: {
    id: "c",
    title: "Кухня Cappuchino",
    ul: [
      "Фасады МДФ+Пластик Fenix",
      "Столешница и фартук: МДФ+пластик",
      "Фурнитура BLUM",
    ],
    cost: "17000",
    bigImg: "img/popular/c1.jpg",
    imgs: [
      "img/popular/c2.jpg",
      "img/popular/c3.jpg",
      "img/popular/c4.jpg",
      "img/popular/c5.jpg",
      "img/popular/c1.jpg",
    ],
  },
  sw: {
    id: "sw",
    title: "Кухня В шоуруме",
    ul: [
      "Фасады МДФ+Шпон ореха, МДФ+Пластик Fenix",
      "Столешница из массива дуба",
      "Фурнитура BLUM, Hettich",
      "Подъемные механизмы AVENTOS",
      `Барная стойка: Массив
		дуба+стабилизированный мох`,
    ],
    cost: "17000",
    bigImg: "img/popular/sw1.jpg",
    imgs: [
      "img/popular/sw2.jpeg",
      "img/popular/sw3.jpg",
      "img/popular/sw4.jpg",
      "img/popular/sw5.jpg",
      "img/popular/sw1.jpg",
    ],
  },
  ci: {
    id: "ci",
    title: "Кухня Cinema",
    ul: [
      "Фасады МДФ+Пластик ARPA",
      "Столешница МДФ+пластик",
      "Подъемные механизмы AVENTOS",
      "Фурнитура BLUM",
    ],
    cost: "17000",
    bigImg: "img/popular/si1.jpg",
    imgs: [
      "img/popular/si2.jpg",
      "img/popular/si3.jpg",
      "img/popular/si4.jpg",
      "img/popular/si5.jpg",
      "img/popular/si1.jpg",
    ],
  },
  w: {
    id: "w",
    title: "Кухня White&Wood",
    ul: [
      "Фасады МДФ+Эмаль, Массив дуба",
      "Столешница Массив дуба",
      "Фурнитура BLUM",
    ],
    cost: "17000",
    bigImg: 'img/popular/w1.jpg"',
    imgs: [
      "img/popular/w2.jpg",
      "img/popular/w3.jpg",
      "img/popular/w4.jpg",
      "img/popular/w1.jpg",
    ],
  },
  wg: {
    id: "wg",
    title: "Кухня Wood gloss",
    ul: [
      "Фасады МДФ+пластик ARPA",
      "Фурнитура Blum,",
      "Столешница ДСП+пластик,",
      "Фартук ДСП+пластик",
    ],
    cost: "17000",
    bigImg: "img/popular/wg1.jpeg",
    imgs: [
      "img/popular/wg2.jpg",
      "img/popular/wg3.jpg",
      "img/popular/wg1.jpeg",
    ],
  },
};
