$(document).ready(function () {
  var currentFlor = 02;
  var counterUp = $(".counter-up"); //кнопка вверх
  var counterDown = $(".counter-down"); //кнопка вниз
  var floorPath = $(".home-image path"); // каждый отдельный этаж в svg
  var closeBtn = $(".button-close");
  var modal = $(".modal");
  var openBtnModal = $(".button-primary");
  // функция наведения мыши на этаж
  floorPath.on("mouseover", function () {
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFlor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter-number").text(currentFlor); //значение этажа в счётчик
  });

  counterUp.on("click", function () {
    //отслеживаем клик по кнопке вверх
    if (currentFlor < 18) {
      currentFlor++; //прибавляем +1 этаж
      addZeroFloor = currentFlor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      }); //форматируем переменную с этажом чтобы было 01 а не 1
      $(".counter-number").text(addZeroFloor); // записываем значение этажа в счётчик
      floorPath.removeClass("current-floor"); // удаляем активный класс у этажей
      $(`[data-floor = ${addZeroFloor}]`).toggleClass("current-floor"); // подсвечиваем текущий этаж
    }
  });
  counterDown.on("click", function () {
    if (currentFlor > 2) {
      currentFlor--;
      addZeroFloor = currentFlor.toLocaleString("en-US", {
        minimumIntegerDigits: 2,
        useGrouping: false,
      });
      $(".counter-number").text(addZeroFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor = ${addZeroFloor}]`).toggleClass("current-floor");
    }
  });

  closeBtn.on("click", function () {
    modal.addClass("hide");
    modal.removeClass("show");
  });

  openBtnModal.on("click", function () {
    modal.addClass("show");
    modal.removeClass("hide");
  });
});
