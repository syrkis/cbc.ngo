import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("en", () => import("../lang/en.json"));
register("pt", () => import("../lang/pt.json"));

init({
  fallbackLocale: "en",
  initialLocale: getLocaleFromNavigator()
});
