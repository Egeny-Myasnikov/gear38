import { createApp } from "vue";
import Main from "./Main.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import components from "@/components/UI/index";
const main = createApp(Main);

main.use(store).use(router).mount("#main");
// main.forceUpdate()

components.forEach((component) => {
  main.component(component.name, component);
});

//phoneMask directive
main.directive("phoneMask", {
  mounted(el) {
    const getInputValues = (input) => input.value.replace(/\D/g, "");
    el.oninput = function (e) {
      if (!e.isTrusted) {
        return;
      }

      let input = e.target,
        inputNumbersValue = getInputValues(input),
        formatedInputValue = "",
        selectionStart = input.selectionStart;
      if (!inputNumbersValue) {
        return (input.value = "");
      }
      if (input.value.length != selectionStart) {
        if (e.data && /\D/g.test(e.data)) {
          input.value = inputNumbersValue;
        }
        return;
      }
      if (["7", "8", "9"].indexOf(inputNumbersValue[0]) > -1) {
        //russian
        if (inputNumbersValue[0] === "9") {
          inputNumbersValue = "7" + inputNumbersValue;
        }
        let firstSymbols = inputNumbersValue[0] === "8" ? "8" : "+7";
        formatedInputValue = firstSymbols + " ";
        if (inputNumbersValue.length > 1) {
          formatedInputValue += "(" + inputNumbersValue.substring(1, 4);
        }
        if (inputNumbersValue.length >= 5) {
          formatedInputValue += ") " + inputNumbersValue.substring(4, 7);
        }
        if (inputNumbersValue.length >= 8) {
          formatedInputValue += "-" + inputNumbersValue.substring(7, 9);
        }
        if (inputNumbersValue.length >= 10) {
          formatedInputValue += "-" + inputNumbersValue.substring(9, 11);
        }
      } else {
        //not russian
        formatedInputValue = "+" + inputNumbersValue.substring(0, 16);
      }
      input.value = formatedInputValue;
    };
    el.onkeydown = function (e) {
      if (!e.isTrusted) {
        return;
      }
      const input = e.target;
      if (e.keyCode == 8 && getInputValues(input).length == 1) {
        input.value = "";
      }
    };
    el.onpaste = function () {
      if (!e.isTrusted) {
        return;
      }
      const pasted = e.clipboardData || window.clipboardData;
      const input = e.target;
      const inputNumbersValue = getInputValues(input);
      if (pasted) {
        const pastedText = pasted.getData("Text");
        if (/\D/g.test(pastedText)) {
          input.value = inputNumbersValue;
        }
      }
    };
  },
});

main.directive("overflowHidden", {
  mounted(el) {
    document.body.style.overflow = "hidden";
  },
  unmounted(el) {
    document.body.removeAttribute("style");
  },
});
